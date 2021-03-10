import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable(props) {

    console.log(props.users);

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {/*Place table row information*/}
                <UserRow />
            </tbody>

        </table>
    );
}

export default UserTable;