import React from "react";

function UserRow({age,first,last,city}){
    return(
        <tr>
            <td>{first}</td>
            <td>{last}</td>
            <td>{city}</td>
            <td>{age}</td>
        </tr>
    );
}

export default UserRow;