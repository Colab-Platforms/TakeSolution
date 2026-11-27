import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { TAKE_LOGO_PATH, TAKE_LOGO_VIEWBOX } from './takeLogoPath';
import TakeHeader from './TakeHeader';

const img = (n) => `/assets/take/${n}`;

const FeatIcon = ({ name }) => <img src={img(`icon-${name}.png`)} alt="" draggable="false" />;

const features = [
  { icon: <FeatIcon name="family" />, t: 'Ageing, Rewritten.', d: "We're building a future where getting older doesn't mean getting weaker." },
  { icon: <FeatIcon name="dna" />, t: 'Your Biology, Decoded.', d: 'Every report, meal and signal you track, turned into answers you can act on.' },
  { icon: <FeatIcon name="heart" />, t: 'More Good Years.', d: 'One ecosystem built to keep you living better for longer.' },
];

/* make sure iPhone Safari treats the video as muted, then play it only while on screen */
function useAutoVideo(ref) {
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    v.muted = true;
    v.setAttribute('muted', '');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { v.pause(); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, [ref]);
}

export function TakeHero({ overlay = false, layerRef = null }) {
  const video = useRef(null);
  const root = useRef(null);
  useAutoVideo(video);
  useEffect(() => {
    const el = root.current;
    if (overlay) { el?.classList.add('is-in'); return undefined; }
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('is-in'); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [overlay]);
  return (
    <section
      className={`tk-hero2 ${overlay ? 'tk-hero2-overlay' : 'tk-hero2-main'}`}
      ref={(el) => { root.current = el; if (layerRef) layerRef.current = el; }}
    >
      <TakeHeader embedded />
      <video ref={video} className="tk-hero2-video" src={img('hero-field.mp4')} poster={img('hero-field.jpg')} muted loop playsInline autoPlay preload="auto" aria-hidden="true" />
      <div className="tk-hero2-shade" aria-hidden="true" />

      <h1 className="tk-hero2-title">
        <span><span>Live Past the</span></span>
        <span><span>Edge of Ageing.</span></span>
      </h1>

      <div className="tk-hero2-bottom">
        <ul className="tk-hero2-feats">
          {features.map((f) => (
            <li key={f.t}><span className="tk-hero2-icon">{f.icon}</span><div><b>{f.t}</b><p>{f.d}</p></div></li>
          ))}
        </ul>
        <div className="tk-hero2-cta">
          <p><span><span>Your body holds the answers.</span></span><span><span>We help you see them.</span></span></p>
          <Link to="/contact" className="tk-waitlist tk-waitlist-lg"><em className="tk-wl-text">Join the Waitlist</em><span><i className="bi bi-arrow-up-right" /></span></Link>
        </div>
      </div>

    </section>
  );
}

const steps = [
  ['Instant', 'What once took months, now happens in moments.'],
  ['Predictive', 'Seeing what is coming, long before symptoms do.'],
  ['Accessible', 'No longer limited by geography, cost or complexity.'],
  ['Intelligent', 'Where your data tells your story, and changes the ending.'],
];
const STEP_DEG = 30; // gap between numbers on the arc (measured from the design)
const INTRO_MS = 1500; // how long the girl video takes to grow from the pill to full screen
const TICKS = Array.from({ length: 60 }, (_, i) => i * 6);

export function TakeWhatIf() {
  const [idx, setIdx] = useState(0);
  const pill = useRef(null);
  const pillBox = useRef(null);
  const layer = useRef(null);
  const [intro, setIntro] = useState(false);
  const sec = useRef(null);
  const opening = useRef(false); // the video-open animation has started (plays once)
  useAutoVideo(pill);

  /* Opening (as in the reference video): the small girl video in the pill grows into the
     full-screen hero, then the page rests on the hero. */
  /* Once the visitor has gone past "What If" into the video, the white numbers page is removed,
     so scrolling back up stops at the video hero instead of returning to the dial. */
  const hideWhatIf = useCallback(() => {
    const el = sec.current;
    if (!el || el.style.display === 'none') return;
    const h = el.offsetHeight;
    const past = el.getBoundingClientRect().bottom <= 1; // already scrolled below it
    el.style.display = 'none';
    if (past) window.scrollTo({ top: Math.max(0, window.scrollY - h), behavior: 'instant' });
  }, []);

  useEffect(() => {
    const skip = () => { opening.current = true; hideWhatIf(); };
    window.addEventListener('tk:skip-whatif', skip);
    return () => window.removeEventListener('tk:skip-whatif', skip);
  }, [hideWhatIf]);

  const playIntro = useCallback(() => {
    const hero = document.querySelector('.tk-hero2-main');
    if (!hero || opening.current) return;
    opening.current = true;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { hero.scrollIntoView(); return; }
    setIntro(true);
  }, []);


  useEffect(() => {
    if (!intro) return undefined;
    const el = layer.current;
    const box = pillBox.current;
    const hero = document.querySelector('.tk-hero2-main');
    if (!el || !box || !hero) { setIntro(false); hero?.scrollIntoView(); return undefined; }
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    const r = box.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const s = r.width / vw; // whole hero shrunk to the pill's width ...
    const cut = Math.max(0, (vh - r.height / s) / 2); // ... and trimmed to the pill's height
    const rad = r.height / 2 / s;
    // ease-in-out (close to cubic-bezier(.76,0,.18,1))
    const ease = (p) => (p < 0.5 ? 8 * p ** 4 : 1 - (-2 * p + 2) ** 4 / 2);
    const lerp = (a, b, k) => a + (b - a) * k;
    const paint = (k) => {
      const sc = lerp(s, 1, k);
      const c = lerp(cut, 0, k);
      el.style.transform = `translate(${lerp(r.left, 0, k)}px, ${lerp(r.top - cut * s, 0, k)}px) scale(${sc})`;
      el.style.clipPath = `inset(${c}px 0px ${c}px 0px round ${lerp(rad, 0, k)}px)`;
    };
    paint(0);
    let raf = 0;
    let start = 0;
    let done = false;
    const step = (now) => {
      if (!start) start = now;
      const p = Math.min(1, (now - start) / INTRO_MS);
      paint(ease(p));
      if (p < 1) raf = requestAnimationFrame(step); else finish();
    };
    const finish = () => {
      if (done) return;
      done = true;
      // hand over to the real hero: same picture, already played in, page parked on it
      const ov = el.querySelector('video');
      const main = hero.querySelector('video');
      if (ov && main) { try { main.currentTime = ov.currentTime; } catch { /* not seekable yet */ } }
      hero.classList.remove('is-in');
      void hero.offsetWidth; // restart the text rise
      hero.classList.add('is-in', 'tk-hero2-handover');
      html.style.overflow = '';
      hideWhatIf(); // the white numbers page is done: the page now starts on the video hero
      window.scrollTo({ top: hero.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
      setIntro(false);
    };
    raf = requestAnimationFrame(step);
    const safety = setTimeout(finish, INTRO_MS + 600); // never leave the page locked
    return () => { cancelAnimationFrame(raf); clearTimeout(safety); html.style.overflow = ''; };
  }, [intro, hideWhatIf]);
  const ring = useRef(null);
  const last = steps.length - 1;

  /* Scroll-driven dial: the section stays pinned while the page scrolls through it.
     The arc turns with the scroll, and the step at the top becomes the active one. */
  useEffect(() => {
    const el = sec.current;
    if (!el) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (el.style.display === 'none') return;
      const r = el.getBoundingClientRect();
      const span = el.offsetHeight - window.innerHeight;
      /* Moved past step 04 without the wheel handler catching it: a trackpad swipe whose
         events the browser will not let us cancel, a touch swipe, keys or the scrollbar.
         Park on step 04 and play the same video-open animation. */
      if (!opening.current && span > 0 && r.top < -span - 2) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + span, behavior: 'instant' });
        playIntro();
        return;
      }
      if (r.bottom <= 1) { hideWhatIf(); return; }
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      const pos = p * last; // 0 .. 3, continuous
      ring.current?.style.setProperty('--rot', `${-pos * STEP_DEG}deg`);
      setIdx(Math.round(pos));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [last, hideWhatIf, playIntro]);

  // clicking a number (or the arrow keys) scrolls the page to that step
  const go = useCallback((i) => {
    const el = sec.current;
    if (!el) return;
    const k = Math.min(last, Math.max(0, i));
    const span = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + (span * k) / last;
    window.scrollTo({ top: top + 1, behavior: 'smooth' });
  }, [last]);
  const rot = -idx * STEP_DEG;

  /* One swipe (or one wheel notch) = exactly one step while the dial is pinned.
     A Mac trackpad keeps firing wheel events for 1-2 s after the fingers lift (momentum), so
     steps are counted per GESTURE, not per time window: a new gesture starts only after a short
     pause in the events, or when the swipe clearly speeds up again (a fresh swipe during the
     glide). Everything else in the same gesture is swallowed. The page only scrolls normally
     before step 01 (upwards) and after step 04 (downwards). */
  useEffect(() => {
    const el = sec.current;
    if (!el) return undefined;
    const GAP_MS = 180; // silence that ends a gesture (momentum events come every ~16 ms)
    let lastEvt = 0; // time of the previous wheel event
    let prevMag = 0; // size of the previous wheel event
    let lastStep = 0; // time of the last step / video open
    let stepAt = -1; // step we last moved to (the scroll may still be animating towards it)
    let native = false; // this gesture was handed to the browser (scrolling out of the section)
    const onWheel = (e) => {
      if (e.ctrlKey || Math.abs(e.deltaY) < 1) return; // pinch-zoom / sideways nudges
      const now = Date.now();
      const mag = Math.abs(e.deltaY);
      const fresh = now - lastEvt > GAP_MS
        || (now - lastStep > 450 && mag > prevMag * 1.8 && mag > 14); // new swipe during the glide
      lastEvt = now;
      prevMag = mag;
      if (fresh) native = false;
      if (native) return; // keep the browser's own scroll for the rest of this gesture

      const r = el.getBoundingClientRect();
      const span = el.offsetHeight - window.innerHeight;
      if (span <= 0 || r.top > 2 || r.top < -span - 2) return; // not pinned: normal scrolling

      if (!fresh) { e.preventDefault(); return; } // momentum / rest of the same swipe

      const p = Math.min(1, Math.max(0, -r.top / span));
      const cur = now - lastStep < 1200 && stepAt >= 0 ? stepAt : Math.round(p * last);
      const dir = e.deltaY > 0 ? 1 : -1;
      const target = cur + dir;
      if (target > last) { // step 04 + a new swipe down: the girl video opens out of the pill
        e.preventDefault();
        lastStep = now;
        playIntro();
        return;
      }
      if (target < 0) { native = true; return; } // above step 01: let the page move on
      e.preventDefault();
      lastStep = now;
      stepAt = target;
      go(target);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [go, last, playIntro]);

  /* Phones and tablets: one finger swipe = exactly one step while the dial is pinned.
     Without this the page scrolls natively and a flick (plus the phone's glide) runs
     through several steps at once. While pinned, the page's own scroll is held still and
     the swipe direction picks the next step; a swipe up on step 04 opens the video. */
  useEffect(() => {
    const el = sec.current;
    if (!el) return undefined;
    let startY = 0;
    let startX = 0;
    let active = false; // this touch started while the dial was pinned
    let lastStep = 0;
    let stepAt = -1;
    const pinned = () => {
      if (el.style.display === 'none') return false;
      const r = el.getBoundingClientRect();
      const span = el.offsetHeight - window.innerHeight;
      return span > 0 && r.top <= 2 && r.top >= -span - 2;
    };
    const onStart = (e) => {
      if (e.touches.length !== 1) { active = false; return; } // pinch-zoom
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      active = pinned();
    };
    const onMove = (e) => {
      if (active && e.cancelable) e.preventDefault(); // hold the page still while the dial is pinned
    };
    const onEnd = (e) => {
      if (!active) return;
      active = false;
      const t = e.changedTouches[0];
      const dy = startY - t.clientY; // > 0: finger moved up = go forward
      if (Math.abs(dy) < 28 || Math.abs(dy) < Math.abs(t.clientX - startX)) return; // a tap or a sideways swipe
      const r = el.getBoundingClientRect();
      const span = el.offsetHeight - window.innerHeight;
      const now = Date.now();
      const cur = now - lastStep < 1000 && stepAt >= 0 ? stepAt : Math.round(Math.min(1, Math.max(0, -r.top / span)) * last);
      const target = cur + (dy > 0 ? 1 : -1);
      if (target > last) { lastStep = now; playIntro(); return; } // step 04 + swipe up: open the video
      if (target < 0) return; // already on step 01 at the top of the page
      lastStep = now;
      stepAt = target;
      go(target);
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd, { passive: true });
    window.addEventListener('touchcancel', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchcancel', onEnd);
    };
  }, [go, last, playIntro]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
  };

  return (
    <section className="tk-whatif tk-whatif-scroll" ref={sec} aria-label="What if health was">
      <div className="tk-whatif-pin">
      <Link to="/" className="tk-whatif-logo" aria-label="TAKE home">
        <svg viewBox={TAKE_LOGO_VIEWBOX} role="img" aria-label="TAKE"><path d={TAKE_LOGO_PATH} /></svg>
      </Link>
      <h2 className="tk-whatif-title" data-reveal="up">
        What If <span
          className="tk-whatif-pill"
          ref={pillBox}
          role="button"
          tabIndex={0}
          aria-label="Open the TAKE story"
          onClick={playIntro}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playIntro(); } }}
        ><video ref={pill} src={img('whatif-pill.mp4')} poster={img('whatif-pill.jpg')} muted loop playsInline autoPlay /></span><br />
        Health Was...
      </h2>

      <div className="tk-dial" tabIndex={0} onKeyDown={onKey}>
        <div className="tk-dial-ring" ref={ring} style={{ '--rot': '0deg' }}>
          <span className="tk-dial-arc" />
          {TICKS.map((a) => <i key={a} className="tk-dial-tick" style={{ '--a': `${a}deg` }} />)}
          {steps.map(([name], i) => {
            const a = i * STEP_DEG;
            const off = Math.abs(a + rot);
            return (
              <div key={name} className={`tk-dial-pt ${i === idx ? 'is-on' : ''} ${off > 75 ? 'is-far' : ''}`} style={{ '--a': `${a}deg` }}>
                <span className="tk-dial-dot" />
                <button type="button" className="tk-dial-num" onClick={() => go(i)} aria-label={`${String(i + 1).padStart(2, '0')} ${name}`} aria-current={i === idx}>
                  {String(i + 1).padStart(2, '0')}
                </button>
              </div>
            );
          })}
        </div>

        <span className="tk-dial-line" aria-hidden="true" />
        <div className="tk-dial-copy" aria-live="polite">
          <div key={idx} className="tk-dial-swap">
            <small>{String(idx + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</small>
            <h3>{steps[idx][0]}</h3>
            <p>{steps[idx][1]}</p>
          </div>
          <span className="tk-dial-hint">Scroll, or click a number on the arc</span>
        </div>
      </div>
      </div>

      {intro && createPortal(<div className="tk tk-intro"><TakeHero overlay layerRef={layer} /></div>, document.body)}
    </section>
  );
}
