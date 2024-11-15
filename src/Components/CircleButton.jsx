import React from 'react';
import '../Styles/CircleButton.css';

const CircleButton = ({ onClick, className = '', children }) => {
    return (
        <button 
            className={`btn-cirkel ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CircleButton;

