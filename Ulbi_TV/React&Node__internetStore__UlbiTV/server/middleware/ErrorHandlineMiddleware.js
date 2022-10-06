import ApiError from "../error/ApiError.js"



export default function (err, req, res, next) {
    if (err instanceof ApiError) {                   // если класс ошибки ApiError, то
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденая ошибка"})
}









