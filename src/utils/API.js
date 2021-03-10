function getUsers() {

    fetch('https://randomuser.me/api/?results=100', {
        method: "GET"
    })
      
}

export default getUsers;