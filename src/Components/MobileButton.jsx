// MobileButton.jsx
import React from 'react';
import './MobileButton.css';
import Hamburger from '../Images/Button - Toggle navigation.svg';

const MobileButton = ({ onClick, isOpen, className = '' }) => {
    return (
        <button 
            className={`btn-mobile ${className}`}
            onClick={onClick}
            aria-expanded={isOpen}
        >
            <img src={Hamburger} alt="Menu button" />
        </button>
    );
};

export default MobileButton;
