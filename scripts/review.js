document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.getElementById("reviews-slider");
  const prevButton = document.getElementById("prevss");
  const nextButton = document.getElementById("nextss");
  const radiosContainer = document.querySelector(".radios-container");
  const allReviews = Array.from(reviewsContainer.children);
  const reviewsPerPage = window.innerWidth <= 768 ? 1 : 3;
  let currentIndex = 0;
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
  function displayReviews() {
    reviewsContainer.style.opacity = 0;
    setTimeout(() => {
      reviewsContainer.innerHTML = "";
      const visibleReviews = allReviews.slice(
        currentIndex,
        currentIndex + reviewsPerPage
      );
      visibleReviews.forEach((review) => reviewsContainer.appendChild(review));
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex + reviewsPerPage >= allReviews.length;
      updateRadioSelection();
      reviewsContainer.style.opacity = 1;
    }, 300);
  }
  function createRadioButtons() {
    radiosContainer.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "review-pagination";
      radio.classList.add("review-radio");
      radio.dataset.index = i * reviewsPerPage;
      if (i === 0) radio.checked = true;
      radio.addEventListener("change", (event) => {
        currentIndex = Number(event.target.dataset.index);
        displayReviews();
      });
      radiosContainer.appendChild(radio);
    }
  }
  function updateRadioSelection() {
    document.querySelectorAll(".review-radio").forEach((radio) => {
      radio.checked = Number(radio.dataset.index) === currentIndex;
    });
  }
  nextButton.addEventListener("click", () => {
    if (currentIndex + reviewsPerPage < allReviews.length) {
      currentIndex += reviewsPerPage;
      displayReviews();
    }
  });
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= reviewsPerPage;
      displayReviews();
    }
  });
  createRadioButtons();
  displayReviews();
});
