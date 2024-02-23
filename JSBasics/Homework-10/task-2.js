function fetchToDoByID(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

function fetchUsersByID(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

Promise.all([
  fetchToDoByID(1),
  fetchUsersByID(1),
]).then((value) => console.log(value));

Promise.race([
  fetchToDoByID(2),
  fetchUsersByID(2),
]).then((value) => console.log(value));
