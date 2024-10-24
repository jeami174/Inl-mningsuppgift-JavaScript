import React, { useState, useEffect } from 'react';
import MobileButton from './MobileButton'; // Importera din MobileButton-komponent
import ToggleButton from './ToggleButton'; // Importera din ToggleButton-komponent
import Logotype from '../Images/logos/Logotype.svg';
import Logotypedark from '../Images/logos/Logotypedark.svg';
import MenuButton from '../Images/Button - Toggle navigation.svg';
import UserIcon from '../Images/icons/User.svg';
import './Navbar.css'; // Använd en separat CSS-fil för att hålla din styling

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Kontrollera om dark mode är inställt i localStorage
        const hasSetDarkMode = localStorage.getItem('darkmode');
        if (hasSetDarkMode === null) {
            // Använd systeminställningar om det inte är satt
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
                <a href="index.html" aria-label="To Mainpage">
                    <img
                        className={isDarkMode ? 'show-dark' : 'show-light'}
                        src={isDarkMode ? Logotypedark : Logotype}
                        alt="Silicon Logotype"
                    />
                </a>
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
                >
                    <img src={MenuButton} alt="Menu button" />
                </MobileButton>
                <ul id="main-menu" className={`main-menu ${isMenuOpen ? '' : 'hide'}`}>
                    <li>
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li>
                        <a className="btn-primary" href="#" aria-label="Sign in or up">
                            <img src={UserIcon} alt="User Icon" />
                            <span>Sign in / up</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

