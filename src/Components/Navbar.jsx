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
    const [bgColor, setBgColor] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        if (location.pathname === '/') {
            setBgColor('var(--color-bg)'); 
        } else if (location.pathname === '/Contact') {
            setBgColor('var(--color-bg-gray)'); 
        } else {
            setBgColor('transparent'); 
        }

        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <header style={{ backgroundColor: bgColor }}>
            <div id="container-1" className="container nav">
                <Link id="logo" to="/" aria-label="To Mainpage">
                    <img className="show-light" src={Logotype} alt="Silicon Logotype" />
                    <img className="show-dark" src={Logotypedark} alt="Silicon Logotype Dark" />
                </Link>
                <nav
                    id="main-menu"
                    className={`navbar ${isMenuOpen ? 'show' : 'hide'}`}
                    aria-label="main navigation"
                >
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

