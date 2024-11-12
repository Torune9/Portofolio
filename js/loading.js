const loading = document.querySelector(".loading");

const h1 = document.getElementById("hello-world");

const world = "HelloWorld";

const hello = Array.from(world)
  .map((value) => `<span>${value}</span>`)
  .join("");

h1.innerHTML = hello;

const spans = document.querySelectorAll(".loading h1 span");

let animationCount = 0;

spans.forEach((span, index) => {
  span.addEventListener("animationend", () => {
    span.style.transform = "translateX(100vw)";
    // Cek apakah semua span sudah selesai animasi
    animationCount++;
    if (animationCount === spans.length) {
      // Semua animasi selesai, ubah latar belakang
      loading.style.height = "0";
      const sections = document.querySelectorAll("section");

      const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // Berapa persen elemen terlihat sebelum animasi dimulai
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bubble-up");
          }
        });
      }, observerOptions);

      sections.forEach((section) => {
        const directChild = Array.from(section.children);
        directChild.forEach((elements) => observer.observe(elements));
      });

      if (loading.style.height == "0px") {
           loading.remove()
      }
    }

  });
});

const percen = document.querySelector("#percen p");

let count = 0

const total = setInterval(() => {
  percen.textContent = `${count++}%`;

  if (count > 100) {
      clearInterval(total)
      percen.style.opacity = 0
    }

},27);

let circle;

const ballons = setInterval(() => {
    const randomSize = Math.round(Math.random() * 100 + 20);
    const circle = document.createElement("div");
  
    // Menambahkan class dan atribut
    circle.classList.add("circle-up");
    circle.style.cssText = `
      width: ${randomSize}px;
      height: ${randomSize}px;
      left: ${Math.round(Math.random() * 100)}%;
      background-color: #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')};
    `;
  
    // Menghapus elemen setelah animasi selesai
    circle.addEventListener('animationend', () => circle.remove());
  
    loading.appendChild(circle);
  }, 100);
  


