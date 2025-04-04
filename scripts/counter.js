document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let started = false;
  function startCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      let speed = Math.ceil(target / 50);
      function updateCounter() {
        if (count < target) {
          count += speed;
          if (count > target) count = target;
          counter.innerText = count + "%";
          setTimeout(updateCounter, 30);
        }
      }
      updateCounter();
    });
  }
  function onScroll() {
    const section = document.querySelector(".stats");
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (sectionPos < screenPos && !started) {
      startCounters();
      started = true;
    }
  }
  window.addEventListener("scroll", onScroll);
});
