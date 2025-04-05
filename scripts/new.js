function toggleSubscription(id, fromRadio = false) {
  const allDetails = document.querySelectorAll(".subscription-details");
  allDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  const selectedDetails = document.getElementById(id + "-details");
  selectedDetails.classList.add("active");
  if (!fromRadio) {
    const radio = document.getElementById(id);
    radio.checked = true;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const flavorInputs = document.querySelectorAll('input[name="flavor"]');
  const flavorImages = document.querySelectorAll(".flavor-image");
  flavorInputs.forEach((input, index) => {
    input.addEventListener("change", function () {
      flavorImages.forEach((img) => {
        img.style.border = "none";
      });
      if (this.checked) {
        flavorImages[index].style.border = "2px solid #5e7353";
      }
    });
    if (input.checked) {
      flavorImages[index].style.border = "2px solid #5e7353";
    }
  });
});
