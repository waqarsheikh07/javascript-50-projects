const __init__ = (function () {
  let social_media_followers = document.querySelectorAll("[data-target]");

  social_media_followers.forEach(function (floowers) {
    floowers.innerText = "0";
    const updateCount = function () {
      const target = +floowers.getAttribute("data-target");
      const c = +floowers.innerText;
      console.log(c);
      const increment = target / 50;

      if (c < target) {
        floowers.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCount, 50);
      }
    };
    updateCount();
  });
})();
