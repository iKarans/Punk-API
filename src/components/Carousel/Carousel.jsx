import React, { useState } from 'react'
import "./Carousel.scss"

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

import Beer from "../Beer/Beer.jsx";

const Carousel = (props) => {
    const {beers, firebaseFavourites, addToFavourites, deleteFavourites, getFavourites} = props;

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        if (counter === firebaseFavourites.length - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
      };
    
      const handleDecrement = () => {
        if (counter === 0) {
          setCounter(firebaseFavourites.length - 1);
        } else {
          setCounter(counter - 1);
        }
      };

      let currentBeer;
      if(firebaseFavourites) {
        currentBeer = beers.find(beerObj => {
          return beerObj.name === firebaseFavourites[counter];
        })
      }

    return (
        <div className="carousel">
            <img
                src={leftArrow}
                alt="left arrow"
                onClick={handleDecrement}
                className="carousel__arrow carousel__arrow--left"
            />
            {firebaseFavourites.length ? 
            <Beer image_url={currentBeer.image_url} name={currentBeer.name} tagline={currentBeer.tagline} abv={currentBeer.abv} ph={currentBeer.ph} id={currentBeer.id} description={currentBeer.description} firebaseFavourites={firebaseFavourites} addToFavourites={addToFavourites} deleteFavourites={deleteFavourites} getFavourites={getFavourites}/> 
            : "You currently have no favorites."}
            <img
                src={rightArrow}
                alt="right arrow"
                onClick={handleIncrement}
                className="carousel__arrow carousel__arrow--right"
            />
    </div>
    )
}

export default Carousel