async function fetchUsersByID(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

async function fetchToDoByID(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

Promise.all([
    fetchToDoByID(1),
    fetchUsersByID(1)
]).then(value => console.log(value))

Promise.race([
    fetchToDoByID(1),
    fetchUsersByID(1)
]).then(value => console.log(value))
