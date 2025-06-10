const parallax = document.querySelector(".parallax-bg");
window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  parallax.style.backgroundPositionY = `${offset * 0.5}px`;
});

const blocks = document.querySelectorAll(".block");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.3
});

blocks.forEach(block => observer.observe(block));