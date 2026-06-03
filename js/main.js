/* ============================================================
   IMANTEK – main.js
   Animaciones, contadores y efectos interactivos
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Intersection Observer – fade-up al hacer scroll ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  const animTargets = [
    '.service-card', '.mvv-card', '.step',
    '.roadmap-year', '.opp-card', '.diff-item',
    '.market-card', '.cinfo-card', '.about-desc',
    '.mvv-cards', '.section-header', '.sector-card-item'
  ];
  document.querySelectorAll(animTargets.join(', ')).forEach(el => {
    el.classList.add('fade-up');
    io.observe(el);
  });

  /* ── Smooth scroll interno ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
