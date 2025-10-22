document.addEventListener("DOMContentLoaded", () => {
  // 🟢 Typewriter
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

  // 🟣 Image Slider
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 4000);

  // 💳 PayPal
  paypal.Buttons({
    style: {
      color: 'blue',
      shape: 'pill',
      label: 'pay',
      layout: 'vertical'
    },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: '20.00' },
          description: "Custom Website Order"
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment completed! Thank you, ' + details.payer.name.given_name + ' 🎉');
      });
    },
    onError: function(err) {
      console.error(err);
      alert('Something went wrong with PayPal. Please try again.');
    }
  }).render('#paypal-button-container');
});
