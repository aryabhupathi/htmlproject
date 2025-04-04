function toggleSearch() {
  let navbar = document.querySelector(".navbar");
  let searchContainer = document.querySelector(".search-container");
  let searchWrapper = document.querySelector(".search-wrapper");
  let searchInput = document.getElementById("search");
  let navLinks = document.querySelector(".nav-links");
  navbar.classList.toggle("search-active");
  if (navbar.classList.contains("search-active")) {
    navLinks.style.display = "none";
    searchWrapper.classList.add("centered");
    searchInput.focus();
  } else {
    navLinks.style.display = "flex";
    searchWrapper.classList.remove("centered");
    searchInput.value = "";
  }
}
function hideSearch() {
  let navbar = document.querySelector(".navbar");
  let navLinks = document.querySelector(".nav-links");
  let searchWrapper = document.querySelector(".search-wrapper");
  let searchInput = document.getElementById("search");
  if (!searchInput.value) {
    navbar.classList.remove("search-active");
    searchWrapper.classList.remove("centered");
    navLinks.style.display = "flex";
  }
}
