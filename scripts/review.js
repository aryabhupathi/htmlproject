const cardsContainer = document.querySelector(".testimonial-cards");
const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.querySelector(".dots-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
let index = 0;
const visibleCards = 4;
const totalCards = cards.length;
for (let i = 0; i < visibleCards; i++) {
  let clone = cards[i].cloneNode(true);
  cardsContainer.appendChild(clone);
}
function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalCards; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.addEventListener("click", () => moveToIndex(i));
    dotsContainer.appendChild(dot);
  }
}
createDots();
updateDots();
function moveToIndex(i) {
  index = i;
  updateCarousel();
}
function moveNext() {
  if (index >= totalCards) {
    index = 0;
    cardsContainer.style.transition = "none";
    cardsContainer.style.transform = `translateX(0%)`;
    setTimeout(() => {
      cardsContainer.style.transition = "transform 0.5s ease-in-out";
      index++;
      updateCarousel();
    }, 50);
  } else {
    index++;
    updateCarousel();
  }
}
function movePrev() {
  if (index <= 0) {
    index = totalCards;
    cardsContainer.style.transition = "none";
    cardsContainer.style.transform = `translateX(-${index * 25}%)`;
    setTimeout(() => {
      cardsContainer.style.transition = "transform 0.5s ease-in-out";
      index--;
      updateCarousel();
    }, 50);
  } else {
    index--;
    updateCarousel();
  }
}
function updateCarousel() {
  cardsContainer.style.transform = `translateX(-${index * 25}%)`;
  updateDots();
}
function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index % totalCards);
  });
}
rightBtn.addEventListener("click", moveNext);
leftBtn.addEventListener("click", movePrev);
setInterval(moveNext, 4000);
