import jwt from "jsonwebtoken"



export default function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ mesage: "Пользователь не авторизован" })
            }
            const decoder = jwt.verify(token, process.env.SECRET_KEY)
            if (decoder.role !== role) {
                return res.status(403).json({ mesage: "У вас нет доступа" })
            }
            req.user = decoder
            next()
        } catch (e) {
            res.status(401).json({ mesage: "Пользователь не авторизован" })
        }
    }
}
















