const __init__ = (function () {
  const allCups = document.querySelectorAll(".cup-small");
  const liters = document.querySelector("#liters");
  const remained = document.querySelector(".remained");
  const percentage = document.querySelector(".percentage");
  allCups.forEach(function (item, index) {
    item.addEventListener("click", function (e) {
      removeAllwater(index);
    });
  });

  function removeAllwater(index) {
    if (
      allCups[index].classList.contains("full") &&
      !allCups[index].nextElementSibling.classList.contains("full")
    ) {
      index--;
    }

    allCups.forEach(function (item, index2) {
      if (index2 <= index) {
        item.classList.add("full");
      } else {
        item.classList.remove("full");
      }
    });
    const totalCups = allCups.length;
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    if (fullCups === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = 0;
    } else {
      percentage.style.visibility = "visible";
      percentage.textContent = `${(fullCups / totalCups) * 100} %`;
      percentage.style.height = `${(fullCups / totalCups) * 350}px`;
    }

    if (totalCups === fullCups) {
      remained.style.visibility = "hidden";
      remained.style.height = 0;
    } else {
      remained.style.visibility = "visible";
      liters.textContent = `${2 - (250 * fullCups) / 1000}`;
    }
  }
})();
