function getImage(url){
    return fetch(url)
        .then(res => res.json())
            .then(function(data) {
                return data.sprites.front_default;
            })//funktionen retunerer et promis, som retunerer billedet
}