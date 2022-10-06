import ApiError from "../error/ApiError.js"
import bcrypt from "bcrypt"
import { User, Basket } from "../models/models.js"
import jwt from "jsonwebtoken"

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )

}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        // console.log('email:', email);
        // console.log('password:', password);
        // console.log('role:', role);
        if (!email || !password) {
            return next(ApiError.badRequest('Некоретный email или password'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Такой пользователь уже зарегистрирован'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const basket = await Basket.create({ userId: user.id })
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }
    
    
    async login(req, res, next) {
        const { email, password } = req.body
        // console.log('email:', email);
        // console.log('password:', password);
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }
}



export default new UserController()













