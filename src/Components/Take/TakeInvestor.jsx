import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import * as D from '../Investor/investorData';
import './take.css';
import './investor.css';

/* ------------------------------------------------------------------ data helpers */

// tabs, in the order of the design; the id is also the address (#...) so links can open a tab
const TABS = [
  ['financial-results', 'Financial Results'],
  ['investor-corner', 'Investor Corner'],
  ['corporate-governance', 'Corporate Governance'],
  ['corporate-announcement', 'Corporate Announcement'],
  ['disclosure', 'Disclosure'],
  ['board-of-directors', 'Boards of Directors'],
  ['subsidiary-financials', 'Subsidiary Financials'],
];

// cover artwork per year (Figma), cycled for older years. Shown in grey until the pointer is on the card.
const COVERS = [
  'linear-gradient(143.13deg, #2D3FE0 14.29%, #77A2FF 53.57%, #5FD3B5 85.71%)',
  'linear-gradient(143.13deg, #0B0B0B 14.29%, #1E2A5A 53.57%, #77A2FF 85.71%)',
  'linear-gradient(143.13deg, #7A4520 14.29%, #C98A55 53.57%, #F3C58C 85.71%)',
  'linear-gradient(143.13deg, #2D3FE0 14.29%, #77A2FF 53.57%, #F5F7F9 85.71%)',
  'linear-gradient(143.13deg, #0B0B0B 14.29%, #123A33 53.57%, #5FD3B5 85.71%)',
];

const fyShort = (key) => `FY${key.slice(-2)}`; // 'FY26-27' -> 'FY27'
const fyLong = (key) => `FY 20${key.slice(2, 4)}-${key.slice(-2)}`; // 'FY26-27' -> 'FY 2026-27'
const lastQuarter = (items) => items.reduce((q, it) => (it.quarter > q ? it.quarter : q), 'Q1');
const endYear = (label) => { const m = String(label).match(/(\d{4})\s*-\s*(\d{2,4})/); if (!m) return null; const b = m[2]; return b.length === 4 ? +b : +(m[1].slice(0, 2) + b); };

// one list of documents per filter category: { label, items: [{ title, year, link }] }
const group = (g) => ({ label: g.title, items: g.years.map((y) => ({ title: g.title, year: y.year, link: y.link })) });
const docs = (label, list) => ({ label, items: list.map((d) => ({ title: d.title, link: d.link })) });
const byYear = (label, obj, key = 'description') => ({
  label,
  items: Object.values(obj).flat().map((d) => ({ title: d[key], year: d.year, date: d.date, link: d.link })),
});

const CORNER = [D.ic_eogmData, D.ic_egmVotingData, D.ic_agmNoticeData, D.ic_agmVotingData, D.ic_postalBallotData, D.ic_postalBallotVotingData, D.ic_annualSecretarialComplianceReport].map(group);
const GOVERNANCE = [
  docs('Corporate Governance Policies', D.cg_policies),
  docs('Mandatory Dematerialisation of Shares for Transfer Requests', D.cg_dematDocuments),
  docs('Investor Grievance', D.cg_investorGreviance),
  docs('MOA and AOA', D.cg_moaAndAoa),
  docs('KMP authorised for the purpose of determining materiality', D.cg_kmpDeterminingAuthority),
  docs('Details of Key Managerial Personnel and Compliance Officer', D.cg_DetailsofKeyManagerialPersonnelandComplianceOfficer),
];
// disclosures and announcements are kept per financial year ('FY27': [...]); the year filter uses those keys
const perFY = (obj) => Object.entries(obj).map(([fy, list]) => ({ fy, items: list.map((d) => ({ title: d.description, year: d.year || `FY ${fy.slice(2)}`, date: d.date, link: d.link })) }));

/* ------------------------------------------------------------------ rise-up animation */

/* Everything marked data-reveal="up" fades in and rises into place as it scrolls into view (bottom to top),
   staggered by --i. Also covers content added later (switching tabs, Search). Phones and
   "reduce motion" show everything at once, like the rest of the site. */
