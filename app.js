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
