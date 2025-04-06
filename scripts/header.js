function toggleSearch() {
  const navbar = document.querySelector(".navbar");
  if (navbar.classList.contains("search-active")) {
    document.getElementById("search").focus();
  } else {
    navbar.classList.add("search-active");
    setTimeout(() => {
      document.getElementById("search").focus();
    }, 300);
  }
}
function hideSearch() {
  const navbar = document.querySelector(".navbar");
  setTimeout(() => {
    navbar.classList.remove("search-active");
  }, 200);
}
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("menu-active");
}
window.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  function handleScreenChange(e) {
    const navbar = document.querySelector(".navbar");
    if (e.matches) {
      navbar.classList.add("mobile-view");
    } else {
      navbar.classList.remove("mobile-view", "menu-active");
    }
  }
  handleScreenChange(mediaQuery);
  mediaQuery.addEventListener("change", handleScreenChange);
});
