
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});





const animateOnScroll = () => {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  const triggerOffset = windowHeight * 0.7; 
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerOffset && sectionBottom > 0) {
      if (!section.classList.contains('animated')) {
        section.classList.add('animated');
        
        const textElements = section.querySelectorAll('h1, h2, h3, p, a, li');
        textElements.forEach((el, index) => {
          el.style.animation = `fadeIn 1s ease-out ${index * 0.2}s forwards`;
          el.style.opacity = '0'; 
        });
      }
    }
  });
};


window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".certifications-grid");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const scrollAmount = 330;

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  function checkScroll() {
    leftBtn.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
    rightBtn.style.display =
      scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth
        ? "block"
        : "none";
  }

  scrollContainer.addEventListener("scroll", checkScroll);
  checkScroll(); 
});


function toggleMenu() {
    var menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function closeMenu() {
    var menu = document.querySelector(".nav-links");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    }
}