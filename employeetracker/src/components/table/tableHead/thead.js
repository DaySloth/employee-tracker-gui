import React from 'react';
import './thead.css';

function renderSortBtn(sort, handleSortChange){
    if(sort === "ascending"){
        return <i className="fas fa-caret-up" onClick={handleSortChange}></i>;
    } else if (sort === "descending") {
        return <i className="fas fa-caret-down" onClick={handleSortChange}></i>
    } else {
        return;
    }
};


function TableHead(props) {
    return (
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th onClick={props.handleSortChange} className="cursorHover">DOB {renderSortBtn(props.sort)}</th>
            </tr>
        </thead>
    )

};

export default TableHead;