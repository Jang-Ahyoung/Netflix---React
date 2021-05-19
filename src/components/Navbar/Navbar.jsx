import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useHistory } from "react-router-dom";
function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) handleShow(true);
        else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'background'}`}>
            <div className='contents'>
                <img onClick={() => history.push("/")} className='logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix"></img>
                <img onClick={() => history.push("/profile")} className='profile' src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile"></img>
            </div>
        </div>
    )
}

export default Navbar;
