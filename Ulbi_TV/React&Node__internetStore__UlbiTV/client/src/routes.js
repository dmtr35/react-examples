import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import DevicePage from './pages/DevicePage'

export const authRoutes = [
]


export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Element: Admin
    },
    {
        path: BASKET_ROUTE,
        Element: Basket
    },
    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Element: DevicePage
    }
]















