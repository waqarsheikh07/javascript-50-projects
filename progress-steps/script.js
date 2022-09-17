const __init__ = (function () {
  const progress = document.querySelector("#progress");
  const circles = document.querySelectorAll(".circle");

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  let currentProgress = 1;

  next.addEventListener("click", () => {
    currentProgress++;
    if (currentProgress > circles.length) currentProgress = circles.length;

    Move();
  });

  prev.addEventListener("click", () => {
    currentProgress--;
    if (currentProgress < 1) currentProgress = 1;
    Move();
  });

  function Move() {
    circles.forEach((circle, index) => {
      if (index < currentProgress) circle.classList.add("active");
      else circle.classList.remove("active");
    });
    let progressBarWidth = ((currentProgress - 1) / (circles.length - 1)) * 100;
    progress.style.width = progressBarWidth + "%";

    next.disabled = currentProgress === 4 ? true : false;

    prev.disabled = currentProgress === 1 ? true : false;
  }
})();
