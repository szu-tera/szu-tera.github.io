(function () {
  function revealEmails() {
    var nodes = document.querySelectorAll(".obfuscated-email");

    Array.prototype.forEach.call(nodes, function (node) {
      var user = node.getAttribute("data-user");
      var domain = node.getAttribute("data-domain");

      if (!user || !domain) {
        return;
      }

      var email = user + "@" + domain;

      node.textContent = email;
      node.setAttribute("title", email);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealEmails);
  } else {
    revealEmails();
  }
})();
