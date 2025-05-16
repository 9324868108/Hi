
function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach((el, i) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 40) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = `opacity .7s ${i*0.07}s, transform .7s ${i*0.07}s`;
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  // Animate .fade-in elements on page load
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
