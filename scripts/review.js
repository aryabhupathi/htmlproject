let currentSlide = 0;
let slider,
  reviewCards,
  dots,
  slideCount,
  cardWidth,
  gap,
  visibleSlides,
  maxSlide;
function initSlider() {
  slider = document.getElementById("reviews-slider");
  reviewCards = document.querySelectorAll(".review-card");
  dots = document.querySelectorAll(".dot");
  slideCount = reviewCards.length;
  cardWidth = reviewCards[0].offsetWidth;
  gap = 20;
  visibleSlides = getVisibleSlides();
  maxSlide = Math.max(0, slideCount - visibleSlides);
  updateSliderPosition();
}
function getVisibleSlides() {
  return window.innerWidth <= 768 ? 1 : 3;
}
function updateSliderPosition() {
  if (!slider) return;
  const slideWidth = cardWidth + gap;
  const transform = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${transform}px)`;
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
function moveSlide(direction) {
  currentSlide = Math.max(0, Math.min(maxSlide, currentSlide + direction));
  updateSliderPosition();
}
function goToSlide(index) {
  currentSlide = Math.min(index, maxSlide);
  updateSliderPosition();
}
document.addEventListener("DOMContentLoaded", function () {
  initSlider();
  window.addEventListener("resize", function () {
    cardWidth = document.querySelector(".review-card").offsetWidth;
    visibleSlides = getVisibleSlides();
    maxSlide = Math.max(0, slideCount - visibleSlides);
    currentSlide = Math.min(currentSlide, maxSlide);
    updateSliderPosition();
  });
});
