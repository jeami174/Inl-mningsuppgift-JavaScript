import React, { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';
import '../Styles/DarkModeSwitch.css';

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

     // Effect that runs on component mount to initialize dark mode based on user preference or localStorage
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

    // Toggles dark mode on or off when the user interacts with the toggle button
    const handleDarkModeToggle = () => {
        if (!isDarkMode) {
            enableDarkMode();
            localStorage.setItem('darkmode', 'on');
        } else {
            disableDarkMode();
            localStorage.setItem('darkmode', 'off');
        }
    };

    // Enables dark mode by setting the state and adding the 'dark' class to the root element
    const enableDarkMode = () => {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    };

    // Disables dark mode by setting the state and removing the 'dark' class from the root element
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
