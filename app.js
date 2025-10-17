document.addEventListener("DOMContentLoaded", () => {
  const words = [
    { text: "CSS", color: "#2465F1" },
    { text: "HTML", color: "#F06427" },
    { text: "JavaScript", color: "#FFDE24" },
    { text: "Responsive Design", color: "#00FFAA" },
    { text: "Animations", color: "#FF00FF" },
  ];

  const typeEl = document.getElementById("typewriter");
  let i = 0, j = 0, deleting = false;
  const speed = 100, delay = 1200, eraseSpeed = 60;

  function type() {
    const current = words[i];
    const displayText = current.text.substring(0, j);
    typeEl.innerHTML = `Expert in <span style="color:${current.color};">${displayText}</span>`;

    if (!deleting && j < current.text.length) j++;
    else if (deleting && j > 0) j--;
    else if (!deleting && j === current.text.length) {
      deleting = true;
      setTimeout(type, delay);
      return;
    } else if (deleting && j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, deleting ? eraseSpeed : speed);
  }

  type();
});
// Get all slides and buttons
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Next and previous buttons
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  showSlide(currentIndex);
});

// Auto slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);

