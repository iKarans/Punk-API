import React from 'react'
import "./Banner.scss"
import lineOfBeers from "../../assets/images/line-of-beers.png"

const Banner = (props) => {
    const {authUser} = props;
    return (
        <div className="banner">
            <div className="banner__img-container">
                <img src={lineOfBeers} alt="beers in a line" className="banner__img-container__img"/>
            </div>
            <div className="banner__content-container">
                <h2 className="banner__text">Thirsty {authUser ? authUser.displayName.split(" ")[0] : "_____"}?</h2>
                <p>Explore Our Range</p>
            </div>
        </div>

    )
}

export default Banner