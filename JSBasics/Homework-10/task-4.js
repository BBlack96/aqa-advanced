import TodoController from "./ToDo.js"
import UsersController from "./Users.js"


const BASE_URL = 'https://jsonplaceholder.typicode.com'

const todoController = new TodoController(BASE_URL)
const usersController = new UsersController(BASE_URL)

Promise.all([
    todoController.fetchTodoById(1),
    usersController.fetchUsersById(1)
]).then(value => console.log(value))