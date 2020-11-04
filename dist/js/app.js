"use strict";

function buildList(result) {
  //data er den information, jeg har fetchet (check i konsolen), results er Array'et
  var clone = template.content.cloneNode(true); //her laver jeg en klon

  clone.querySelector(".pokeName").innerText = result.name; //her skal klonen sættes in i html'en

  var image = clone.querySelector(".characterImg");
  getImage(result.url).then(function (imageURL) {
    image.dataset.src = imageURL; //console.log(imageURL);

    imageObserver.observe(image);
  });
  characterList.appendChild(clone);
}

;
"use strict";

function catchEmAll(offset) {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(offset, "&limit=10")).then(function (res) {
    return res.json();
  }) //andet måde at skrive det på: .then(function(response){return respnse.json()}
  .then(function (data) {
    count = data.count;
    data.results.forEach(buildList);
    var lastChild = document.querySelector(".characterList li:last-child");
    observer.observe(lastChild);
  });
}

;
"use strict";

function getImage(url) {
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data.sprites.front_default;
  }); //funktionen retunerer et promis, som retunerer billedet
}
"use strict";

var imageObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;
  observer.unobserve(entries[0].target);
  entries[0].target.src = entries[0].target.dataset.src;
}, {
  threshold: 1
});
"use strict";

var offset = 0;
var count;
var template = document.querySelector("#template"); //id'en på min template            

var characterList = document.querySelector(".characterList"); //class'en på min ul i section

catchEmAll(offset);
"use strict";

var observer = new IntersectionObserver(function (entries) {
  //console.log(entries);
  if (entries[0].intersectionRatio <= 0) return;
  observer.unobserve(entries[0].target);
  offset = offset + 10;
  if (offset > count) return;
  catchEmAll(offset);
}, {
  threshold: 1
});
//# sourceMappingURL=app.js.map
