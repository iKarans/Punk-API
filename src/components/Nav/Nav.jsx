import React from 'react';
import "./Nav.scss";

import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import LoginButton from '../LoginButton/LoginButton';

import logo from "../../assets/images/logo.png";

import {
    Link
  } from "react-router-dom";



const Nav = (props) => {
    const { searchHandler, handleIsClassic, phLevel, handlePhLevel, abvLevel, handleAbvLevel, authUser, handleLogin, handleLogout} = props;

    return (
        <header className="header">
            <img src={logo} alt="brewdog-logo" className="header__logo" />
        <nav className="header__nav">
            <ul className="header__nav__links">
                <Link to="/" className="header__nav__links__link">Home</Link>
                <Link to="/favourites" className="header__nav__links__link">Favourites</Link>
            </ul>
        </nav>
        <SearchBar searchHandler={searchHandler} />
        <Filter handleIsClassic={handleIsClassic} phLevel={phLevel} handlePhLevel={handlePhLevel} abvLevel={abvLevel} handleAbvLevel={handleAbvLevel} />
        <LoginButton handleLogin={handleLogin} handleLogout={handleLogout} authUser={authUser} />
    </header>
        
    )
}

export default Nav