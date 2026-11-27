import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import BottleRotate from './BottleRotate';
import useScrollFx from './useScrollFx';
import { TakeIntelligence, TakeLoop, TakeWalkthrough } from './TakeStory';
import { TakeHero, TakeWhatIf } from './TakeFirst';
import { SECTIONS, scrollToSection } from './scrollToSection';
import './take.css';

const img = (n) => `/assets/take/${n}`;
const apps = [
  ['app1.jpg', 'Report Analysis', 'Your biology. Decoded. Upload a lab report and see each value explained in plain words.'],
  ['app2.jpg', 'Medical Vault', 'Your reports and prescriptions, kept private in one place and ready when your doctor asks.'],
  ['app3.jpg', 'Nutrition Log', 'Snap your plate and AI food analysis does the counting. Your meals, read beside your markers.'],
  ['app4.jpg', 'Wearable sync', 'Apple Watch and WHOOP sync directly. Fitbit and others come in through Apple Health or Google Health Connect.'],
];
const fuel = [
  ['bottle.jpg', 'Liposomal Berberine HCL', '1000mg · 99% pure · with Ceylon cinnamon and chromium. Metabolic support, built for absorption.', 'Know More'],
  ['magnesium.webp', 'Magnesium', '440mg elemental · Quad-Mag Complex: bisglycinate, Aquamin®, Lipoza® and citrate', 'Notify Me'],
  ['bottle.jpg', 'CoQ-10', 'Everyday cellular energy.', 'Notify Me'],
  ['bottle.jpg', 'Coming Soon', '', 'Notify Me', true],
];

/* bottles that turn 360 degrees on hover: flat label strip + lighting map + label geometry in the photo
   (Berberine: tools/bottle_label_strip.py, front + back photos; Magnesium: tools/bottle_label_strip_front.py, front only) */
const spin = {
  'bottle.jpg': { label: 'bottle-label.jpg', shade: 'bottle-shade.png' },
  'magnesium.webp': { label: 'magnesium-label.jpg', shade: 'magnesium-shade.png', geometry: { cx: 324.5, r: 264.5, top: 288, bottom: 878, x0: 60, stripWidth: 1662 } },
};

const markers = ['Cholesterol', 'Triglycerides', 'Non-HDL Cholesterol', 'Total Bilirubin', 'Globulin', 'Fasting Glucose', 'Free T4', 'Progesterone', 'Serum Iron', 'Fibrinogen', 'Vitamin D', 'HbA1c'];
const labs = [
  ['lab1.jpg', '01', 'We come to you.', "Book in the TAKE app and pick a slot. We collect your sample at home, so there's no clinic, no queue and no waiting room."],
  ['lab2-tube.jpg', '02', 'Your body, in plain words.', 'Every marker decoded and set beside your sleep, steps and meals. For the first time, your results make sense next to your life.'],
  ['lab3.jpg', '03', 'Your next move, clear.', 'What each result means for you, what to change and what to take. Then watch every marker move, test after test.'],
];
// member stories (Trusted by leaders): poster on the card, the full video with sound opens on tap
const videos = [1, 2, 3, 4, 5, 6].map((n) => `members/member${n}`);
const news = [
  ['2015', 'Meta-analysis', 'Effect and safety of berberine in type 2 diabetes, hyperlipidaemia and hypertension', 'Lan J et al. · Journal of Ethnopharmacology', '27 RCTs. Berberine with lifestyle changes lowered glucose and lipid markers more than lifestyle changes alone. Trial quality varied.'],
  ['2012', 'Meta-analysis', 'Berberine in the treatment of type 2 diabetes: a systematic review', 'Dong H et al. · Evid-Based Complement Alternat Med', '14 RCTs. Meaningful reductions in fasting glucose and HbA1c, with few serious side effects.'],
  ['2008', 'Clinical trial', 'Efficacy of berberine in patients with type 2 diabetes mellitus', 'Yin J, Xing H, Ye J · Metabolism', "3-month trial. Berberine's effect on fasting glucose and HbA1c was comparable to metformin in newly diagnosed adults."],
  ['2016', 'Review', 'Research progress on berberine with a special focus on its oral bioavailability', 'Liu CS et al. · Fitoterapia', 'The delivery problem. Why oral berberine is poorly absorbed and how lipid-based carriers can improve it.'],
];
const investors = [
  ['Financial Results', 'Quarterly & Annual', '/investor'],
  ['Annual Reports', 'Company Performance', '/investor'],
  ['Governance & Disclosures', 'Policies & Exchange Updates', '/investor'],
];
const faqs = [
  ['Why did Take Solutions become Take Limited?', 'Our new name reflects a broader focus. Alongside life-sciences technology, we now build AI products for diagnostics and preventive health. Our listing and shareholders’ holdings are unchanged.'],
  ['How do you keep health data secure?', 'Your health data stays private and under your control. We collect only what’s needed, protect it at every step and handle it in line with India’s Digital Personal Data Protection Act.'],
  ['What does TAKE do?', 'TAKE is a longevity and health optimisation company. We combine personal health intelligence, biomarker insights and clinically studied nutrition into one ecosystem that helps people understand their biology, slow the drift of ageing and add more good years, not just more years.'],
  ['Where can I find financial results and filings?', <>Every quarterly result, annual report and stock exchange filing is on our <Link to="/investor">Investor page</Link>.</>],
  ['How can my organisation partner with TAKE?', <>Write to <a href="mailto:partnership@takelimited.com">partnership@takelimited.com</a> and our team will get back to you.</>],
];

