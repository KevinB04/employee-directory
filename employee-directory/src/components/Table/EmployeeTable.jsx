import axios from "axios";
import React, { useEffect } from "react";

const EmployeeTable = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <tbody>
                    <thead>
                    <tr>
                        <th scope>Image</th>
                        <th scope>Name</th>
                        <th scope>Phone</th>
                        <th scope>Email</th>
                        <th scope>DOB</th>
                    </tr>
                    </thead>
                    </tbody>
                    {props.users.map(user => {
                        return (
                            <tr key={user.email}>{user.image}</tr>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

// const EmployeeTable = (props) => {
//     return (
//         <div>
//         <tr>
//             <th scope>Image</th>
//             <th scope>Name</th>
//             <th scope>Phone</th>
//             <th scope>Email</th>
//             <th scope>DOB</th>
//         </tr>
//         {props.users.map(user => {
//             return  (
//                 <tr key={user.email}>{user.image}</tr>
//             )
//         })}
//         </div>
//     );
// };



export default EmployeeTable;