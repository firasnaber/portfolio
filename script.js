// Theme is initialized in the inline <head> script (to prevent flash).
// This handler just toggles and persists the user's choice.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Highlight active nav link based on scroll position
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setActive() {
    const scrollY = window.scrollY + 120;
    let current = '';
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop) current = s.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + current
      );
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
