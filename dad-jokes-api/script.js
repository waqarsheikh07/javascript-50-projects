const __init__ = (function () {
  const btn = document.querySelector("#joke-btn");
  const btnText = document.querySelector("#joke-btn span");

  const getdata = function (url) {
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((getJson) => {
        setJoke(getJson);
        btn.disabled = false;
        btn.classList.remove("spin");
        btnText.style.opacity = 1;
      });
    btn.setAttribute("disabled", true);
    btn.classList.add("spin");
    btnText.style.opacity = 0;
  };
  getdata("https://icanhazdadjoke.com/");

  btn.addEventListener("click", function (e) {
    getdata("https://icanhazdadjoke.com/");
  });

  function setJoke(jokedata) {
    document.querySelector(".joke").textContent = jokedata.joke;
  }
})();
