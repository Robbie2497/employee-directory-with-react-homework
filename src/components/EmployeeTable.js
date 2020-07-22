import React, { useEffect, setUsers } from "react";
import API from "../utils/API";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";



const Table = () => {
    const [users, setUsers] = React.useState([]);


    useEffect(() => {
        API.getUsers()
        .then(data => {
            setUsers(data.results)
        })
    }, [])

    useEffect(() => console.log(users), [users]);



    
    return (
        <table>
            <thead>
                    <TableHead />
            </thead>
                <tbody>
                        {users.map(user => <TableRow {...user} />)}
                </tbody>
        </table>
    )
}


export default Table;