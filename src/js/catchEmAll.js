function catchEmAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        .then(res => res.json())//andet måde at skrive det på: .then(function(response){return respnse.json()}
            .then(function(data) {
                count = data.count;
                data.results.forEach(function(result) {//data er den information, jeg har fetchet (check i konsolen), results er Array'et 
                    //console.log(data);                    //forEach itereringsmetode til Arrayer
                    //console.log(data.results);
                    //console.log(result.url);

                    let template = document.querySelector("#template");//id'en på min template
                    let characterList = document.querySelector(".characterList");//class'en på min ul i section

                    let clone = template.content.cloneNode(true);//her laver jeg en klon
                    clone.querySelector(".pokeName").innerText = result.name;//her skal klonen sættes in i html'en
                    
                    var image = clone.querySelector(".characterImg");
                
                    getImage(result.url)
                        .then(function(imageURL) {
                            image.dataset.src = imageURL;
                            //console.log(imageURL);
                            imageObserver.observe(image);
                        })
                    
                    characterList.appendChild(clone)
                });

            var lastChild = document.querySelector(".characterList li:last-child");
            observer.observe(lastChild);

        });
    };