// MobileButton.jsx
import React from 'react';
import './MobileButton.css';

const MobileButton = ({ onClick, className = '' }) => {
    return (
        <button 
            className={`btn-mobile ${className}`}
            onClick={onClick}
        >
            {/* Lägg till eventuellt ikon eller innehåll här */}
        </button>
    );
};

export default MobileButton;
