// Navbar.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileButton from './MobileButton';
import DarkModeSwitch from './DarkModeSwitch';
import Button from './Button';
import Logotype from '../Images/logos/Logotype.svg';
import Logotypedark from '../Images/logos/Logotypedark.svg';
import UserIcon from '../Images/icons/User.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState(''); // State för bakgrundsfärg
    const navigate = useNavigate();
    const location = useLocation(); // Hämta aktuell route

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        // Uppdatera bakgrundsfärgen beroende på vilken sida som är aktiv
        if (location.pathname === '/') {
            setBgColor('var(--color-bg)'); // Bakgrundsfärg för Home
        } else if (location.pathname === '/Contact') {
            setBgColor('var(--color-bg-gray)'); // Bakgrundsfärg för Contact
        } else {
            setBgColor('transparent'); // Standardfärg för övriga sidor
        }
    }, [location.pathname]);

    return (
        <header style={{ backgroundColor: bgColor }}>
            <div id="container-1" className="container nav">
                <Link id="logo" to="/" aria-label="To Mainpage">
                    <img className="show-light" src={Logotype} alt="Silicon Logotype" />
                    <img className="show-dark" src={Logotypedark} alt="Silicon Logotype Dark" />
                </Link>
                <nav id="main-menu" className={`navbar ${isMenuOpen ? 'show' : ''}`} aria-label="main navigation">
                    <NavLink className="nav-link" to="/">Features</NavLink>
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    <Button 
                        id="auth-signin" 
                        variant="primary"
                        className="btn-primary" 
                        aria-label="Sign in or up"
                        icon={UserIcon}
                        onClick={handleButtonClick}
                    >
                        <span>Sign in / up</span>
                    </Button>
                </nav>

                <DarkModeSwitch />

                <MobileButton 
                    onClick={handleMenuToggle} 
                    isOpen={isMenuOpen} 
                    className={isMenuOpen ? 'show' : ''}
                />
            </div>
        </header>
    );
};

export default Navbar;
