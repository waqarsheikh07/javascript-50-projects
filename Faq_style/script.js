const __init__ = (function () {
  const faqButton = document.querySelectorAll(".faq button ");
  faqButton.forEach(function (button) {
    button.addEventListener("click", (e) => {
      e.target.closest(".faq").classList.toggle("active");
    });
  });
})();
