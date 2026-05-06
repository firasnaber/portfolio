(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.topnav a');

  function setActive() {
    const scrollY = window.scrollY + 140;
    let current = '';
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop) current = s.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
