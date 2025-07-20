var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const loginForm = document.querySelector(".login-part");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

loginLink.addEventListener("click", () => {
  loginForm.classList.add("active");
});

registerLink.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
