const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const search_input = document.querySelector("#search-input");

btn.addEventListener("click", function (e) {
  search.classList.toggle("active");
  search_input.focus();
});
