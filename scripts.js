// lightweight nav toggle & small UI bits
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');

  toggle.addEventListener('click', () => {
    const isShown = nav.style.display === 'flex' || getComputedStyle(nav).display === 'flex';
    nav.style.display = isShown ? 'none' : 'flex';
    // tweak for mobile column layout
    if (!isShown){
      nav.style.flexDirection = 'column';
      nav.style.background = 'var(--card)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
    }
  });

  // fill the year automatically
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
