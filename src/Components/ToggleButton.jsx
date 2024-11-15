import React from 'react';
import '../Styles/ToggleButton.css';

const ToggleButton = ({ checked, onChange, className = '' }) => {
    return (
        <label className={`toggle ${className}`}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider"></span>
        </label>
    );
};

export default ToggleButton;