/* Berberine capsules video behind "Health starts with what you take." (muted for iPhone autoplay, plays only while on screen) */
function CapsuleVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    v.muted = true;
    v.setAttribute('muted', '');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { v.pause(); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} className="tk-feature-vid" src={img('capsule.mp4')} poster={img('capsule-poster.jpg')} muted loop playsInline autoPlay preload="metadata" aria-hidden="true" />;
}

const CloseIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>;
const ExpandIcon = () => <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

/* Large view of a member story: centred over the page, carries on from the same moment.
   Closes on ×, Esc or a tap outside, and hands the time back to the card. */
function MemberBig({ src, start, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const close = () => onClose(ref.current?.currentTime || 0);
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); html.style.overflow = prev; };
  }, [onClose]);
  const close = () => onClose(ref.current?.currentTime || 0);
  return createPortal(
    <div className="tk-player" role="dialog" aria-modal="true" aria-label="Member story" onClick={close}>
      <div className="tk-player-box" onClick={(e) => e.stopPropagation()}>
        <video
          ref={ref}
          src={img(`${src}.mp4`)}
          poster={img(`${src}.jpg`)}
          controls
          playsInline
          onLoadedMetadata={(e) => { const v = e.currentTarget; try { v.currentTime = start; } catch { /* not seekable yet */ } v.play().catch(() => {}); }}
        />
        <button type="button" className="tk-player-close" onClick={close} aria-label="Close large video"><CloseIcon /></button>
      </div>
    </div>,
    document.body,
  );
}

/* One member story card. Tap: the video plays right there in the card, with sound and controls.
   The expand button opens it large; × (or the end of the video) puts the card back to its picture. */
