import React from "react";

export const TableHead = (props) => {

    return (
        
        <tr>
            <td>{props.firstName} </td>
            <td>{props.lastName} </td>
            <td>{props.phoneNumber} </td>
            <td>{props.email} </td>
            <td>{props.picture} </td>
            </tr>
    )
}