import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;