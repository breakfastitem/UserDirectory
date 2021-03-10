import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable(props) {

    console.log(props.users);

    let propsJSX = <UserRow />;
    let id = 0;
    if (props.users !== undefined) {
        propsJSX = props.users.map(user => {
            id++;
            return <UserRow key={id} age={user.dob.age} first={user.name.first} last={user.name.last} city={user.location.city} />
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {propsJSX}
            </tbody>

        </table>
    );
}

export default UserTable;