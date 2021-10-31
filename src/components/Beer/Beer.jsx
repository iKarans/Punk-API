import React, { useState } from 'react';
import "./Beer.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Beer = (props) => {
    console.log("Beer");
    const { image_url, name, tagline, description, abv, ph, addToFavourites, firebaseFavourites, deleteFavourites, getFavourites} = props;
    const [isClicked, setIsClicked] = useState(false);
    const handleMoreInfo = () => {
        setIsClicked(!isClicked);
    }
    const handleClickFavourites = () => {
        if(firebaseFavourites.includes(name)){
            deleteFavourites(name);
        } else {
            addToFavourites(name);
        }
        getFavourites();
    }
    const withoutDescripion = (
        <>
            <img src={image_url} alt={name} className="beer-tile__img" />
            <h3 className="beer-tile__name">{name}</h3>
            <p className="beer-tile__tagline">{tagline}</p>
            <p  className="beer-tile__ph">pH: {ph}</p>
            <p className="beer-tile__abv">ABV: {abv}</p>
            <button className="beer-tile__more-btn" onClick={handleMoreInfo}>Find Out More...</button>
        </>
    );

    const withDescripion = (
        <>
            <img src={image_url} alt={name} className="beer-tile__img" />
            <p className="beer-tile__description">{description}</p>
            <button className="beer-tile__more-btn" onClick={handleMoreInfo}>Find Out Less...</button>
        </>
    );

    return (
        <article className="beer-tile">
            {isClicked ? withDescripion : withoutDescripion}
            <FontAwesomeIcon icon={faHeart} onClick={handleClickFavourites} className={firebaseFavourites && (firebaseFavourites.find(beer => beer === name)) ? "beer-tile__favourited" : "beer-tile__notfavourited"} />
        </article>
    )
}

export default Beer;