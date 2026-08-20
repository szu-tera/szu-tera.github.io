(function () {
  var page = document.querySelector(".join-us-page");
  if (!page) return;

  var buttons = page.querySelectorAll("[data-language]");
  var panels = page.querySelectorAll("[data-language-panel]");

  function setLanguage(language) {
    Array.prototype.forEach.call(buttons, function (button) {
      var active = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    Array.prototype.forEach.call(panels, function (panel) {
      panel.hidden = panel.getAttribute("data-language-panel") !== language;
    });

    document.documentElement.setAttribute("data-join-us-language", language);
  }

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"));
    });
  });

  setLanguage("en");
})();
