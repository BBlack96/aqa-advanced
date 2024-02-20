async function fetchUsersByID(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

async function fetchToDoByID(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

Promise.all([
    fetchToDoByID(),
    fetchUsersByID()
]).then(value => console.log(value))

Promise.race([
    fetchToDoByID(),
    fetchUsersByID()
]).then(value => console.log(value))
