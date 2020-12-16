import React from 'react';

function SearchBar (props) {
    return (
        <div>
            <label>Filter by name: </label>
            <input type="text" name="search" onChange={props.handleInputChange}></input>
        </div>
    )
    
};

export default SearchBar;