import 'dotenv/config'
import express from 'express'
import fileUpload from 'express-fileupload'
import sequelize from "./db.js"
import { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand } from "./models/models.js"
import cors from 'cors'
import router from "./routes/index.js"
import errorHandler from "./middleware/ErrorHandlineMiddleware.js"
import path from 'path'
const __dirname = path.resolve()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// обработка ошибок, последний middleware
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()                     // подключение к базе данных
        await sequelize.sync()                             // сверяет состояние базы данных с схемой данных
        app.listen(PORT, () => console.log(`Server working, PORT: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}



start()


