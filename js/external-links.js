(function () {
  function shouldOpenInNewTab(anchor) {
    var href = anchor.getAttribute("href");

    if (!href || href.charAt(0) === "#") {
      return false;
    }

    try {
      var url = new URL(href, window.location.href);
      var isHttpLink = url.protocol === "http:" || url.protocol === "https:";
      var isExternalLink = isHttpLink && url.origin !== window.location.origin;
      var isPdfLink = isHttpLink && /\.pdf$/i.test(url.pathname);

      return isExternalLink || isPdfLink;
    } catch (error) {
      return false;
    }
  }

  function addRelValue(anchor, value) {
    var rel = anchor.getAttribute("rel") || "";
    var values = rel.split(/\s+/).filter(Boolean);

    if (values.indexOf(value) === -1) {
      values.push(value);
    }

    anchor.setAttribute("rel", values.join(" "));
  }

  function openExternalLinksInNewTabs() {
    var links = document.querySelectorAll("a[href]");

    Array.prototype.forEach.call(links, function (link) {
      if (!shouldOpenInNewTab(link) || link.hasAttribute("target")) {
        return;
      }

      link.setAttribute("target", "_blank");
      addRelValue(link, "noopener");
      addRelValue(link, "noreferrer");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openExternalLinksInNewTabs);
  } else {
    openExternalLinksInNewTabs();
  }
}());
