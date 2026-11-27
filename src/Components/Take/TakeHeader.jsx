import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from './scrollToSection';
import './take.css';

// [label, address]; addresses starting with http open the other TAKE websites in a new tab
const links = [
  ['TAKE.Health', 'https://www.take.health/'],
  ['TAKE.Shop', 'https://shop.take.health/'],
  ['Investors', '/#investors'],
  ['FAQ', '/#faq'],
];

export default function TakeHeader({ embedded = false }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // after the first screen, the header gets a dark glass background so it stays readable
  useEffect(() => {
    if (embedded) return undefined;
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [embedded]);

  // on the home page the header sits inside the field-video hero (the page opens on "What If")
  if (!embedded && pathname === '/') return null;

  // Investors / FAQ: scroll to that section of the home page (from another page, open the home page there)
  const goSection = (e, h) => {
    e.preventDefault();
    setOpen(false);
    if (pathname === '/' && scrollToSection(h.slice(2))) { window.history.replaceState(null, '', h); return; }
    navigate(h); // the home page scrolls to the #section when it opens
  };

  return (
    <header className={`tk-header tk-header-v2 ${embedded ? 'tk-header-embed' : ''} ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
      <Link to="/" className="tk-logo" aria-label="TAKE home"><img src="/assets/take/take-logo-white.png" alt="TAKE" /></Link>
      <nav className={`tk-nav ${open ? 'open' : ''}`}>
        {links.map(([n, h]) => {
          if (h.startsWith('http')) return <a key={n} href={h} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{n}</a>;
          if (h.startsWith('/#')) return <a key={n} href={h} onClick={(e) => goSection(e, h)}>{n}</a>;
          return <Link key={n} to={h} onClick={() => setOpen(false)}>{n}</Link>;
        })}
        <Link to="/contact" className="tk-waitlist tk-waitlist-menu" onClick={() => setOpen(false)}><em className="tk-wl-text">Join Waitlist</em><span><i className="bi bi-arrow-up-right" /></span></Link>
      </nav>
      <Link to="/contact" className="tk-waitlist tk-waitlist-head"><em className="tk-wl-text">Join Waitlist</em><span><i className="bi bi-arrow-up-right" /></span></Link>
      <button className="tk-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? 'bi-x' : 'bi-list'}`} />
      </button>
    </header>
  );
}
