// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, className = '', type = 'button', variant = 'primary' }) => {
    
    const buttonClass = variant === 'secondary' ? 'btn-secondary' : variant === 'contact' ? 'btn-contact' : 'btn-primary';

    return (
        <button 
            type={type}
            className={`${buttonClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
