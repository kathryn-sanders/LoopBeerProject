$(document).ready(() => {

    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json()) //we need second .then because response.json returns a promise 
    .then((jsonData) => {
        console.log(jsonData)
        jsonData.forEach(item => { 
            CreateATile(item)
        });
    });
});

function CreateATile(beer){
    let beerList = $(".beer-list-grid");

    // let newBeerTile = $('<div class="beer-tile">')
    let newBeerTile = $(`<a class="beer-tile" href="beerDetail.html?id=${beer.id}">`)
    beerList.append(newBeerTile)

    newBeerTile.append($('<div>',{
        class: "beer-name",
        text: `${beer.name}`
    }))

    newBeerTile.append($('<img>', {
        class:"beer-img",
        src: `${beer.image_url}`
    }))

    newBeerTile.append($('<div>',{
        class: "beer-description",
        text:`${beer.description}`
    }))
}