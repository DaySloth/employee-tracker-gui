import React from 'react';

function Table(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>{props.search}</th>
                </tr>
            </table>
        </div>
    )
};

export default Table;