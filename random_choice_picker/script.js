const __init__ = (function () {
  const choice_text_area = document.querySelector("#choice-text-area");

  const tags = document.querySelector("#tags");
  const h3_heading = document.querySelector(".container h3");
  choice_text_area.focus();
  choice_text_area.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 100);
      randonSelection();
    }
    createTags(e.target.value);
  });

  function createTags(value) {
    const tags_array = value
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    tags.innerHTML = "";
    tags_array.forEach((tag) => {
      let span = document.createElement("span");
      span.innerHTML = tag;
      span.classList.add("tag");
      tags.appendChild(span);
    });
  }

  function randonSelection() {
    const times = 30;
    const inerval = setInterval(function () {
      console.log(pickRandomTag());
      const randomTag = pickRandomTag();

      heighlighttag(randomTag);
      setTimeout(() => {
        removeHeighlighttag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(inerval);
      setTimeout(() => {
        heighlighttag(pickRandomTag());
      }, 100);
    }, 100 * times);
  }
  function pickRandomTag() {
    const tags_all = tags.querySelectorAll(".tag");
    if (!tags_all.length) {
      return;
    }

    return tags_all[Math.floor(Math.random() * tags_all.length)];
  }
  function heighlighttag(tag) {
    return tag?.classList.add("heighlight");
  }
  function removeHeighlighttag(tag) {
    return tag?.classList.remove("heighlight");
  }
})();
