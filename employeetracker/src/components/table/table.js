import React from 'react';
import TableHead from './tableHead/thead.js';
import TableBody from './tableBody/tbody.js';

function Table(props) {
    return (
        <div>
            <table>
                <TableHead />
                <TableBody employees={props.employees} />
            </table>
        </div>
    )
};

export default Table;