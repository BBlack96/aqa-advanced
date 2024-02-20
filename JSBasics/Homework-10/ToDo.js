export default class TodoController {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async fetchTodoById(id){
        const response = await fetch(`${this._baseUrl}/todos/${id}`)
        return response.json()
    }

    get baseUrl() {
        return this._baseUrl;
    }

    set baseUrl(value) {
        this._baseUrl = value;
    }
}
