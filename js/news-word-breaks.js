(function () {
  var SOFT_HYPHEN = "\u00ad";
  var WORD_PATTERN = /[A-Za-z]{4,}/g;
  var mobileQuery = window.matchMedia("(max-width: 767px)");

  function addBreaksToWord(word) {
    if (word.indexOf(SOFT_HYPHEN) !== -1) {
      return word;
    }

    return word.replace(/(.{2})(?=.)/g, "$1" + SOFT_HYPHEN);
  }

  function addBreaksToText(text) {
    return text.replace(WORD_PATTERN, addBreaksToWord);
  }

  function processTextNodes(element) {
    Array.prototype.forEach.call(element.childNodes, function (node) {
      if (node.nodeType === 3) {
        node.nodeValue = addBreaksToText(node.nodeValue);
      } else if (node.nodeType === 1 && !node.classList.contains("news-date")) {
        processTextNodes(node);
      }
    });
  }

  function removeSoftHyphens(element) {
    Array.prototype.forEach.call(element.childNodes, function (node) {
      if (node.nodeType === 3) {
        node.nodeValue = node.nodeValue.split(SOFT_HYPHEN).join("");
      } else if (node.nodeType === 1 && !node.classList.contains("news-date")) {
        removeSoftHyphens(node);
      }
    });
  }

  function updateNewsWordBreaks() {
    var newsItems = document.querySelectorAll("#newsid .news-list li");

    Array.prototype.forEach.call(newsItems, function (item) {
      if (mobileQuery.matches) {
        removeSoftHyphens(item);
        item.removeAttribute("data-soft-hyphenated");
        return;
      }

      if (item.getAttribute("data-soft-hyphenated") === "true") {
        return;
      }

      processTextNodes(item);
      item.setAttribute("data-soft-hyphenated", "true");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateNewsWordBreaks);
  } else {
    updateNewsWordBreaks();
  }

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", updateNewsWordBreaks);
  } else {
    mobileQuery.addListener(updateNewsWordBreaks);
  }
}());
