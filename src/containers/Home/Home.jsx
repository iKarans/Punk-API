import React from 'react'
import Banner from '../../components/Banner/Banner'
import BeerTiles from '../../components/BeerTiles/BeerTiles'

const Home = (props) => {
    const {beers, isClassic, searchWord, phLevel, abvLevel, authUser, addToFavourites, firebaseFavourites, deleteFavourites, getFavourites} = props;
    return (
        <div>
            <Banner authUser={authUser}/>
            <BeerTiles beers={beers} isClassic={isClassic} searchWord={searchWord} phLevel={phLevel} abvLevel={abvLevel} addToFavourites={addToFavourites} firebaseFavourites={firebaseFavourites} deleteFavourites={deleteFavourites} getFavourites={getFavourites}/>
        </div>
    )
}

export default Home