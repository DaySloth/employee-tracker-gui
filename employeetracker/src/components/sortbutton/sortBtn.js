import React from 'react';
import './sortBtn.css';

function SortBtn (props) {
    return(
        <div className="float-right">
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