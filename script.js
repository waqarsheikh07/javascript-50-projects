const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", () => {
  toggle.closest("nav").classList.toggle("active");
});

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const search_input = document.querySelector("#search-input");

btn.addEventListener("click", function (e) {
  search.classList.toggle("active");
  search_input.focus();
});

const __init__key = (function () {
  addEventListener("keydown", function (e) {
    const container = document.querySelector(".container");
    container.innerHTML = `
    <div class="container">
      <div class="key">
      ${e.key === " " ? "space" : e.key}
        <small>event.key</small>
      </div>
      <div class="key">
      ${e.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
      ${e.code}
        <small>event.code</small>
      </div>
    </div>
    `;
  });
})();
