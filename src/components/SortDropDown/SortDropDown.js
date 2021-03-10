import React from "react";
import "./styles.css";

function SortDropDown({ type, setType }) {



    return (
        <div className="dropdown">
            <p> Filter By {type}</p>
            <button className="drop-button" onClick={(e) => {
                e.preventDefault();
                setType("first");
            }}>First Name</button>
            <button className="drop-button" onClick={(e) => {
                e.preventDefault();
                setType("last");
            }}>Last Name</button>
            <button className="drop-button" onClick={(e) => {
                e.preventDefault();
                setType("age");
            }}>Age</button>
        </div>
    );
}

export default SortDropDown;