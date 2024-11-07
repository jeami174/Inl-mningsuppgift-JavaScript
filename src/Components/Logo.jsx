import React from 'react';

const Logo = ({ isDarkMode, lightSrc, darkSrc, altText = 'Logotype' }) => {
    return (
        <a href="index.html" aria-label="To Mainpage">
            <img
                className={isDarkMode ? 'show-dark' : 'show-light'}
                src={isDarkMode ? darkSrc : lightSrc}
                alt={altText}
            />
        </a>
    );
};

export default Logo;
