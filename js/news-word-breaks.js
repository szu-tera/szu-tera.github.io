(function () {
  var SOFT_HYPHEN = "\u00ad";
  var WORD_PATTERN = /[A-Za-z]{4,}/g;

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

  function addNewsWordBreaks() {
    var newsItems = document.querySelectorAll("#newsid .news-list li");

    Array.prototype.forEach.call(newsItems, function (item) {
      if (item.getAttribute("data-soft-hyphenated") === "true") {
        return;
      }

      processTextNodes(item);
      item.setAttribute("data-soft-hyphenated", "true");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addNewsWordBreaks);
  } else {
    addNewsWordBreaks();
  }
}());
