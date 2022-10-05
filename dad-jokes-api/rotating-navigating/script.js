const __init__ = (function () {
  const container = document.querySelector(".container");
  const circle = document.querySelector(".circle");
  const menu = document.querySelector("#open");
  const close = document.querySelector("#close");
  const nav = document.querySelector("nav");

  menu.addEventListener("click", function (e) {
    container.classList.add("show-nav");
    nav.style.translate = "0%";
    circle.style.rotate = "-70deg";
  });

  close.addEventListener("click", function (e) {
    container.classList.remove("show-nav");
    nav.style.translate = "-100%";
    circle.style.rotate = "0deg";
  });
})();
