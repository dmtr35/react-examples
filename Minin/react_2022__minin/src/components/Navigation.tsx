import React from 'react'
import {Link} from 'react-router-dom'



function Navigation() {
    return (
        <nav className='flex justify-between items-center h-[70px] px-5 shadow-md bg-gray-500 text-white'>
            <h3 className='font-bold' >Github Search</h3>

            <span>
                <Link to="/" className='mr-2'>Home2</Link>
                <Link to="/favourites">Favourites2</Link>
            </span>
        </nav>
    )
}


export default Navigation