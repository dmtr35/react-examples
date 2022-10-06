import React, { useContext, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Error from '../pages/Error'
import { pablicRoutes, privateRoutes } from '../router'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'


const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" />} />


                <Route path="/about" element={<About />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/posts/:id" element={<PostIdPage />} />


                <Route path="/error" element={<Error />} />
            </Routes>

            : <Routes>{pablicRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />

            )}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>

    )
}




export default AppRouter
