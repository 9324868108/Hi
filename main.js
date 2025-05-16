

// FAQ accordion logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      // Close others
      document.querySelectorAll('.faq-item').forEach(i => {
        if(i !== item) i.classList.remove('open');
      });
      // Toggle this one
      item.classList.toggle('open');
    });
  });
});
