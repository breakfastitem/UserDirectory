import React from "react";
import UserRow from "../UserRow/UserRow";

function UserTable(){
 return(
     <table>
         <tr>
            <th>FirstName</th>
            <th>Last Name</th>
            <th>Job</th>
        </tr>
         {/*Place table row information*/}
         <tr>
            <UserRow/>
        </tr>
    </table>
 );
}

export default UserTable;