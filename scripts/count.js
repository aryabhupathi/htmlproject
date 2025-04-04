// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".testimonial-cards");
//   const cards = document.querySelectorAll(".testimonial-card");
//   const dotsContainer = document.querySelector(".dots");
//   const prevBtn = document.querySelector(".left-btn");
//   const nextBtn = document.querySelector(".right-btn");
//   let index = 0;
//   const cardWidth = cards[0].offsetWidth + 20;
//   const totalCards = cards.length;
//   const firstClone = cards[0].cloneNode(true);
//   const lastClone = cards[cards.length - 1].cloneNode(true);
//   container.appendChild(firstClone);
//   container.insertBefore(lastClone, cards[0]);
//   container.style.transform = `translateX(${-cardWidth}px)`;
//   function createDots() {
//     dotsContainer.innerHTML = "";
//     for (let i = 0; i < totalCards; i++) {
//       const dot = document.createElement("span");
//       dot.classList.add("dot");
//       if (i === 0) dot.classList.add("active");
//       dot.dataset.index = i;
//       dot.addEventListener("click", function () {
//         index = parseInt(this.dataset.index);
//         updateCarousel();
//       });
//       dotsContainer.appendChild(dot);
//     }
//   }
//   createDots();
//   function updateCarousel(instant = false) {
//     container.style.transition = instant
//       ? "none"
//       : "transform 0.5s ease-in-out";
//     container.style.transform = `translateX(${-((index + 1) * cardWidth)}px)`;
//     document
//       .querySelectorAll(".dot")
//       .forEach((dot) => dot.classList.remove("active"));
//     document.querySelectorAll(".dot")[index].classList.add("active");
//   }
//   function moveNext() {
//     if (index >= totalCards - 1) {
//       index = -1;
//       container.style.transition = "none";
//       container.style.transform = `translateX(${-cardWidth}px)`;
//       setTimeout(() => {
//         index++;
//         updateCarousel();
//       }, 50);
//     } else {
//       index++;
//       updateCarousel();
//     }
//   }
//   function movePrev() {
//     if (index <= 0) {
//       index = totalCards;
//       container.style.transition = "none";
//       container.style.transform = `translateX(${-((index + 1) * cardWidth)}px)`;
//       setTimeout(() => {
//         index--;
//         updateCarousel();
//       }, 50);
//     } else {
//       index--;
//       updateCarousel();
//     }
//   }
//   nextBtn.addEventListener("click", moveNext);
//   prevBtn.addEventListener("click", movePrev);
//   setInterval(moveNext, 5000);
// });
