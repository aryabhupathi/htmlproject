document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/slide1.webp",
    "./assets/slide2.webp",
    "./assets/slide3.webp",
    "./assets/slide4.webp",
    "./assets/slide5.webp",
    "./assets/free.png",
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
