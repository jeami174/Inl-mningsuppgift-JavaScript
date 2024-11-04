import React from 'react';
import './InfoBox.css';

const InfoBox = ({ icon, title, description, iconBackgroundColor, iconBorderRadius }) => {
    return (
        <div className="info-box">
            <div
                className="info-icon"
                style={{
                    backgroundColor: iconBackgroundColor || 'var(--color-icon-bg)',
                    borderRadius: iconBorderRadius || '8px'
                }}
            >
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default InfoBox;


