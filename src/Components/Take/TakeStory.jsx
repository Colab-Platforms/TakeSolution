import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const img = (n) => `/assets/take/${n}`;

const sources = [
  { icon: <b className="tk-rx">Rx</b>, tag: 'RX', name: 'Prescription' },
  { icon: <i className="bi bi-image" />, tag: 'JPG', name: 'Meal Photo' },
  { icon: <i className="bi bi-heart" />, tag: 'APPLE', name: 'Apple Health' },
  { icon: <i className="bi bi-smartwatch" />, tag: 'WHOOP', name: 'WHOOP' },
  { icon: <i className="bi bi-activity" />, tag: 'HC', name: 'Health Connect' },
  { icon: <i className="bi bi-justify-left" />, tag: 'PDF', name: 'PDF Report' },
];

const COPIES = [0, 1, 2]; // three copies so each row is always full while it slides

const outputs = [
  { src: 'app2.jpg', name: 'Medical Vault' },
  { src: 'app3.jpg', name: 'Nutrition Log' },
  { glucose: true, name: 'Glucose Log' },
  { src: 'app1.jpg', name: 'Report Analysis' },
];

/* Full-width app walkthrough video (sits below the Loop) */
export function TakeWalkthrough() {
  const video = useRef(null);

  useEffect(() => {
    const v = video.current;
    if (!v) return undefined;
    // iPhone Safari autoplays only videos it sees as muted; React does not write the muted attribute itself
    v.muted = true;
    v.setAttribute('muted', '');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { v.pause(); return undefined; }
    // play only while the section is on screen (saves battery and CPU)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.15 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="tk-walk" aria-label="TAKE app walkthrough">
      <video
        ref={video}
        className="tk-walk-video"
        src={img('walkthrough.mp4')}
        poster={img('walkthrough-poster.jpg')}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
    </section>
  );
}

/* Third layer: raw data -> TAKE -> clarity */
export function TakeIntelligence() {
  return (
    <section className="tk-intel">
      <div className="tk-intel-shade" aria-hidden="true" />

      <h2 className="tk-intel-title" data-reveal="up">We transform raw biological<br />data into your next best move.</h2>

      <div className="tk-flow" data-reveal="up" style={{ '--i': 1 }}>
        <div className="tk-flow-col tk-flow-in">
          {/* data slides right, into the TAKE tile */}
          <div className="tk-flow-view">
            <div className="tk-flow-track">
              {COPIES.map((c) => (
                <div className="tk-flow-set" key={c} aria-hidden={c > 0 || undefined}>
                  {sources.map((s) => (
                    <div className="tk-src" key={s.name}>
                      <div className="tk-src-tile">{s.icon}<em>{s.tag}</em></div>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <small>Your Data</small>
        </div>

        <div className="tk-flow-core">
          <div className="tk-core-frame">
            <div className="tk-core-tile">
              <svg className="tk-core-ring" viewBox="0 0 200 200" aria-hidden="true">
                <defs><path id="tkRing" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" /></defs>
                <text><textPath href="#tkRing" xlinkHref="#tkRing" textLength="472" lengthAdjust="spacing">• TURNING AGEING INTO A KNOWABLE EQUATION </textPath></text>
              </svg>
              <img src={img('take-logo-white.png')} alt="TAKE" />
            </div>
          </div>
          <small>Our Intelligence</small>
        </div>

        <div className="tk-flow-col tk-flow-out">
          {/* clarity slides out of the TAKE tile, to the right */}
          <div className="tk-flow-view">
            <div className="tk-flow-track">
              {COPIES.map((c) => (
                <div className="tk-flow-set" key={c} aria-hidden={c > 0 || undefined}>
            {outputs.map((o) => (
              <div className="tk-out" key={o.name}>
                {o.glucose ? (
                  <div className="tk-out-media tk-glucose">
                    <span>Glucose · today</span>
                    <b>104 <small>mg/dL</small></b>
                    <svg viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,30 C14,30 18,10 32,12 S50,34 64,30 S82,6 96,10 S112,26 120,22" />
                    </svg>
                  </div>
                ) : (
                  <div className="tk-out-media"><img src={img(o.src)} alt="" loading="lazy" /></div>
                )}
                <span>{o.name}</span>
              </div>
            ))}
                </div>
              ))}
            </div>
          </div>
          <small>Your Clarity</small>
        </div>
      </div>

      <div className="tk-intel-foot">
        <h3 data-reveal="up">One system. Built for<br />a longer, better life.</h3>
        <div data-reveal="up" style={{ '--i': 1 }}>
          <p>{"Working towards a future where your best years aren't behind you. They're the ones you haven't lived yet. TAKE connects everything your body tells you and turns it into years worth living."}</p>
          <Link to="/about" className="tk-pill-dark">Our Approach</Link>
        </div>
      </div>
    </section>
  );
}

const loop = [
  {
    icon: 'bi-clock-history tk-flip', when: 'Within Minutes', title: "Meet the body you've never met.",
    points: ['Your lab report, finally speaking your language', 'Your sleep, heart and meals, read as one story', 'Thirty years of guessing, replaced by one clear picture'],
  },
  {
    icon: 'bi-calendar-date', when: 'Within Days', title: 'Your body starts talking back.',
    points: ['See how a single meal ripples through your glucose', 'Feed the gaps your data reveals with clinically studied nutrients', 'Every day becomes a signal, not a mystery'],
  },
  {
    icon: 'bi-calendar-event', when: 'Within Months', title: 'Rewrite how you age.',
    points: ['Watch your markers move from one test to the next', "Make the gap between 40 and 70 a choice you're making", 'More good years, not just more years'],
  },
];

/* Fourth layer: the loop, over soft drifting amber light */
export function TakeLoop() {
  const bg = useRef(null);
  useEffect(() => {
    const v = bg.current;
    if (!v) return undefined;
    v.muted = true; // iPhone Safari autoplays only muted videos
    v.setAttribute('muted', '');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { v.pause(); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <section className="tk-loop tk-loop-blue">
      <video ref={bg} className="tk-loop-video" src={img('loop-bg.mp4')} poster={img('loop-bg.jpg')} muted loop playsInline autoPlay preload="metadata" aria-hidden="true" />
      <h2 data-reveal="up">The Loop That<br />Keeps You Young.</h2>
      <div className="tk-loop-list">
        {loop.map((r, k) => (
          <div className="tk-loop-row" key={r.when} data-reveal="up" style={{ '--i': k }}>
            <span className="tk-loop-icon"><i className={`bi ${r.icon}`} /></span>
            <b className="tk-loop-when">{r.when}</b>
            <div className="tk-loop-body">
              <h4>{r.title}</h4>
              <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
