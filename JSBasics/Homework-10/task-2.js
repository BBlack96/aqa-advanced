function fetchToDoByID(){
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .catch((e)=> console.log(e))
}

function fetchUsersByID(){
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=> res.json())
        .catch((e) => console.log(e))

}

Promise.all([
    fetchToDoByID(),
    fetchUsersByID()
]).then(value => console.log(value))

Promise.race([
    fetchToDoByID(),
    fetchUsersByID()
]).then(value => console.log(value))

