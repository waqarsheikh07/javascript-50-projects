const __init__ = (function () {
  const bgimage = document.querySelector(".container");
  const split_left = document.querySelector(".split.left");
  const split_right = document.querySelector(".split.right");
  split_right.addEventListener("mouseenter", (e) => {
    bgimage.classList.add("hover-right");
  });

  split_right.addEventListener("mouseleave", (event) => {
    bgimage.classList.remove("hover-right");
  });
  split_left.addEventListener("mouseenter", (e) => {
    bgimage.classList.add("hover-left");
  });

  split_left.addEventListener("mouseleave", (event) => {
    bgimage.classList.remove("hover-left");
  });
})();
