import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";

// Manually split the text into spans (or use a utility function)
const textElement = document.querySelector(".animate-text");
const originalText = textElement.textContent;
textElement.innerHTML = [...originalText].map((char, i) => `
  <span class="char-3d word-${i}">
    <em class="face face-top">${char}</em>
    <em class="face face-front">${char}</em>
    <em class="face face-bottom">${char}</em>
  </span>
`).join("");

// Use anime.stagger instead of import
const charsStagger = anime.stagger(100, { start: 0 });

anime.timeline({
  targets: ".char-3d",
  easing: "linear",
  loop: true,
  duration: 750
})
.add({ rotateX: [-90, 0] }, charsStagger)
.add({ targets: ".char-3d .face-top", opacity: [0.5, 0] }, charsStagger)
.add({ targets: ".char-3d .face-front", opacity: [1, 0.5] }, charsStagger)
.add({ targets: ".char-3d .face-bottom", opacity: [0.5, 1] }, charsStagger);



function toggleCalendar() {
  document.getElementById("calendarOverlay").classList.remove("hidden");
}

function closeCalendar() {
  document.getElementById("calendarOverlay").classList.add("hidden");
}
