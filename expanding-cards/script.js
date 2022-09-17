const panel = document.querySelectorAll(".panel");
panel.forEach(function (e) {
  e.addEventListener("click", function (e) {
    panel.forEach(function (panel) {
      panel.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
