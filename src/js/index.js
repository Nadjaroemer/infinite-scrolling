var offset = 0;
var count;

function catchEmAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        .then(res => res.json())//andet måde at skrive det på: .then(function(response){return respnse.json()}
            .then(function(data) {
            count = data.count;
            data.results.forEach(function(result) {//data er den information, jeg har fetchet (check i konsolen), results er Array'et 
                //console.log(data);                    //forEach itereringsmetode til Arrayer
                
                let template = document.querySelector("#template");//id'en på min template
                let characterList = document.querySelector(".characterList");//class'en på min ul i section

                let clone = template.content.cloneNode(true);//her laver jeg en klon
                clone.querySelector(".character").innerText = result.name;//her skal klonen sættes in i html'en
                
                characterList.appendChild(clone);
            });

            var lastChild = document.querySelector(".characterList li:last-child");
            observer.observe(lastChild);

        });
    };

        var observer = new IntersectionObserver(function(entries) {
            //console.log(entries);
            if (entries[0].intersectionRatio <= 0) return;
            
            observer.unobserve(entries[0].target);
            offset = offset + 10;
            
            if (offset > count) return;
            
            catchEmAll(offset);
        }, {threshold: 1});

        /*function callback(entries) {
        //var target = entries[0].target;en anden måde at skrive det på
        var { target, intersectionRatio, isIntersecting } =  entries[0];
        console.log(entries);
        var intObs = new IntersectionObserver(callback, options);
  

        intObs.observe(document.querySelector(".characterList li:last-child")); 
        };*/

        catchEmAll(offset);
