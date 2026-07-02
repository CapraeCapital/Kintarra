// Mobile nav toggle
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close the mobile menu after tapping a link
mobile.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Theme switcher — one all-dark theme + three split variations
const THEMES = ['dark', 'midnight', 'midnight2', 'midnight3'];
const STORAGE_KEY = 'kintarra-theme-v2';
const switchButtons = document.querySelectorAll('.theme-switch [data-set-theme]');

function applyTheme(name) {
  const theme = THEMES.includes(name) ? name : 'midnight';
  document.documentElement.setAttribute('data-theme', theme);
  switchButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.setTheme === theme);
  });
  try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
}

switchButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.setTheme));
});

// Restore saved choice (defaults to Midnight 1)
let saved = 'midnight';
try { saved = localStorage.getItem(STORAGE_KEY) || 'midnight'; } catch (e) { /* ignore */ }
applyTheme(saved);
