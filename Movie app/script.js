const __init__ = (function () {
  api_key = "f31069c7aa94621dbd2b91c9559222fb";

  const API_URL =
    "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
    encodeURIComponent(this.api_key) +
    "&page=1";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API_URL =
    "http://api.themoviedb.org/3/search/movie?api_key=" +
    encodeURIComponent(this.api_key) +
    '&query="';
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  const main = document.querySelector("#main");
  getMovies(API_URL);
  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        showMOvies(data.results);

        console.log(data.results);
      });
  }

  function prelload() {
    main.innerHTML = "";
    for (let index = 0; index < 20; index++) {
      const divEl = document.createElement("div");
      divEl.classList.add("movie");
      divEl.style.height = "500px";

      main.appendChild(divEl);
    }
  }
  function showMOvies(results) {
    main.innerHTML = "";
    results.forEach(function (movie) {
      let { title, vote_average, overview, poster_path } = movie;

      const div = document.createElement("div");
      div.classList.add("movie");
      div.innerHTML = `
    
        <img  loading='lazy' src="${IMAGE_PATH + poster_path}" alt="${title}" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getRatingColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
      
    `;

      main.appendChild(div);
    });
  }
  function getRatingColor(rating) {
    if (rating >= 8) return "green";
    else if (rating >= 5) return "orange";
    return "red";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchTerms = search.value;
    if (searchTerms && searchTerms !== "") {
      getMovies(SEARCH_API_URL + searchTerms);
    } else {
      window.location.reload();
    }
  });
})();
