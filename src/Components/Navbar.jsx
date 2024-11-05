// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileButton from './MobileButton';  // Import MobileButton
import DarkModeSwitch from './DarkModeSwitch';
import Button from './Button';
import Logotype from '../Images/logos/Logotype.svg';
import Logotypedark from '../Images/logos/Logotypedark.svg';
import UserIcon from '../Images/icons/User.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <header>
            <div id="container-1" className="container nav">
                <Link id="logo" to="/" aria-label="To Mainpage">
                    <img className="show-light" src={Logotype} alt="Silicon Logotype" />
                    <img className="show-dark" src={Logotypedark} alt="Silicon Logotype Dark" />
                </Link>

                {/* Navigeringsmenyn visas endast på skärmar >= 992px */}
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
