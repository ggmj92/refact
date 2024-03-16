import React from 'react';

function EmployeeCard({ employee }) {
    return (
        <div className='envoltura'>
            <p>Nombre: {employee.name}</p>
            <p>Apellidos: {employee.lastName}</p>
            <p>Hobbies: {employee.hobbies.join(', ')}</p>
            <p>Edad: {employee.age}</p>
        </div>
    )
}

export default EmployeeCard;