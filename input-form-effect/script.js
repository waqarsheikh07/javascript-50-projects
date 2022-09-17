const __init__ = (function () {
  const allLabels = document.querySelectorAll(".form-control label ");
  allLabels.forEach(function (label) {
    label.innerHTML = label.innerHTML
      .split("")
      .map(
        (lab, idx) =>
          `<span style="transition-delay: ${idx * 50}ms">${lab}</span>`
      )
      .join("");
  });
})();