function MemberCard({ src, on, onPlay, onStop, hidden }) {
  const vid = useRef(null);
  const [big, setBig] = useState(null); // start time of the large view, or null
  if (on) {
    const expand = () => { const v = vid.current; setBig(v ? v.currentTime : 0); v?.pause(); };
    const shrink = (t) => {
      setBig(null);
      const v = vid.current;
      if (v) { try { v.currentTime = t; } catch { /* ignore */ } v.play().catch(() => {}); }
    };
    return (
      <div className="tk-video is-playing">
        <video ref={vid} src={img(`${src}.mp4`)} poster={img(`${src}.jpg`)} controls autoPlay playsInline onEnded={onStop} />
        <div className="tk-video-tools">
          <button type="button" className="tk-video-tool" onClick={expand} aria-label="View large"><ExpandIcon /></button>
          <button type="button" className="tk-video-tool" onClick={onStop} aria-label="Stop video"><CloseIcon /></button>
        </div>
        {big !== null && <MemberBig src={src} start={big} onClose={shrink} />}
      </div>
    );
  }
  return (
    <button type="button" className="tk-video" aria-label="Play member story" tabIndex={hidden ? -1 : 0} onClick={onPlay}>
      <img src={img(`${src}.jpg`)} alt="" loading="lazy" draggable="false" />
      <span className="tk-video-play"><i className="bi bi-play-fill" /></span>
    </button>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="tk-faq-list">
      {faqs.map(([q, a], i) => {
        const on = open === i;
        return (
          <div key={q} className={`tk-faq-item ${on ? 'open' : ''}`}>
            <button type="button" className="tk-faq-q" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
              <small>{String(i + 1).padStart(2, '0')}</small>
              <span>{q}</span>
              <i className="tk-faq-icon" aria-hidden="true" />
            </button>
            <div className="tk-faq-a"><div><p>{a}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}

export default function TakeHome() {
  const root = useRef(null);
  useScrollFx(root);
  const [playing, setPlaying] = useState(-1); // which member card is playing (-1: none)
  const { hash } = useLocation();
  // opening or refreshing the home page always starts on the landing page, step 01
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  // opened as /#investors or /#faq (header link from another page): go straight to that section
  useEffect(() => {
    const id = hash.slice(1);
    if (!SECTIONS.includes(id)) return undefined;
    const t = setTimeout(() => scrollToSection(id), 150);
    return () => clearTimeout(t);
  }, [hash]);
  return (
    <main className="tk" ref={root}>
      <TakeWhatIf />
      <TakeHero />


      <TakeIntelligence />
      <TakeLoop />
      <TakeWalkthrough />

      <section className="tk-section">
        <div className="tk-head">
          <h2 data-reveal="up">TAKE App.</h2>
          <p data-reveal="up" style={{ '--i': 1 }}>Your health data is only useful if something reads it. TAKE reads every report, every night of sleep and every meal, and puts them into one picture of you.</p>
        </div>
        <div className="tk-cards tk-cards-4">
          {apps.map(([i, t, d], k) => (
            <article key={t} data-reveal="up" style={{ '--i': k }}><div className="tk-media"><img src={img(i)} alt={t} loading="lazy" /></div><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </section>

      <section className="tk-feature tk-feature-capsule tk-feature-video">
        <CapsuleVideo />
        <div className="tk-feature-copy" data-reveal="left">
          <h2>Health starts with<br />what you take.</h2>
          <p>Discover clinically studied nutrients made for your health, and see your progress take shape in the TAKE app.</p>
          <Link to="/" className="tk-btn tk-btn-ghost">Explore Nutrition</Link>
        </div>
      </section>

      <section className="tk-section tk-fuel">
        <div className="tk-head">
          <h2 data-reveal="up">Nutrition,<br />Beyond The Plate.</h2>
        </div>
        <div className="tk-cards tk-cards-4">
          {fuel.map(([i, t, d, a, blur], k) => (
            <article key={t} data-reveal="up" style={{ '--i': k }}>
              {spin[i]
                ? <BottleRotate src={img(i)} label={img(spin[i].label)} shade={img(spin[i].shade)} geometry={spin[i].geometry} alt={t} disabled={blur} />
                : <div className="tk-rotate tk-rotate-static"><img className="tk-rotate-img" src={img(i)} alt={t} loading="lazy" draggable="false" /></div>}
              <h4>{t}</h4>{d && <p>{d}</p>}<Link to="/contact">{a}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tk-feature tk-feature-light" style={{ '--bg': `url(${img('blood.jpg')})` }}>
        <div className="tk-feature-bg" data-parallax aria-hidden="true" />
        <div className="tk-feature-copy tk-blood-copy" data-reveal="blood">
          <h2><span><span>Your blood knows</span></span><span><span>{"things you don't. Yet."}</span></span></h2>
          <p>One blood draw that reads your heart, metabolism, hormones and nutrients, with a clear next step for each result.</p>
          <Link to="/contact" className="tk-btn tk-btn-dark">Join the waitlist</Link>
        </div>
      </section>
      <div className="tk-ticker tk-ticker-markers">
        <div className="tk-ticker-track">
          {[...markers, ...markers].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="tk-section">
        <div className="tk-head">
          <h2 data-reveal="up">Biomarkers And Labs.</h2>
        </div>
        <div className="tk-cards tk-cards-3">
          {labs.map(([i, n, t, d], k) => (
            <article key={n} data-reveal="up" style={{ '--i': k }}><div className="tk-media"><img src={img(i)} alt={t} loading="lazy" /></div><small>{n}</small><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </section>

      <section className="tk-trust">
        <div className="tk-trust-head">
          <h2 data-reveal="up"><span>Trusted by leaders</span>8000+ Users</h2>
          <p data-reveal="up" style={{ '--i': 1 }}>Learn why professionals trust our solutions to complete their customer journeys.</p>
        </div>
        <div className="tk-videos" data-reveal="fade">
          <div className={`tk-videos-track ${playing >= 0 ? 'is-paused' : ''}`}>
            {[...videos, ...videos].map((v, i) => (
              <MemberCard key={i} src={v} on={playing === i} hidden={i >= videos.length} onPlay={() => setPlaying(i)} onStop={() => setPlaying(-1)} />
            ))}
          </div>
        </div>
      </section>

      <section className="tk-section tk-news">
        <div className="tk-head"><h2 data-reveal="up">Latest News.</h2></div>
        <div className="tk-news-list">
          {news.map(([y, tag, t, src, d], k) => (
            <article key={t} className="tk-news-row" data-reveal="up" style={{ '--i': k }}>
              <span className="tk-news-year">{y}</span>
              <div className="tk-news-main"><em className="tk-tag">{tag}</em><h4>{t}</h4><small>{src}</small></div>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tk-section tk-investors" id="investors">
        <div className="tk-head"><h2 data-reveal="up">Investors.</h2></div>
        <div className="tk-inv-list">
          {investors.map(([t, s, to], k) => (
            <Link key={t} to={to} className="tk-inv-row" data-reveal="up" style={{ '--i': k }}>
              <span><b>{t}</b><small>{s}</small></span><i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="tk-section tk-faq" id="faq">
        <h2>Common<br />Questions.</h2>
        <Faq />
      </section>
    </main>
  );
}
