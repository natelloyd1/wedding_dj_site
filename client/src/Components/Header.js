import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../Images/pastelpinklarge.png'; 

function Header ()  {

return(
    <header> 
        <NavLink exact to="/">
        <img src={logo} alt='wedding dj logo' />
        </NavLink>
        <nav>
            <ul>
                <NavLink exact className="link" to='/' activeClassName="activeLink">
                    Home
                </NavLink>
                <NavLink exact className="link" to='/listen' activeClassName="activeLink">
                    Listen
                </NavLink>
                <NavLink exact className="link" to='/reviews' activeClassName="activeLink">
                    Reviews
                </NavLink>
                <NavLink exact className="link" to='/faq' activeClassName="activeLink">
                    FAQ
                </NavLink>
                <NavLink exact className="link" to='/contact' activeClassName="activeLink">
                    Contact
                </NavLink>
            </ul>
        </nav>
    </header>
    )
}

export default Header; 