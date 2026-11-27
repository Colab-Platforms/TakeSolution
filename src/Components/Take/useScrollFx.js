import { useEffect } from 'react';

/**
 * Scroll effects for a page root.
 *
 *  [data-reveal]    → gets `is-in` once it scrolls into view (CSS handles the motion).
 *                     Optional style `--i` staggers siblings.
 *  [data-parallax]  → gets a `--p` CSS variable from -1 (below centre) to 1 (above centre)
 *                     while on screen, for gentle parallax.
 *
 * Respects prefers-reduced-motion: everything is shown immediately and parallax is off.
 */
export default function useScrollFx(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reveal = [...root.querySelectorAll('[data-reveal]')];
    const parallax = [...root.querySelectorAll('[data-parallax]')];
    // phones (Android / iPhone): no reveal or parallax animations, content is simply there
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce), (max-width: 767px)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      reveal.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    root.classList.add('fx-ready'); // hide reveal targets only once JS is running

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveal.forEach((el) => io.observe(el));

    const visible = new Set();
    const po = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      schedule();
    });
    parallax.forEach((el) => po.observe(el));

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(-1, Math.min(1, (vh / 2 - (r.top + r.height / 2)) / (vh / 2 + r.height / 2)));
        el.style.setProperty('--p', p.toFixed(4));
      });
    };
    function schedule() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();

    return () => {
      io.disconnect(); po.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(raf);
      root.classList.remove('fx-ready');
    };
  }, [rootRef]);
}
