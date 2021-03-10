import React, { useState } from "react";
import SortDropDown from "../SortDropDown/SortDropDown";

function FilterForm({ filterHandler }) {

    const [value, setValue] = useState("");
    const [type, setType] = useState("first");

    return (
        
        <form>
            <input placeholder="filter" value={value} onChange={(event) => {
                setValue(event.target.value);
            }} id="filter">
            </input>
            <button onClick={(event) => {
                event.preventDefault();
                filterHandler(value.toLowerCase(), type)
            }}>Filter</button>

            <SortDropDown type={type} setType={setType}/>
    
        </form>

    );
}

export default FilterForm;