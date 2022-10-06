import sequelize from "../db.js"
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
    // (тип поля числовой, первичный ключ будет автоинкрементироваться)
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // (тип поля строчный, уникальное значение)
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    // (тип поля строчный, по умолчанию делаем роль: "USER")
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketDevice = sequelize.define('basket_device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Device = sequelize.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },        // allowNull не может быть пустым
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.STRING, defaultValue: "0" },
    img: { type: DataTypes.STRING, allowNull: false }
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
})

const DeviceInfo = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

// Связываем модели друг с другом


User.hasOne(Basket)             // связь один к одному
Basket.belongsTo(User)          // корзина пренадлежит пользователю    

User.hasMany(Rating)             // один пользователь может иметь несколько оценок. (один ко многим)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasOne(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo,  {as: 'info'})       // одна запись Device в бд содержит много записей с характеристиками DeviceInfo
DeviceInfo.belongsTo(Device)     // для DeviceInfo (эта сущность принадлежит Device)


// вид связи между type и brand

Type.belongsToMany(Brand, { through: TypeBrand })
Brand.belongsToMany(Type, { through: TypeBrand })




export { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand }
// module.exports = { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand }
