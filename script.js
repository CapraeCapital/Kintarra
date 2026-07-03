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
