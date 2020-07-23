import React from "react";


export const TableRow = (props) => {

    return (
        <table class="table">
         
            <tbody>
                <tr>
                    <td>{props.name.first}</td>
                    <td>{props.name.last} </td>
                    <td>{props.dob.age}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td><img src={props.picture.medium} alt="" /> </td>
                </tr>
            </tbody>
        </table>


    )
}