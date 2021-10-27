import React from 'react';
import "./SearchBar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
    const { searchHandler } = props;
    const handleLetterInput = (event) => {
        searchHandler(event.target.value);
    }
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" onChange={handleLetterInput} className="search-bar__input"/>
            <FontAwesomeIcon icon={faSearch} className="search-bar__glass"/>
        </div>
    )
}

export default SearchBar