module.exports = class Router {
    constructor() {
        this.endpoint = {}
    }

    request(method = "GET", path, handler) {
        if (!this.endpoint[path]) { // проверка что такого endpoint еще нет
            this.endpoint[path] = {}
        }
        // /users [GET, POST, PUT] /posts [GET, POST, PUT, DELETE]
        const endpoint = this.endpoint[path]

        if (endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует маршрут`)
        }

        endpoint[method] = handler     // handler функция которая должна отрадатывать на этоот endpoint


    }
    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}






















