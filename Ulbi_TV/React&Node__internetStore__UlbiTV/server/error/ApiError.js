
// статические функции это функции которые можно вызывать без создания обьекта



export default class ApiError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) {
        return new ApiError(404, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static farbidden(message) {
        return new ApiError(403, message)
    }
}



