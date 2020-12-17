import React from 'react';
import TableHead from './tableHead/thead.js';
import TableBody from './tableBody/tbody.js';
import './table.css';

function Table(props) {
    return (
        <div>
            <table>
                <TableHead sort={props.sort} handleSortChange={props.handleSortChange}/>
                <TableBody employees={props.employees} />
            </table>
        </div>
    )
};

export default Table;