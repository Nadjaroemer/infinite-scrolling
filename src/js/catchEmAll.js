function catchEmAll(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        .then(res => res.json())//andet måde at skrive det på: .then(function(response){return respnse.json()}
            .then(function(data) {
                count = data.count;
                data.results.forEach(buildList)

            var lastChild = document.querySelector(".characterList li:last-child");
            observer.observe(lastChild);

        });
    };