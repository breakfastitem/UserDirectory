import React,{useState} from "react";

function FilterForm(props) {

    const [value,setValue] = useState("");

    return (
        <form>
        <input placeholder="filter" value={value} onChange={(event)=>{
            setValue(event.target.value);
        }} id="filter">
        </input>
        <button onClick={(event)=>{
            event.preventDefault();
            props.filterHandler(value.toLowerCase(),"first")
            }}>Filter</button>
        </form>
    );
}

export default FilterForm;