import React, { useState, useEffect } from 'react';
import mobile from '../Images/frontmobile.png'; 
import desktop from '../Images/frontimglarge.png'; 

const Homepage = () => {

    const imageUrl = useWindowWidth() >= 900 ? desktop : mobile;

    return (

        <div className="front-wrap">
                <img className="front-img" alt="Welcome to my website" src={imageUrl} />      
        </div>  
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default Homepage; 