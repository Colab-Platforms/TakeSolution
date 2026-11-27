import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Realistic 360° bottle rotation on hover.
 *
 * The bottle photo (glass, cap, capsules, studio lighting) stays fixed — exactly like a
 * turntable render — while the real label artwork travels around the cylinder:
 *   label strip  : the full 360° label, unwrapped flat (built by tools/bottle_label_strip.py)
 *   shade map    : the fixed lighting of the label band, applied with "multiply"
 * Each frame, every pixel column of the label band is mapped back onto the cylinder
 * (x = cx + r·sin θ) and filled from the strip at angle θ − rotation.
 */
const DEFAULT_GEOMETRY = { cx: 322.5, r: 265.5, top: 288, bottom: 878, x0: 57, stripWidth: 1668 };
const TURN_SECONDS = 5.2; // one revolution, timed from the reference videos
const TAU = Math.PI * 2;

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export default function BottleRotate({ src, label, shade, geometry = DEFAULT_GEOMETRY, alt, disabled = false, className = '' }) {
  const canvasRef = useRef(null);
  const assets = useRef(null);
  const anim = useRef({ raf: 0, angle: 0, speed: 0, hovering: false, last: 0 });
  const [ready, setReady] = useState(false);
  const [moving, setMoving] = useState(false);

  // Load the three images once; the strip and shade are small (~140 KB together).
  useEffect(() => {
    if (disabled) return undefined;
    let alive = true;
    Promise.all([loadImage(src), loadImage(label), loadImage(shade)])
      .then(([base, strip, shadeImg]) => {
        if (!alive) return;
        assets.current = { base, strip, shade: shadeImg };
        const c = canvasRef.current;
        c.width = base.naturalWidth;
        c.height = base.naturalHeight;
        c.getContext('2d').drawImage(base, 0, 0);
        setReady(true);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [src, label, shade, disabled]);

  const draw = useCallback((angle) => {
    const a = assets.current;
    const ctx = canvasRef.current?.getContext('2d');
    if (!a || !ctx) return;
    const { cx, r, top, bottom, x0, stripWidth: C } = geometry;
    const h = bottom - top;
    const width = a.shade.naturalWidth;
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(a.base, 0, 0);
    if (angle % TAU === 0) return; // front-facing: the original photo is exact
    for (let i = 0; i < width; i++) {
      const x = x0 + i;
      const t = Math.max(-0.999, Math.min(0.999, (x + 0.5 - cx) / r));
      const theta = Math.asin(t);
      const u = (((theta - angle + Math.PI) % TAU) + TAU) % TAU; // label angle 0..2π, front at π
      const sx = (u / TAU) * C;
      const sw = Math.min(6, 1 / Math.cos(theta)); // columns near the edge cover more label
      ctx.drawImage(a.strip, sx, 0, sw, h, x, top, 1, h);
    }
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(a.shade, x0, top);
    ctx.globalCompositeOperation = 'source-over';
  }, [geometry]);

  const tick = useCallback((now) => {
    const s = anim.current;
    const dt = Math.min(0.05, (now - (s.last || now)) / 1000);
    s.last = now;
    const cruise = TAU / TURN_SECONDS;
    if (s.hovering) {
      s.speed = Math.min(cruise, s.speed + cruise * dt * 2.5); // ease in
      s.angle += s.speed * dt;
    } else {
      // mouse left: brake quickly and stop right where it is (the next hover carries on from here)
      s.speed = Math.max(0, s.speed - cruise * dt * 3.2);
      s.angle += s.speed * dt;
      if (s.speed === 0) {
        s.angle %= TAU;
        s.raf = 0; s.last = 0;
        draw(s.angle);
        setMoving(false);
        return;
      }
    }
    draw(s.angle);
    s.raf = requestAnimationFrame(tick);
  }, [draw]);

  const start = useCallback(() => {
    if (disabled || !ready) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce), (max-width: 767px)').matches) return; // no spin on phones
    const s = anim.current;
    s.hovering = true;
    setMoving(true);
    if (!s.raf) { s.last = 0; s.raf = requestAnimationFrame(tick); }
  }, [disabled, ready, tick]);

  const stop = useCallback(() => { anim.current.hovering = false; }, []);

  useEffect(() => () => cancelAnimationFrame(anim.current.raf), []);

  return (
    <div
      className={`tk-rotate ${moving ? 'is-moving' : ''} ${disabled ? 'blur' : ''} ${className}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onTouchStart={() => (anim.current.hovering ? stop() : start())}
    >
      {/* the photo is always the fallback and the first paint */}
      <img className="tk-rotate-img" src={src} alt={alt} draggable="false" style={{ opacity: ready ? 0 : 1 }} />
      {!disabled && <canvas ref={canvasRef} className="tk-rotate-canvas" role="img" aria-label={alt} />}
    </div>
  );
}
