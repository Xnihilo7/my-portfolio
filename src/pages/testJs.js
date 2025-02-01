let targetScroll = 0;
let currentScroll = 0;
let targetScroll2 = 0;
let currentScroll2 = 0;
const easing = 0.1; // Adjust for more/less lag

const element1 = document.querySelector(".skillsGrid");
const element2 = document.querySelector(".skillsGrid2");

window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;  // Scrolls normally
  targetScroll2 = window.scrollY * -1; // Reverse direction
});

function animate() {
  // Smooth interpolation
  currentScroll += (targetScroll - currentScroll) * easing;
  currentScroll2 += (targetScroll2 - currentScroll2) * easing;

  element1.scrollLeft = currentScroll;  // Moves right
  element2.scrollLeft = currentScroll2; // Moves left

  requestAnimationFrame(animate);
}

animate();
