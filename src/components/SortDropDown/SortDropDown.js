import React from "react";
import "./styles.css";

function SortDropDown(){
    return(
        <div class="dropdown">
            <button class="drop-button">FirstName</button>
            <div class="drop-content">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Job</p>
            </div>
        </div>
    );
}

export default SortDropDown;