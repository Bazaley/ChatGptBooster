let mobileMenu = document.querySelector("[data-mobile-menu]");
let btnOpen = document.querySelector("[data-btn-open]");
let btnClose = document.querySelector("[data-btn-close]");
let body = document.querySelector("body");

btnOpen.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-hidden");
  body.classList.toggle("overflow");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-hidden");
  body.classList.toggle("overflow");
});
