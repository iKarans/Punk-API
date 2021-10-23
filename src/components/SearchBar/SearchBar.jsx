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
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" onChange={handleLetterInput}/>
        </div>
    )
}

export default SearchBar