"""Build a flat 360-degree label strip + a static shading map for the bottle rotation.

Inputs : front photo (bottle.jpg) and a back-angle render (46.png).
Outputs: bottle-label.jpg (albedo strip, full circumference) and bottle-shade.png
         (lighting of the label band, applied with multiply at runtime).
"""
import sys, json
import numpy as np
from PIL import Image, ImageFilter

FRONT, BACK, OUT = sys.argv[1], sys.argv[2], sys.argv[3]

# ---- geometry (pixels in the front photo) --------------------------------
CX, R = 322.5, 265.5          # body centre / radius
TOP, BOT = 288, 878           # label band rows
H = BOT - TOP
C = int(round(2 * np.pi * R))  # strip width = circumference
# back render geometry
BCX, BR, BTOP, BBOT = 154.5, 88.5, 126, 324
TMAX = np.radians(70)          # use only the well-resolved part of each view

def load(p):
    im = Image.open(p).convert('RGBA'); bg = Image.new('RGBA', im.size, (255, 255, 255, 255)); bg.alpha_composite(im)
    return np.asarray(bg.convert('RGB')).astype(np.float32)

F = load(FRONT); B = load(BACK)

def bilinear(img, xs, ys):
    x0 = np.clip(np.floor(xs).astype(int), 0, img.shape[1] - 2); y0 = np.clip(np.floor(ys).astype(int), 0, img.shape[0] - 2)
    fx = (xs - x0)[..., None]; fy = (ys - y0)[..., None]
    a = img[y0, x0]; b = img[y0, x0 + 1]; c = img[y0 + 1, x0]; d = img[y0 + 1, x0 + 1]
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy

def shading(img, cx, r, top, bot):
    """Smooth lighting S(x,y) of the label band: robust per-column brightness x per-row brightness."""
    band = img[top:bot, int(cx - r):int(cx + r) + 1].mean(2)
    col = np.percentile(band, 75, axis=0)                 # text is darker -> high percentile ~ bare silver
    col = np.convolve(np.pad(col, 6, mode='edge'), np.ones(13) / 13, 'valid')
    row = np.percentile(band / col[None, :], 75, axis=1)
    row = np.convolve(np.pad(row, 10, mode='edge'), np.ones(21) / 21, 'valid')
    return np.outer(row, col)                              # (h, w)

def unwrap(img, cx, r, top, bot, out_h):
    """Front-view projection -> albedo on an angle grid (degrees -70..70 at 0.1deg)."""
    S = shading(img, cx, r, top, bot)
    th = np.radians(np.arange(-70, 70.0001, 0.1))
    xs = cx + r * np.sin(th)
    ys = np.linspace(top, bot - 1, out_h)
    XX, YY = np.meshgrid(xs, ys)
    rgb = bilinear(img, XX, YY)
    sx = np.clip(np.round(xs - int(cx - r)).astype(int), 0, S.shape[1] - 1)
    sy = np.clip(np.round(np.linspace(0, S.shape[0] - 1, out_h)).astype(int), 0, S.shape[0] - 1)
    shade = S[np.ix_(sy, sx)][..., None]
    return rgb / np.maximum(shade, 1) * 190.0, th        # albedo, bare silver ~ 190

fa, th = unwrap(F, CX, R, TOP, BOT, H)
ba, _ = unwrap(B, BCX, BR, BTOP, BBOT, H)

# tone-match the back render to the front (bare-silver level per channel)
bare = lambda a: np.percentile(a.reshape(-1, 3), 70, axis=0)
ba = ba * (bare(fa) / bare(ba))[None, None, :]
bm = bare(ba)[None, None, :]
ba = bm + (ba - bm) * 1.35                                  # restore print contrast lost in the small render

# rotation between the views, measured from the left edge of the 'T' in TAKE:
# front: x=108 -> -53.9 deg ; back render: x=231 -> +59.8 deg
PHI = 113.5
deg = np.degrees(th)
# ---- compose the full strip (u = -180..180 deg) --------------------------
# bare label colour per row: bright percentile of the front albedo (text is darker)
plain_row = np.percentile(fa[:, np.abs(deg) < 60], 72, axis=1)
U = np.linspace(-180, 180, C, endpoint=False)

def sample(albedo, center):
    rel = (U - center + 180) % 360 - 180
    idx = np.clip(np.round((rel + 70) / 0.1).astype(int), 0, albedo.shape[1] - 1)
    return albedo[:, idx], rel

cf, rf = sample(fa, 0.0)
cb, rb = sample(ba, -PHI)
ramp = lambda v, a, b: np.clip((v - a) / (b - a), 0, 1)
# front owns -64..68 deg; the back render owns the region left of it (switch happens in blank margin)
wf = ramp(U, -61, -57) * (1 - ramp(U, 62, 70))
wb = (1 - ramp(U, -61, -57)) * ramp(rb, -70, -58) * (U < 0)
wp = np.clip(1 - wf - wb, 0, 1)
strip = (cf * wf[None, :, None] + cb * wb[None, :, None] + plain_row[:, None, :] * wp[None, :, None]) / (wf + wb + wp)[None, :, None]
print('photo coverage: %.0f of 360 deg' % (((wf + wb) > 0.5).mean() * 360))

# flat-field: every column's bare-silver level -> the same per-row reference, removing residual
# lighting baked into either photo (text stays, since it sits below the 85th percentile)
lum = strip.mean(2)
ref = plain_row.mean(1)
gain = np.percentile(lum / ref[:, None], 85, axis=0)
gain = np.convolve(np.pad(gain, 2, mode="wrap"), np.ones(5) / 5, 'valid')
strip = strip / gain[None, :, None]
strip = np.clip(strip, 0, 255).astype(np.uint8)
pad = 64                                                   # wrap margin so runtime never reads past the edge
strip = np.concatenate([strip, strip[:, :pad]], axis=1)
Image.fromarray(strip).save(OUT + '/bottle-label.jpg', quality=90, optimize=True)

# shading for the band as seen from the front, normalised so bare silver x shade == original
S = shading(F, CX, R, TOP, BOT)
sh = np.clip(S / 190.0 * 255.0, 0, 255).astype(np.uint8)
Image.fromarray(sh, 'L').convert('RGB').save(OUT + '/bottle-shade.png', optimize=True)

json.dump({'cx': CX, 'r': R, 'top': TOP, 'bottom': BOT, 'x0': int(CX - R), 'stripWidth': C, 'phiBack': float(PHI)},
          open(OUT + '/bottle-label.json', 'w'), indent=1)
print('strip', strip.shape, 'shade', sh.shape)