function useRiseUp(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const still = window.matchMedia?.('(prefers-reduced-motion: reduce), (max-width: 767px)').matches || !('IntersectionObserver' in window);
    const show = (el) => el.classList.add('is-in');
    if (still) {
      root.querySelectorAll('[data-reveal]').forEach(show);
      const mo = new MutationObserver(() => root.querySelectorAll('[data-reveal]:not(.is-in)').forEach(show));
      mo.observe(root, { childList: true, subtree: true });
      return () => mo.disconnect();
    }
    root.classList.add('fx-ready');
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      show(el);
      io.unobserve(el);
      // once it has risen into place, drop the animation marker so the element's own hover effects work normally
      setTimeout(() => { el.removeAttribute('data-reveal'); el.style.removeProperty('--i'); }, 1700);
    }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    const seen = new WeakSet(); // elements this observer already watches
    const watch = () => root.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => { if (!seen.has(el)) { seen.add(el); io.observe(el); } });
    watch();
    const mo = new MutationObserver(watch);
    mo.observe(root, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); root.classList.remove('fx-ready'); };
  }, [rootRef]);
}

const rise = (i = 0) => ({ 'data-reveal': 'up', style: { '--i': i % 6 } });

/* ------------------------------------------------------------------ small pieces */

const DocIcon = () => <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13zM8 12h8v1.6H8zm0 3.4h8V17H8z" /></svg>;
const DocOutline = () => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const DownIcon = () => <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 4v12M6.5 11l5.5 5.5 5.5-5.5M5 20h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const CloseIcon = () => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const Chevron = ({ left }) => <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d={left ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;

const Title = ({ children, aside }) => (
  <div className="inv-title">
    <h2 {...rise(0)}>{children}</h2>
    {aside && <div {...rise(1)}>{aside}</div>}
  </div>
);

const ext = (link) => (/^https?:/.test(link) ? { target: '_blank', rel: 'noopener noreferrer' } : { target: '_blank', rel: 'noreferrer' });

/* ------------------------------------------------------------------ Financial Results */

function Cover({ fy, items, art, isNew, onOpen, idx }) {
  return (
    <button type="button" className="inv-cover" onClick={onOpen} aria-label={`${fyLong(fy)} results`} {...rise(idx)}>
      <span className="inv-cover-sheet">
        <b className="inv-cover-logo">TAKE.</b>
        <strong>Shareholders’ Letter and Results</strong>
        <small>{lastQuarter(items)} {fyShort(fy)}</small>
        <span className="inv-cover-art" style={{ '--art': art }} />
        <em>SEE BEYOND. UNLOCK YOUR HEALTH.</em>
      </span>
      <span className="inv-cover-label">{fyShort(fy)}{isNew && <i>NEW</i>}</span>
    </button>
  );
}

function ResultsModal({ fy, items, art, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); html.style.overflow = prev; };
  }, [onClose]);
  const quarters = new Set(items.map((i) => i.quarter));
  const missing = ['Q1', 'Q2', 'Q3', 'Q4'].filter((q) => !quarters.has(q));
  return createPortal(
    <div className="tk inv-modal" role="dialog" aria-modal="true" aria-label={`${fyLong(fy)} financial results`} onClick={onClose}>
      <div className="inv-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="inv-modal-head">
          <span className="inv-modal-thumb" style={{ '--art': art }} />
          <div>
            <small>FINANCIAL RESULTS</small>
            <h3>{fyLong(fy)}</h3>
            <p>Consolidated and standalone results, by quarter.</p>
          </div>
          <button type="button" className="inv-x" onClick={onClose} aria-label="Close"><CloseIcon /></button>
        </div>
        <div className="inv-table-wrap">
          <table className="inv-table">
            <thead><tr><th>Financial Year</th><th>Quarter</th><th>Description</th><th aria-label="Download" /></tr></thead>
            <tbody>
              {items.map((it, k) => (
                <tr key={k}>
                  <td>{it.year}</td>
                  <td className="inv-q">{it.quarter}</td>
                  <td><a href={it.link} {...ext(it.link)} className="inv-doc-link"><DocOutline />{it.description}</a></td>
                  <td><a href={it.link} {...ext(it.link)} download className="inv-dl" aria-label={`Download ${it.description}`}><DownIcon /></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {missing.length > 0 && missing.length < 4 && (
          <p className="inv-note">{missing.join(' and ')} results will be published here after board approval.</p>
        )}
      </div>
    </div>,
    document.body,
  );
}

function FinancialResults() {
  const years = Object.keys(D.financialResults).filter((k) => D.financialResults[k]?.length);
  const track = useRef(null);
  const [open, setOpen] = useState(null);
  const slide = (dir) => { const t = track.current; if (t) t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: 'smooth' }); };

  // Annual Reports / Returns, one row per financial year (newest first)
  const rows = useMemo(() => {
    const m = new Map();
    D.annualReports.forEach((r) => { const y = endYear(r.year); if (y) m.set(y, { ...(m.get(y) || {}), report: r.link }); });
    D.annualReturns.forEach((r) => { const y = endYear(r.year); if (y) m.set(y, { ...(m.get(y) || {}), returns: r.link }); });
    return [...m.entries()].sort((a, b) => b[0] - a[0]);
  }, []);

  return (
    <>
      <section className="inv-block">
        <Title aside={(
          <div className="inv-arrows">
            <button type="button" onClick={() => slide(-1)} aria-label="Previous years"><Chevron left /></button>
            <button type="button" onClick={() => slide(1)} aria-label="Next years"><Chevron /></button>
          </div>
        )}>Financial Results</Title>
        <div className="inv-covers" ref={track}>
          {years.map((fy, i) => (
            <Cover key={fy} idx={i} fy={fy} items={D.financialResults[fy]} art={COVERS[i % COVERS.length]} isNew={i === 0} onOpen={() => setOpen(i)} />
          ))}
        </div>
        {open !== null && (
          <ResultsModal fy={years[open]} items={D.financialResults[years[open]]} art={COVERS[open % COVERS.length]} onClose={() => setOpen(null)} />
        )}
      </section>

      <section className="inv-block" id="annual-reports">
        <Title>Annual Reports / Returns</Title>
        <div className="inv-annual">
          {rows.map(([y, r], k) => (
            <div className="inv-annual-row" key={y} {...rise(k)}>
              <span>FY {y}</span>
              {r.report ? <a href={r.report} {...ext(r.report)}>Annual Report</a> : <i />}
              {r.returns ? <a href={r.returns} {...ext(r.returns)}>Annual Returns</a> : <i />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ document lists (filters + cards) */

function DocCard({ title, meta, link, idx = 0 }) {
  return (
    <article className="inv-doc" {...rise(idx)}>
      <span className="inv-doc-ico"><DocIcon /></span>
      <h4>{title}</h4>
      <footer>
        {meta ? <small>{meta}</small> : <span />}
        <a href={link} {...ext(link)}>Download <DownIcon /></a>
      </footer>
    </article>
  );
}

const ALL = 'All years';

/* categories: [{ label, items }]; each item may carry a year. Pick a category and a year, then Search. */
function DocExplorer({ title, categories, yearLabel = 'Year' }) {
  const [cat, setCat] = useState(0);
  const yearsOf = (c) => [...new Set(categories[c].items.map((i) => i.year).filter(Boolean))];
  const [year, setYear] = useState(ALL);
  const [applied, setApplied] = useState({ cat: 0, year: ALL });
  const years = yearsOf(cat);
  const shown = categories[applied.cat].items.filter((i) => applied.year === ALL || i.year === applied.year);
  return (
    <section className="inv-block">
      <Title>{title}</Title>
       <form {...rise(1)} className="inv-filters" onSubmit={(e) => { e.preventDefault(); setApplied({ cat, year }); }}>
        {categories.length > 1 && (
          <label className="inv-select">
            <select value={cat} onChange={(e) => { const c = +e.target.value; setCat(c); setYear(ALL); setApplied({ cat: c, year: ALL }); }} aria-label="Category">
              {categories.map((c, k) => <option key={c.label} value={k}>{c.label}</option>)}
            </select>
          </label>
        )}
        {years.length > 0 && (
          <label className="inv-select">
            <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Year">
              <option>{ALL}</option>
              {years.map((y) => <option key={y}>{y}</option>)}
            </select>
          </label>
        )}
        <button type="submit" className="inv-search">Search</button>
      </form>
      {shown.length ? (
        <div className="inv-docs">
          {shown.map((d, k) => (
            <DocCard key={`${d.link}-${k}`} idx={k} title={d.title} link={d.link} meta={d.date ? `Date ${d.date}` : d.year ? `${yearLabel} ${d.year}` : ''} />
          ))}
        </div>
      ) : <p className="inv-empty">No documents for this selection yet.</p>}
    </section>
  );
}

/* per-financial-year lists (Disclosure, Corporate Announcement): a year filter only, newest year with documents first */
function YearExplorer({ title, data }) {
  const fys = perFY(data);
  const first = Math.max(0, fys.findIndex((f) => f.items.length));
  const [sel, setSel] = useState(first);
  const [applied, setApplied] = useState(first);
  const shown = fys[applied]?.items || [];
  return (
    <section className="inv-block">
      <Title>{title}</Title>
       <form {...rise(1)} className="inv-filters" onSubmit={(e) => { e.preventDefault(); setApplied(sel); }}>
        <label className="inv-select">
          <select value={sel} onChange={(e) => setSel(+e.target.value)} aria-label="Financial year">
            {fys.map((f, k) => <option key={f.fy} value={k}>{f.fy}{f.items.length ? '' : ' (no documents)'}</option>)}
          </select>
        </label>
        <button type="submit" className="inv-search">Search</button>
      </form>
      {shown.length ? (
        <div className="inv-docs">
          {shown.map((d, k) => <DocCard key={`${d.link}-${k}`} idx={k} title={d.title} link={d.link} meta={d.date ? `Date ${d.date}` : `Year ${d.year}`} />)}
        </div>
      ) : <p className="inv-empty">No documents for {fys[applied]?.fy} yet.</p>}
    </section>
  );
}

/* ------------------------------------------------------------------ Board of Directors */

function Person({ name, role, din, idx = 0 }) {
  return (
    <article className="inv-person" {...rise(idx)}>
      <h4>{name}</h4>
      <p>{role}</p>
      <hr />
      {din && <small>DIN {din}</small>}
    </article>
  );
}

function Board() {
  return (
    <section className="inv-block">
      <Title aside={<p className="inv-title-note">The Board sets TAKE Limited’s strategy and oversees governance, risk and shareholder interests.</p>}>Board of Directors</Title>

      <h3 {...rise(0)} className="inv-sub">Composition of Board of Directors of the Company</h3>
      <div className="inv-people">{D.boardComposition.map((p, k) => <Person idx={k} key={p.name} name={p.name} role={p.designation} din={p.din} />)}</div>

      <h3 {...rise(0)} className="inv-sub">Composition of Key Managerial Personnel(s) of the Company</h3>
      <div className="inv-people">{D.kmpComposition.map((p, k) => <Person idx={k} key={p.name + p.designation} name={p.name} role={p.designation} />)}</div>

      <h3 {...rise(0)} className="inv-sub">Composition of Committees of the Company</h3>
      {D.committees.map((c, ci) => (
        <div className="inv-committee" key={c.title}>
          {/* as in the design, the first committee (Audit) sits straight under "Composition of Committees" */}
          {ci > 0 && <h4 {...rise(0)} className="inv-sub inv-sub-sm">{c.title}:</h4>}
          <div className="inv-people">{c.members.map((m, k) => <Person idx={k} key={m.name} name={m.name} role={m.designation} />)}</div>
          <h5 {...rise(0)} className="inv-terms">Terms of Reference</h5>
          <p {...rise(1)} className="inv-terms-text">{c.termsOfReference}</p>
        </div>
      ))}

      <div className="inv-profiles-title"><Title>Detailed Profiles</Title></div>
      <div className="inv-profiles">
        {D.directors.map((d) => (
          <article className="inv-profile" key={d.name} {...rise(0)}>
            <header><h4>{d.name}</h4><p>{d.designation}</p></header>
            <div className="inv-profile-body">
              <p>{d.description}</p>
              {d.directorships?.length > 0 && (
                <>
                  <h5>Other Directorships</h5>
                  <div className="inv-table-wrap">
                    <table className="inv-table inv-table-light">
                      <thead><tr><th>Sr. No.</th><th>Name of Body Corporate</th><th>Designation</th></tr></thead>
                      <tbody>{d.directorships.map((x) => <tr key={x.sr}><td>{x.sr}</td><td>{x.company}</td><td>{x.position}</td></tr>)}</tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ page */

export default function TakeInvestor() {
  const { hash } = useLocation();
  const fromHash = (h) => { const id = h.replace('#', ''); if (id === 'annual-reports') return 'financial-results'; return TABS.some(([t]) => t === id) ? id : 'financial-results'; };
  const [tab, setTab] = useState(() => fromHash(hash));
  const tabsRef = useRef(null);
  const root = useRef(null);
  useRiseUp(root);

  // opened as /investor#disclosure etc. (footer and home-page links): open that tab
  useEffect(() => {
    if (!hash) return;
    setTab(fromHash(hash));
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1)) || tabsRef.current;
      // leave room for the fixed TAKE header (about 85px) above the tabs
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
    }, 120);
    return () => clearTimeout(t);
  }, [hash]);

  const pick = (id) => { setTab(id); window.history.replaceState(null, '', `#${id}`); };

  // phones / tablets: the tab bar swipes sideways; keep the chosen tab in view (centred in the bar)
  useEffect(() => {
    const bar = tabsRef.current?.querySelector('.inv-tabs-in');
    const on = bar?.querySelector('.is-on');
    if (!bar || !on || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollTo({ left: on.offsetLeft - (bar.clientWidth - on.offsetWidth) / 2, behavior: 'smooth' });
  }, [tab]);
  const label = TABS.find(([t]) => t === tab)?.[1];

  return (
    <main className="tk tk-inv" ref={root}>
      <section className="inv-hero">
        <div className="inv-hero-in">
          <p className="inv-crumb" {...rise(0)}>Investor relations <span>/</span> {label}</p>
          <div className="inv-hero-row">
            <h1 {...rise(1)}>Investors</h1>
            <div className="inv-hero-side" {...rise(2)}>
              <p>Quarterly and annual results, shareholders’ letters and earnings calls for TAKE Limited, in one place.</p>
              <span className="inv-listed"><i />Listed on NSE &amp; BSE</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="inv-tabs" ref={tabsRef} aria-label="Investor sections">
        <div className="inv-tabs-in">
          {TABS.map(([id, name]) => (
            <button key={id} type="button" className={tab === id ? 'is-on' : ''} aria-current={tab === id} onClick={() => pick(id)}>{name}</button>
          ))}
        </div>
      </nav>

      <div className="inv-body" key={tab}>
        {tab === 'financial-results' && <FinancialResults />}
        {tab === 'investor-corner' && <DocExplorer title="Investor Corner" categories={CORNER} />}
        {tab === 'corporate-governance' && <DocExplorer title="Corporate Governance" categories={GOVERNANCE} />}
        {tab === 'corporate-announcement' && <YearExplorer title="Corporate Announcement" data={D.corporateAnnouncements} />}
        {tab === 'disclosure' && <YearExplorer title="Disclosure" data={D.disclosures} />}
        {tab === 'board-of-directors' && <Board />}
        {tab === 'subsidiary-financials' && <DocExplorer title="Subsidiary Financials" categories={[byYear('Subsidiary Financials', { all: D.subsidiaryFinancials })]} />}
      </div>
    </main>
  );
}
