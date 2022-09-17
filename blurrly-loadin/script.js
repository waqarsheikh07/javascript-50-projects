const __init__ = (function () {
  const bgimage = document.querySelector(".container > img");
  const inner_text = document.querySelector(".container .inner-text");
  let load = 0;

  let __init___timer = setInterval(function () {
    load++;
    if (load > 99) {
      clearInterval(__init___timer);
    }
    inner_text.innerHTML = `${load}`;
    inner_text.style.opacity = `${(100 - load) / 100}`;
    bgimage.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
  }, 30);

  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
})();
