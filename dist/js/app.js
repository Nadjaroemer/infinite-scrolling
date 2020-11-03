"use strict";

var url = new URLSearchParams(window.location.search);
var offset = 0;
var nextOffset;
var options = {
  threshold: [0.2, 0.5, 0.8]
};
fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(offset, "&limit=10")).then(function (res) {
  return res.json();
}).then(function (data) {
  var maxOffset = data.count - data.count % 10;
  nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 10; //nextLink.href = `?offset=${nextOffset}`;

  data.results.forEach(function (result) {
    //data er den information, jeg har fetchet (check i konsolen), results er Array'et 
    //console.log(data);
    var character = document.querySelector("#character");
    var characterList = document.querySelector(".characterList");
    var clone = character.content.cloneNode(true); //her laver jeg en klon

    clone.querySelector(".character").innerText = result.name; //her skal klonen sættes in i html'en

    characterList.appendChild(clone);
  });

  function callback(entries) {
    //var target = entries[0].target;en anden måde at skrive det på
    var _entries$ = entries[0],
        target = _entries$.target,
        intersectionRatio = _entries$.intersectionRatio,
        isIntersecting = _entries$.isIntersecting;
    console.log(entries);
  }

  var intObs = new IntersectionObserver(callback, options);
  intObs.observe(document.querySelector(".characterList li:last-child"));
});
//# sourceMappingURL=app.js.map
