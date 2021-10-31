import React from 'react';
import "./CarouselBeer.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CarouselBeer = (props) => {
    const { image_url, name, tagline, abv, ph, addToFavourites, firebaseFavourites, deleteFavourites, id, getFavourites} = props;
    console.log(id);
    const handleClickFavourites = () => {
        if(firebaseFavourites.includes(name)){
            deleteFavourites(name);
        } else {
            addToFavourites(name);
        }
        getFavourites();
    }
    return (
        <article className="beer-tile">
            <img src={image_url} alt={name} className="beer-tile__img" />
            <h3 className="beer-tile__name">{name}</h3>
            <p className="beer-tile__tagline">{tagline}</p>
            <p  className="beer-tile__ph">pH: {ph}</p>
            <p className="beer-tile__abv">ABV: {abv}</p>
            <Link to={`/favourites/${id}`}>
            <button className="beer-tile__more-btn">Find Out More...</button>
            </Link>
            <FontAwesomeIcon icon={faHeart} onClick={handleClickFavourites} className={firebaseFavourites && (firebaseFavourites.find(beer => beer === name)) ? "beer-tile__favourited" : "beer-tile__notfavourited"} />
        </article>
    )
}

export default CarouselBeer
