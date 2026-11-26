import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BottleRotate from './BottleRotate';
import useScrollFx from './useScrollFx';
import { TakeIntelligence, TakeLoop, TakeWalkthrough } from './TakeStory';
import { TakeHero, TakeWhatIf } from './TakeFirst';
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
  ['bottle.jpg', 'Magnesium', '440mg elemental · Quad-Mag Complex: bisglycinate, Aquamin®, Lipoza® and citrate', 'Notify Me'],
  ['bottle.jpg', 'CoQ-10', 'Everyday cellular energy.', 'Notify Me'],
  ['bottle.jpg', 'Coming Soon', '', 'Notify Me', true],
];

const markers = ['Cholesterol', 'Triglycerides', 'Non-HDL Cholesterol', 'Total Bilirubin', 'Globulin', 'Fasting Glucose', 'Free T4', 'Progesterone', 'Serum Iron', 'Fibrinogen', 'Vitamin D', 'HbA1c'];
const labs = [
  ['lab1.jpg', '01', 'Book your test in the app', 'Pick a slot in the TAKE app. We come to you and take your sample at home.'],
  ['lab2.jpg', '02', 'See your blood next to your life', 'Every marker is read in plain words and set beside your sleep, steps and meals. Your watch knows how you slept. Your blood knows why.'],
  ['lab3.jpg', '03', 'Know what to do next', 'Clear ranges, what each result means for you, and what to change. Then track every marker from one test to the next.'],
];
const videos = ['video1.jpg', 'video2.jpg', 'video3.jpg', 'video4.jpg', 'video1.jpg', 'video3.jpg'];
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
  ['Why did Take Solutions become TAKE Limited?', 'The new name reflects a broader focus: alongside life-sciences technology, we now build AI products for diagnostics and preventive health. The company, its listing and shareholders’ holdings are unchanged.'],
  ['How do you keep health data secure?', 'Your reports and health data are encrypted in transit and at rest, kept in your private vault, and shared only when you choose to share them.'],
  ['Where can I use the One-Minute Clinic?', 'The One-Minute Clinic is rolling out in phases. Join the waitlist in the TAKE app to hear when it reaches your city.'],
  ['How can my organisation partner with TAKE?', 'We work with employers, labs, clinics and insurers. Get in touch through our contact page and our partnerships team will reach out.'],
];

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

      <section className="tk-feature tk-feature-capsule" style={{ '--bg': `url(${img('capsule.jpg')})` }}>
        <div className="tk-feature-bg" data-parallax aria-hidden="true" />
        <div className="tk-feature-copy" data-reveal="left">
          <h2>Health starts with<br />what you take.</h2>
          <p>Discover clinically studied nutrients made for your health, and see your progress take shape in the TAKE app.</p>
          <Link to="/" className="tk-btn tk-btn-ghost">Explore Nutrition</Link>
        </div>
      </section>

      <section className="tk-section tk-fuel">
        <div className="tk-head">
          <h2 data-reveal="up">Fuel.</h2>
          <p data-reveal="up" style={{ '--i': 1 }}>Your data writes the menu. Science checks it.</p>
        </div>
        <div className="tk-cards tk-cards-4">
          {fuel.map(([i, t, d, a, blur], k) => (
            <article key={t} data-reveal="up" style={{ '--i': k }}>
              {i === 'bottle.jpg' ? <BottleRotate src={img('bottle.jpg')} label={img('bottle-label.jpg')} shade={img('bottle-shade.png')} alt={t} disabled={blur} /> : <img src={img(i)} alt={t} />}
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
          <p data-reveal="up" style={{ '--i': 1 }}>Your watch knows how you slept. Your blood knows why.</p>
        </div>
        <div className="tk-cards tk-cards-3">
          {labs.map(([i, n, t, d], k) => (
            <article key={n} data-reveal="up" style={{ '--i': k }}><div className="tk-media"><img src={img(i)} alt={t} loading="lazy" /></div><small>{n}</small><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </section>

      <section className="tk-trust">
        <div className="tk-trust-head">
          <h2 data-reveal="up"><span>Trusted by leaders</span>5000+ Users</h2>
          <p data-reveal="up" style={{ '--i': 1 }}>Learn why professionals trust our solutions to complete their customer journeys.</p>
        </div>
        <div className="tk-videos" data-reveal="fade">
          <div className="tk-videos-track">
            {[...videos, ...videos].map((v, i) => (
              <button type="button" key={i} className="tk-video" aria-label="Play member story" tabIndex={i < videos.length ? 0 : -1}>
                <img src={img(v)} alt="" loading="lazy" draggable="false" />
                <span className="tk-video-play"><i className="bi bi-play-fill" /></span>
              </button>
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

      <section className="tk-section tk-investors">
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
