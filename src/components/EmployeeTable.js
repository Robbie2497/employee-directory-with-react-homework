import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { TableRow } from "./TableRow";
import { TableHead } from "./TableHead";
import StateDropDown from "./StateOptions";

const items = [

    { label: 'ALABAMA', value: 'ALABAMA' },
    { label: "ALASKA", value: 'ALASKA' },
    { label: "ARIZONA", value: 'ARIZONA' },
    { label: "ARKANSAS", value: 'ARKANSAS' },
    { label: "CALIFORNIA", value: 'CALIFORNIA' },
    { label: "COLORADO", value: 'COLORADO' },
    { label: "CONNECTICUT", value: 'CONNECTICUT' },
    { label: "DELAWARE", value: 'DELAWARE' },
    { label: "FLORIDA", value: 'FLORIDA' },
    { label: "GEORGIA", value: 'GEORGIA' },
    { label: "HAWAII", value: 'HAWAII' },
    { label: "IDAHO", value: 'IDAHO' },
    { label: "ILLINOIS", value: 'ILLINOIS' },
    { label: "INDIANA", value: 'INDIANA' },
    { label: "IOWA", value: 'IOWA' },
    { label: "KANSAS", value: 'KANSAS' },
    { label: "KENTUCKY", value: 'KENTUCKY' },
    { label: "LOUISIANA", value: 'LOUISIANA' },
    { label: "MAINE", value: 'MAINE' },
    { label: "MARYLAND", value: 'MARYLAND' },
    { label: "MASSACHUSETTS", value: 'MASSACHUSETTS' },
    { label: "MICHIGAN", value: 'MICHIGAN' },
    { label: "MINNESOTA", value: 'MINNESOTA' },
    { label: "MISSISSIPPI", value: 'MISSISSIPPI' },
    { label: "MISSOURI", value: 'MISSOURI' },
    { label: "MONTANA", value: 'MONTANA' },
    { label: "NEBRASKA", value: 'NEBRASKA' },
    { label: "NEVADA", value: 'NEVADA' },
    { label: "NEW HAMPSHIRE", value: 'NEW HAMPSHIRE' },
    { label: "NEW JERSEY", value: 'NEW JERSEY' },
    { label: "NEW MEXICO", value: 'NEW MEXICO' },
    { label: "NEW YORK", value: 'NEW YORK' },
    { label: "NORTH CAROLINA", value: 'NORTH CAROLINA' },
    { label: "NORTH DAKOTA", value: 'NORTH DAKOTA' },
    { label: "OHIO", value: 'OHIO' },
    { label: "OKLAHOMA", value: 'OKLAHOMA' },
    { label: "OREGON", value: 'OREGON' },
    { label: "PENNSYLVANIA", value: 'PENNSYLVANIA' },
    { label: "RHODE ISLAND", value: 'RHODE ISLAND' },
    { label: "SOUTH CAROLINA", value: 'SOUTH CAROLINA' },
    { label: "SOUTH DAKOTA", value: 'SOUTH DAKOTA' },
    { label: "TENNESSEE", value: 'TENNESSEE' },
    { label: "TEXAS", value: 'TEXAS' },
    { label: "UTAH", value: 'UTAH' },
    { label: "VERMONT", value: 'VERMONT' },
    { label: "VIRGINIA", value: 'VIRGINIA' },
    { label: "WASHINGTON", value: 'WASHINGTON' },
    { label: "WEST VIRGINIA", value: 'WEST VIRGINIA' },
    { label: "WISCONSIN", value: 'WISCONSIN' },
    { label: "WYOMING", value: 'WYOMING' }
]




const Table = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        API.getUsers()
            .then(data => {
                setUsers(data.data.results)
            })
    }, [])

    useEffect(() => console.log(users), [users]);

    function sort() {
        let usersCopy = [...users]
        usersCopy.sort(function (a, b) {
            return a.dob.age - b.dob.age;
        });
        setUsers(usersCopy);
        console.log(users);

    }






    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-3">
                <button className="btn btn-secondary" onClick={sort} >Click here to sort by age</button>
                </div>
                <div className="col-sm-3">
                    <StateDropDown title="Filter by state" items={items} />
                </div>
            </div>


            <table>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    {users.map(user => <TableRow key={user.id.value} {...user} />)}
                </tbody>
            </table>
            </div>

    )
}


export default Table;