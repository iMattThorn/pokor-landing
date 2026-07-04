const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.addEventListener('click', event => {
  if (event.target.closest('.nav-disabled')) return;
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
});
