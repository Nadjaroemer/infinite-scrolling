let url = new URLSearchParams(window.location.search);

let offset = 0;

let nextOffset;

var options = {
    threshold: [0.2, 0.5, 0.8]
};

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
    .then(res => res.json())
        .then(function(data) {

            let maxOffset = data.count - (data.count % 10);

            nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 10;
        

            //nextLink.href = `?offset=${nextOffset}`;
            

            data.results.forEach(function(result) {//data er den information, jeg har fetchet (check i konsolen), results er Array'et 
            //console.log(data);
            
            
            let character = document.querySelector("#character");
            let characterList = document.querySelector(".characterList");

            let clone = character.content.cloneNode(true);//her laver jeg en klon
            clone.querySelector(".character").innerText = result.name;//her skal klonen sættes in i html'en
            
            characterList.appendChild(clone);
        });

        function callback(entries) {
            //var target = entries[0].target;en anden måde at skrive det på
            var { target, intersectionRatio, isIntersecting } =  entries[0];
            console.log(entries);

        }
        
        var intObs = new IntersectionObserver(callback, options);
  

        intObs.observe(document.querySelector(".characterList li:last-child")); 
    });