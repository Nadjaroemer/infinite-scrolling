function buildList(result) {//data er den information, jeg har fetchet (check i konsolen), results er Array'et

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
};