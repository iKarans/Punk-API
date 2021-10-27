import React from 'react'
import Beer from "../Beer/Beer"
import "./BeerTiles.scss"

const BeerTiles = (props) => {
    const {beers, isClassic, searchWord, phLevel, abvLevel, addToFavourites, firebaseFavourites, deleteFavourites}= props;
    return (
        <section className="beer-tiles">
            {beers && (
                beers.filter((beer) => {
                    return (isClassic ? parseInt(beer.first_brewed.slice(3)) < 2010 : true) && beer.name.toLowerCase().includes(searchWord.toLowerCase()) && beer.image_url && (phLevel === 3 ? true : beer.ph === phLevel) && (abvLevel === 0 ? true : beer.abv <= abvLevel && beer.abv > abvLevel - 1)
                }).map((beer, index) => {
                    return (
                        <Beer image_url={beer.image_url} name={beer.name} tagline={beer.tagline} description={beer.description} abv={beer.abv} ph={beer.ph} addToFavourites={addToFavourites} firebaseFavourites={firebaseFavourites} deleteFavourites={deleteFavourites} key={beer.name + index} />
                    )
                    })
            )}
        </section>
    )
}

export default BeerTiles
