/* Home-page sections the header can jump to (the id on the section element) */
export const SECTIONS = ['investors', 'faq'];

/* Scroll smoothly to a home-page section; corrects itself once if lazy images moved the page while scrolling */
export function scrollToSection(id) {
  window.dispatchEvent(new Event('tk:skip-whatif')); // jump over the white "What If" page, no animation
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    const t = document.getElementById(id);
    if (t && Math.abs(t.getBoundingClientRect().top) > 8) t.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, 1400);
  return true;
}
