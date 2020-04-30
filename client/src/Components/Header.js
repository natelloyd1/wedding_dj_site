import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../Images/pastelpinklarge.png'; 

function Header ()  {

return(
    <header> 
        <img src={logo} alt='wedding dj logo' />
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/listen'>
                    <li>Listen</li>
                </Link>
                <Link to='/reviews'>
                    <li>Reviews</li>
                </Link>
                <Link to='/faq'>
                    <li>FAQ</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    </header>
    )
}

export default Header; 