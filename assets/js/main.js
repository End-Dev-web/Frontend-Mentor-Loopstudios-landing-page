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

// GSAP Animation
// Text Animation
const splitText = document.querySelectorAll("[split-text]");
const opacityImage = document.querySelectorAll("[opacity-image]");
gsap.registerPlugin(ScrollTrigger, SplitText);

splitText.forEach((item) => {
  const split = new SplitText(item, { type: "chars" });
  gsap.set(item, { perspective: 400 });
  gsap.from(split.chars, {
    scrollTrigger: item,
    duration: 1,
    opacity: 0,
    scale: 0,
    y: 30,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });
});

// ScrollTriggre
ScrollTrigger.batch(opacityImage, {
  onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.5 }),
});

// Hover Buttons
let animElm = document.querySelector(".hover");
let slideElm = document.querySelector(".button");

slideElm.addEventListener("mouseenter", () => {
  let enterAnim = gsap.timeline();
  enterAnim.to(animElm, { left: "0%", duration: 0.5 });
});
slideElm.addEventListener("mouseleave", () => {
  let leaveAnim = gsap.timeline();
  leaveAnim.to(animElm, { left: "-100%", duration: 0.5 });
});

// Hover Links

const hoverLinks = document.querySelectorAll(".line-hover");
gsap.defaults({ duration: 0.3 });

hoverLinks.forEach(function (item) {
  const lineKinks = item.querySelector(".line");
  const tl = gsap
    .timeline({ paused: true })
    .to(lineKinks, { width: "100%" }, 0);

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

// Hover Image

const hoverImage = document.querySelectorAll(".opacity-image");
gsap.defaults({ duration: 0.3 });

hoverImage.forEach(function (item) {
  const images = item.querySelector(".hover-image");
  const img = gsap.timeline({ paused: true }).to(images, { top: "0%" }, 0);

  item.addEventListener("mouseenter", () => img.play());
  item.addEventListener("mouseleave", () => img.reverse());
});
