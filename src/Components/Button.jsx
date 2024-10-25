// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ 
    children, 
    onClick, 
    className = '', 
    type = 'button', 
    variant = 'primary', 
    href, 
    icon 
}) => {
    const buttonClass = variant === 'secondary' ? 'btn-secondary' : variant === 'contact' ? 'btn-contact' : 'btn-primary';

    // Om href finns, rendera en <a>-tagg
    if (href) {
        return (
            <a 
                href={href}
                className={`${buttonClass} ${className}`}
                aria-role="button"
            >
                {icon && <img src={icon} alt="" className="button-icon" />} {/* Rendera ikonen om den finns */}
                {children}
            </a>
        );
    }

    // Rendera som <button> om href inte finns
    return (
        <button 
            type={type}
            className={`${buttonClass} ${className}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" className="button-icon" />} {/* Rendera ikonen om den finns */}
            {children}
        </button>
    );
};

export default Button;
