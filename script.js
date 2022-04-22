const menuBtn = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("active");
});
