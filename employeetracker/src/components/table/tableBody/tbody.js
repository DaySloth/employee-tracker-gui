import React from 'react';
import './tbody.css';

function TableBody(props) {
    return (
        <tbody>
            {props.employees.map(employee => {
                return (
                    <tr key={employee.id}>
                        <td><img src={employee.image} alt={`${employee.first_name}`}></img></td>
                        <td>{employee.first_name} {employee.last_name}</td>
                        <td><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
                        <td><a href={`tel:${employee.phone}`}>{employee.phone}</a></td>
                        <td>{employee.dob.toDateString()}</td>
                    </tr>
                )
            })}
        </tbody>
    )

};

export default TableBody;