import React from 'react';

function SearchBar (props) {
    return <input type="text" onChange={props.handleInputChange}></input>
};

export default SearchBar;