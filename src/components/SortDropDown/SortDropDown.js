import React from "react";
import "./styles.css";

function SortDropDown(){
    return(
        <div className="dropdown">
            <button className="drop-button">FirstName</button>
            <div className="drop-content">
                <p>First Name</p>
                <p>Last Name</p>
                <p>Job</p>
            </div>
        </div>
    );
}

export default SortDropDown;