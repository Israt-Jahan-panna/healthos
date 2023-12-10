import React from 'react';
import NavBar from '../../Compunets/Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;