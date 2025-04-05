document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/free.png",
    "./assets/slide1.webp",
    "./assets/slide2.webp",
    "./assets/slide3.webp",
    "./assets/slide4.webp",
    "./assets/slide5.webp",
  ];
  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");
  const dotsContainer = document.getElementById("dotsContainer");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  function updateCarousel(index) {
    mainImage.src = images[index];
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });
  images.forEach((src, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = src;
    thumbnail.classList.add("thumbnail");
    if (index === currentIndex) thumbnail.classList.add("active");
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
    thumbnailContainer.appendChild(thumbnail);
  });
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
  });
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
  });
  updateCarousel(currentIndex);
});
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
