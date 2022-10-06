import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from "../index"

const AppRouter = () => {
    const { user } = useContext(Context)
    console.log(user.isAuth);
    
    return (

        <Routes>
            {user.isAuth && authRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={<Element />} />
            )}
            {publicRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={<Element />} />
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
}


export default AppRouter



