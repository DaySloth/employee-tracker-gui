import React from 'react';

function SortBtn (props) {
    return(
        <div>
            <label>Sort by DOB:</label>
            <select onChange={props.handleSortChange} name="sort">
                <option></option>
                <option>Ascending</option>
                <option>Decending</option>
            </select>
        </div>
    )
};

export default SortBtn;