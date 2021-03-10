function getUsers() {

    return fetch('https://randomuser.me/api/?results=100', {
        method: "GET"
    })
}

export default getUsers;