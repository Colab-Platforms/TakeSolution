import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TAKE_LOGO_PATH, TAKE_LOGO_VIEWBOX } from './takeLogoPath';
import './take.css';

const cols = [
  ['Platform', [['TAKE.Health', 'https://www.take.health/'], ['TAKE Store', 'https://shop.take.health/']]],
  ['Company', [['About', '/about'], ['Technology', '/services'], ['Latest News', '/'], ['Careers', '/contact']]],
  ['Investors', [['Financial Results', '/investor'], ['Annual Reports', '/investor'], ['Governance & Disclosures', '/investor'], ['Stock Information', '/investor']]],
];
const contact = [
  ['investorrelations@takelimited.com', 'mailto:investorrelations@takelimited.com'],
  ['partners@takelimited.com', 'mailto:partners@takelimited.com'],
  ['care@takelimited.com', 'mailto:care@takelimited.com'],
  ['LinkedIn', 'https://www.linkedin.com/'],
];

export default function TakeFooter() {
  const ref = useRef(null);
  const mark = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Back to top: always the top of the landing page (from any page, on phone and desktop)
  const backToTop = (e) => {
    e.preventDefault();
    if (pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    navigate('/');
    // wait for the landing page to render, then start it from the very top
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  // TAKE wordmark video (sky inside the letters): muted for iPhone autoplay, plays only while on screen
  useEffect(() => {
    const v = mark.current;
    if (!v) return undefined;
    v.muted = true;
    v.setAttribute('muted', '');
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { v.pause(); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }, { threshold: 0.05 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // the giant wordmark rises into place when the footer scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('is-in'); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="tk-foot" ref={ref}>
      <div className="tk-foot-talk">
        <div>
          <h2>{"Let's talk."}</h2>
          <p>Partnerships, investor enquiries or simply learning more about TAKE.</p>
        </div>
        <div className="tk-foot-btns">
          <Link to="/contact" className="tk-fbtn tk-fbtn-light">Contact our team <i className="bi bi-arrow-right" /></Link>
          <Link to="/contact" className="tk-fbtn">Get the app <i className="bi bi-arrow-right" /></Link>
        </div>
      </div>

      <div className="tk-foot-main">
        <div className="tk-foot-brand">
          <svg viewBox={TAKE_LOGO_VIEWBOX} aria-label="TAKE" role="img"><path d={TAKE_LOGO_PATH} /></svg>
          <p>AI, diagnostics, doctors and personalised nutrition, connected through one private health-data platform.</p>
          <span className="tk-foot-listed"><i />Listed on NSE &amp; BSE</span>
        </div>
        {cols.map(([h, items]) => (
          <div className="tk-foot-col" key={h}>
            <h6>{h}</h6>
            {items.map(([n, to]) => (to.startsWith('http')
              ? <a key={n} href={to} target="_blank" rel="noopener noreferrer">{n}</a>
              : <Link key={n} to={to}>{n}</Link>))}
          </div>
        ))}
        <div className="tk-foot-col">
          <h6>Contact</h6>
          {contact.map(([n, href]) => <a key={n} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{n}</a>)}
        </div>
      </div>

      <div className="tk-foot-legal">
        <span>© 2026 TAKE Limited · CIN L72100TN2000PLC046338</span>
        <nav>
          <Link to="/">Privacy</Link><Link to="/">Terms</Link><Link to="/">Cookies</Link>
          <button type="button" onClick={backToTop}>Back to top ↑</button>
        </nav>
      </div>

      <div className="tk-foot-mark" aria-hidden="true">
        <video ref={mark} src="/assets/take/take-mask.mp4" poster="/assets/take/take-mask.jpg" muted loop playsInline autoPlay preload="metadata" />
      </div>
    </footer>
  );
}
