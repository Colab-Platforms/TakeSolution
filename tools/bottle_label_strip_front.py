"""Build a 360-degree label strip + shading map from ONE front photo (no back render available).

The visible front of the label (about +-68 degrees) is unwrapped flat; the rest of the
circumference, which no photo shows, is filled with the plain label colour. At runtime the
bottle then turns with its real front artwork travelling round, and a plain silver back.

usage: python bottle_label_strip_front.py FRONT.png OUT_DIR NAME CX R TOP BOTTOM
  FRONT       bottle photo at its final display size (transparent or white background)
  CX, R       label centre and radius in that photo (pixels)
  TOP, BOTTOM label band rows
Outputs: NAME-label.jpg (albedo strip), NAME-shade.png (multiply map), NAME-label.json (geometry)
"""
import sys, json
import numpy as np
from PIL import Image

FRONT, OUT, NAME = sys.argv[1], sys.argv[2], sys.argv[3]
CX, R, TOP, BOT = float(sys.argv[4]), float(sys.argv[5]), int(sys.argv[6]), int(sys.argv[7])
H = BOT - TOP
C = int(round(2 * np.pi * R))  # strip width = circumference


def load(p):
    im = Image.open(p).convert('RGBA'); bg = Image.new('RGBA', im.size, (255, 255, 255, 255)); bg.alpha_composite(im)
    return np.asarray(bg.convert('RGB')).astype(np.float32)


F = load(FRONT)


def bilinear(img, xs, ys):
    x0 = np.clip(np.floor(xs).astype(int), 0, img.shape[1] - 2); y0 = np.clip(np.floor(ys).astype(int), 0, img.shape[0] - 2)
    fx = (xs - x0)[..., None]; fy = (ys - y0)[..., None]
    a = img[y0, x0]; b = img[y0, x0 + 1]; c = img[y0 + 1, x0]; d = img[y0 + 1, x0 + 1]
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy


def shading(img):
    """Smooth lighting of the label band: robust per-column x per-row brightness."""
    band = img[TOP:BOT, int(CX - R):int(CX + R) + 1].mean(2)
    col = np.percentile(band, 75, axis=0)
    col = np.convolve(np.pad(col, 6, mode='edge'), np.ones(13) / 13, 'valid')
    row = np.percentile(band / col[None, :], 75, axis=1)
    row = np.convolve(np.pad(row, 10, mode='edge'), np.ones(21) / 21, 'valid')
    return np.outer(row, col)


S = shading(F)
th = np.radians(np.arange(-70, 70.0001, 0.1))
xs = CX + R * np.sin(th)
ys = np.linspace(TOP, BOT - 1, H)
XX, YY = np.meshgrid(xs, ys)
rgb = bilinear(F, XX, YY)
sx = np.clip(np.round(xs - int(CX - R)).astype(int), 0, S.shape[1] - 1)
shade = S[:, sx][..., None]
fa = rgb / np.maximum(shade, 1) * 190.0          # albedo, bare silver ~ 190
deg = np.degrees(th)

plain_row = np.percentile(fa[:, np.abs(deg) < 60], 72, axis=1)   # plain label colour per row
k = np.ones(15) / 15                                           # smooth it so the plain back has no streaks
plain_row = np.stack([np.convolve(np.pad(plain_row[:, c], 7, mode='edge'), k, 'valid') for c in range(3)], 1)
U = np.linspace(-180, 180, C, endpoint=False)
idx = np.clip(np.round((U + 70) / 0.1).astype(int), 0, fa.shape[1] - 1)
cf = fa[:, idx]
ramp = lambda v, a, b: np.clip((v - a) / (b - a), 0, 1)
wf = ramp(U, -68, -60) * (1 - ramp(U, 60, 68))   # photo owns the front, fades into plain label at the sides
strip = cf * wf[None, :, None] + plain_row[:, None, :] * (1 - wf)[None, :, None]

# flat-field: remove lighting left in the photo (text stays below the 85th percentile)
lum = strip.mean(2)
ref = plain_row.mean(1)
gain = np.percentile(lum / ref[:, None], 85, axis=0)
gain = np.convolve(np.pad(gain, 2, mode='wrap'), np.ones(5) / 5, 'valid')
strip = np.clip(strip / gain[None, :, None], 0, 255).astype(np.uint8)
pad = 64
strip = np.concatenate([strip, strip[:, :pad]], axis=1)
Image.fromarray(strip).save(f'{OUT}/{NAME}-label.jpg', quality=90, optimize=True)

sh = np.clip(S / 190.0 * 255.0, 0, 255).astype(np.uint8)
Image.fromarray(sh, 'L').convert('RGB').save(f'{OUT}/{NAME}-shade.png', optimize=True)
json.dump({'cx': CX, 'r': R, 'top': TOP, 'bottom': BOT, 'x0': int(CX - R), 'stripWidth': C},
          open(f'{OUT}/{NAME}-label.json', 'w'), indent=1)
print('strip', strip.shape, 'shade', sh.shape, 'geometry', {'cx': CX, 'r': R, 'top': TOP, 'bottom': BOT, 'x0': int(CX - R), 'stripWidth': C})
