(function () {
  var SOFT_HYPHEN = "\u00ad";
  var MIN_WORD_LENGTH = 8;
  var LONG_WORD_PATTERN = /[A-Za-z][A-Za-z-]{7,}/g;

  function hyphenateWordPart(part) {
    if (part.length < MIN_WORD_LENGTH || /^[A-Z0-9]+$/.test(part)) {
      return part;
    }

    return part.split("").join(SOFT_HYPHEN);
  }

  function hyphenateWord(word) {
    if (word.indexOf(SOFT_HYPHEN) !== -1) {
      return word;
    }

    return word.split(/(-)/).map(function (part) {
      return part === "-" ? part : hyphenateWordPart(part);
    }).join("");
  }

  function hyphenateTitleText(text) {
    return text.replace(LONG_WORD_PATTERN, hyphenateWord);
  }

  function hyphenateTextNodes(element) {
    Array.prototype.forEach.call(element.childNodes, function (node) {
      if (node.nodeType === 3) {
        node.nodeValue = hyphenateTitleText(node.nodeValue);
      } else if (node.nodeType === 1) {
        hyphenateTextNodes(node);
      }
    });
  }

  function hyphenatePublicationTitles() {
    var titles = document.querySelectorAll(".publication-title-text");

    Array.prototype.forEach.call(titles, function (title) {
      if (title.getAttribute("data-soft-hyphenated") === "true") {
        return;
      }

      hyphenateTextNodes(title);
      title.setAttribute("data-soft-hyphenated", "true");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hyphenatePublicationTitles);
  } else {
    hyphenatePublicationTitles();
  }
}());
