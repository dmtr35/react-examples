import React, { useState } from 'react'
import { AboutPage } from '../pages/AboutPage'
import { ProductsPage } from '../pages/ProductsPage'
import { Link } from 'react-router-dom'




export function Navigation() {

    return (
        <nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
            <span className='font-bold'>React 2022</span>
            <span>
                <Link to='/' className='mr-2'>Products</Link>
                <Link to='/AboutPage'>About</Link>
            </span>

        </nav>
    )
}