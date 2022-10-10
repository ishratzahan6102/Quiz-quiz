import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/chart'>Chart</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    );
};

export default Header;