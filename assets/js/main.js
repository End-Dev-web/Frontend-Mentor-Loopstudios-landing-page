// import "/assets/sass/main.scss";

const primayNav = document.querySelector("[primary-navigation]");
const navToggle = document.querySelector("[mobil-nav-toggle]");

navToggle.addEventListener("click", () => {
  const visibility = primayNav.getAttribute("data-visible");

  if (visibility === "false") {
    primayNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primayNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// fixed navbar
const navbar = document.querySelector("[fixed-navbar]");
// console.log(navbar);

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  // your set of conditions goes here
  // console.log(entries);
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});
const opacityImage = document.querySelectorAll("[opacity-image]");
opacityImage.forEach((el) => observer.observe(el));
