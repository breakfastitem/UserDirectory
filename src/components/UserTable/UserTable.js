import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable() {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Job</th>
            </tr>
            {/*Place table row information*/}
            <UserRow />

        </table>
    );
}

export default UserTable;