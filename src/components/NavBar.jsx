import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
    return (
        <main className='container '>
            <div className='flex items-center justify-between px-3 py-3 '>
               <Link to='/'> <h1 className='text-2xl font-semibold'>Nike</h1></Link>

                <ul className='flex justify-between gap-6'>
                    <li className='text-base font-semibold '>
                        <NavLink to='' className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li className='text-base font-semibold '>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li className='text-base font-semibold '>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    </li>
                    <li className='text-base font-semibold '>
                        <NavLink to='/cart' className={({ isActive }) => isActive ? "active" : ""}>Cart</NavLink>
                    </li>
                </ul>


                <div className='flex items-center gap-3'>
                   <Link to='/login'> <button className='py-2 border-4 px-9 rounded-3xl'>Login</button></Link>
                    <span className='text-xl'><FaCartShopping /></span>
                    
                </div>
            </div>
        </main>
    );
};

export default NavBar;
