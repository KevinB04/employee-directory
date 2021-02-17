import React from "react";


const EmployeeTable = (props) => {
    return (
        <div>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        </tr>
        {props.users.map(user => {
            return  (
                <tr key={user.email}>{user.image}</tr>
            )
        })}
        </div>
    );
};



export default EmployeeTable;