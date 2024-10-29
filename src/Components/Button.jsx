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
    const buttonClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

    if (href) {
        return (
            <a 
                href={href}
                className={`${buttonClass} ${className}`}
                aria-role="button"
            >
                {icon && <img src={icon} alt="" className="button-icon" />} 
                {children}
            </a>
        );
    }

    return (
        <button 
            type={type}
            className={`${buttonClass} ${className}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" className="button-icon" />} 
            {children}
        </button>
    );
};

export default Button;
