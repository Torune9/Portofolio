const loading = document.querySelector(".loading");

const h1 = document.getElementById("hello-world");

const percen = document.getElementById('percen')

let count = 0

const midLoad = document.getElementsByClassName('mid-load')[0]

window.addEventListener('load',()=>{
  h1.addEventListener('animationend',(animate)=>{
      loading.classList.add("slide-out-blurred-top")
  })
  loading.addEventListener('animationend',(animate)=>{
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
  })
  
  setInterval(()=>{
      count++
      if(count <= 100){
          percen.firstElementChild.textContent = `${count}%`
      }else{
          percen.style.display = "none"
      }
  },18)  
})
