const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('visible', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Keyboard nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Optional: autoplay every 10 seconds
// setInterval(nextSlide, 10000);

showSlide(current);