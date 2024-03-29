const carouselContent = document.querySelector('.carousel-content');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % totalSlides;
  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + totalSlides) % totalSlides;
  moveCarousel();
});

function moveCarousel() {
  const offset = -counter * slideWidth;
  carouselContent.style.transition = 'transform 0.5s ease-in-out';
  carouselContent.style.transform = `translateX(${offset}px)`;
}