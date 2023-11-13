import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <main className='container'>
            <div className='flex justify-between px-3 py-3 '>
                <h1>nike</h1>
                <div>
                    <ul className='flex justify-between gap-6'>
                        <li>
                            <Link>home</Link>
                        </li>
                        <li>
                            <Link>about</Link>
                        </li>
                        <li>
                            <Link>contact</Link>
                        </li>
                        <li>
                            <Link>cart</Link>
                        </li>
                    </ul>
                </div>
            </div>    
        </main>
    );
};

export default NavBar;
