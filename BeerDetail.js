$(document).ready(() => {
    let beerId = GetBeerId()

    fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData)
        jsonData.forEach(beer => {
            AddBeerDetails(beer)            
        });
    })
});

function GetBeerId(){
    const urlParams = new URLSearchParams(window.location.search);
    var entries = urlParams.entries();
    for(pair of entries) { 
      console.log(pair[0], pair[1]); 
      if(pair[0]==="id"){
          return pair[1];
      }      
    }
    return null;
}

function AddBeerDetails(beer){
    let beerDetail = $(".beer-detail-tile");
    beerDetail.append($("<img>", {
        src: `${beer.image_url}`
    }))
    beerDetail.append($("<h1>", {
        text: `${beer.name}`
    }))
    beerDetail.append($('<div>', {
        class: "quote-block",
        html: `<q>${beer.tagline}</q>`
    }))    
    beerDetail.append($("<div>", {
        text: `First Brewed: ${beer.first_brewed}`
    }))
    beerDetail.append($("<div>", {
        text: `ABV: ${beer.abv}`
    }))
    beerDetail.append($("<div>", {
        class: "stats",
        text: `IBU: ${beer.ibu}`
    }))
    beerDetail.append($("<div>", {
        class: "description",
        text: `${beer.description}`
    }))
    beerDetail.append($("<div>", {
        text: `Food Pairings: ${beer.food_pairing.join(", ")}`
    }))

    let listLink = $('<a href="BeerList.html">Back To List</a>')
    beerDetail.append(listLink);
}