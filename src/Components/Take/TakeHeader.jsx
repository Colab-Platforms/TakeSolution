import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './take.css';

const links = [
  ['TAKE.Health', '/'], ['TAKE.Shop', '/'], ['Technology', '/services'], ['Investors', '/investor'], ['FAQ', '/#faq'],
];

export default function TakeHeader({ embedded = false }) {
  const { pathname } = useLocation();
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

  return (
    <header className={`tk-header tk-header-v2 ${embedded ? 'tk-header-embed' : ''} ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
      <Link to="/" className="tk-logo" aria-label="TAKE home"><img src="/assets/take/take-logo-white.png" alt="TAKE" /></Link>
      <nav className={`tk-nav ${open ? 'open' : ''}`}>
        {links.map(([n, h]) => <Link key={n} to={h} onClick={() => setOpen(false)}>{n}</Link>)}
        <Link to="/contact" className="tk-waitlist tk-waitlist-menu" onClick={() => setOpen(false)}><em className="tk-wl-text">Join Waitlist</em><span><i className="bi bi-arrow-up-right" /></span></Link>
      </nav>
      <Link to="/contact" className="tk-waitlist tk-waitlist-head"><em className="tk-wl-text">Join Waitlist</em><span><i className="bi bi-arrow-up-right" /></span></Link>
      <button className="tk-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i className={`bi ${open ? 'bi-x' : 'bi-list'}`} />
      </button>
    </header>
  );
}
