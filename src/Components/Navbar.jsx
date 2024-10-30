import React, { useState, useEffect } from 'react';
import MobileButton from './MobileButton';
import ToggleButton from './ToggleButton';
import Button from './Button'; // Importera din Button-komponent
import Logotype from '../Images/logos/Logotype.svg';
import Logotypedark from '../Images/logos/Logotypedark.svg';
import UserIcon from '../Images/icons/User.svg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const hasSetDarkMode = localStorage.getItem('darkmode');
        if (hasSetDarkMode === null) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        } else if (hasSetDarkMode === 'on') {
            enableDarkMode();
        } else if (hasSetDarkMode === 'off') {
            disableDarkMode();
        }
    }, []);

    const handleDarkModeToggle = () => {
        if (!isDarkMode) {
            enableDarkMode();
            localStorage.setItem('darkmode', 'on');
        } else {
            disableDarkMode();
            localStorage.setItem('darkmode', 'off');
        }
    };

    const enableDarkMode = () => {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    };

    const disableDarkMode = () => {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="main-nav" aria-label="main navigation">
            <div className="container">
                <Link to="/" aria-label="To Mainpage">
                    <img
                        className={isDarkMode ? 'show-dark' : 'show-light'}
                        src={isDarkMode ? Logotypedark : Logotype}
                        alt="Silicon Logotype"
                    />
                </Link>
                <div className="darkmode-toggle">
                    <p>Dark Mode</p>
                    <ToggleButton
                        checked={isDarkMode}
                        onChange={handleDarkModeToggle}
                    />
                </div>
                <MobileButton
                    onClick={handleMenuToggle}
                    className={isMenuOpen ? 'open' : ''}
                    aria-controls="main-menu"
                    aria-expanded={isMenuOpen}
                    aria-label="toggle navigation"
                />
                <ul id="main-menu" className={`main-menu ${isMenuOpen ? '' : 'hide'}`}>
                    <li>
                        <NavLink className="nav-link" to="/">Features</NavLink>
                    </li>
                    <li>
                        <NavLink className="Contact" to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <Button 
                            variant="primary"
                            className="btn-primary"
                            aria-label="Sign in or up"
                            icon={UserIcon}
                            href="#"
                        >
                            Sign in / up
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

