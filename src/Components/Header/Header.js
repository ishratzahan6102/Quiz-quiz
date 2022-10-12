import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
            <img src='favicon.ico' alt=''/>
            <span>Quiz-quiz</span>
            </div>
            <div className="navbar-list">
            <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to='/topics'>Topics</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to='/chart'>Chart</NavLink>
            <NavLink className={({isActive}) => isActive ? "active" : "inActive"} to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;