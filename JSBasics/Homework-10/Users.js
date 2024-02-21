export default class UsersController {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async fetchUsersById(id){
        const response = await fetch(`${this._baseUrl}/users/${id}`)
        return response.json()
    }

    get baseUrl() {
        return this._baseUrl;
    }

    set baseUrl(value) {
        this._baseUrl = value;
    }
}


