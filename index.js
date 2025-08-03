import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";



function toggleCalendar() {
  document.getElementById("calendarOverlay").classList.remove("hidden");
}

function closeCalendar() {
  document.getElementById("calendarOverlay").classList.add("hidden");
}

const ball = document.getElementById("pickleball");
const shadow = document.getElementById("pickleball-shadow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let angle = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

gsap.ticker.add(() => {
  angle += 8;

  // Ball (with rotation)
  gsap.to(ball, {
    duration: 0.2,
    x: mouseX,
    y: mouseY,
    rotation: angle,
    scale: 1.2,
    ease: "power1.out",
    overwrite: true,
  });

  // Shadow (no rotation, lower Y)
  gsap.to(shadow, {
    duration: 0.2,
    x: mouseX,
    y: mouseY + 20, // shift down
    scale: 1.1,
    ease: "power1.out",
    overwrite: true,
  });
});

