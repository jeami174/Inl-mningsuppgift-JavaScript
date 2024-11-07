import React, { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';
import './DarkModeSwitch.css'; // Importera CSS för DarkModeSwitch

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <div className="darkmode-toggle">
            <p>Dark Mode</p>
            <ToggleButton
                id="darkmode-switch"
                checked={isDarkMode}
                onChange={handleDarkModeToggle}
            />
        </div>
    );
};

export default DarkModeSwitch;
