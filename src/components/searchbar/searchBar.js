import React from 'react';
import './searchBar.css';

function SearchBar (props) {
    return (
        <div className="float-left">
            <label>Filter by name: </label>
            <input type="text" name="search" onChange={props.handleInputChange}></input>
        </div>
    )
    
};

export default SearchBar;