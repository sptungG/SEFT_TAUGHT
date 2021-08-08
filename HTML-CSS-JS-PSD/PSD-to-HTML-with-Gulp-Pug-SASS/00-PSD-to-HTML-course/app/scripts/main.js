const menuToggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("is-expand");
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
    menu.classList.remove("is-expand");
  }
});
