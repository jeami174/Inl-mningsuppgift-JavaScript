// InfoBox.jsx
import React from 'react';
import './InfoBox.css';

const InfoBox = ({ icon, title, description }) => {
    return (
        <div className="info-box">
            <div className="info-icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default InfoBox;
