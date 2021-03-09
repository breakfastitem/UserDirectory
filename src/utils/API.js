import axios from "axios";

function getUsers() {

    fetch('https://randomuser.me/api/', {
        method: "GET"
    })
    .then(response => response.json())
    .then(data=>{
        console.log("Success: "+data);
    })
    .catch(err=>{
        console.log("Error: "+err);
    })

}

export default getUsers;