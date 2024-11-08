import React from 'react';
import './InfoBox.css';
import arrowRightPurple from '../Images/icons/arrowrightpurple.svg';

const InfoBox = ({ icon, title, description, showButton, buttonText }) => {
    return (
        <div className="info-box">
            <div className="info-icon">
                <img src={icon} alt={`${title} icon`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {showButton && (
                <button className="info-box-button">
                    {buttonText || 'Learn More'}
                    <img src={arrowRightPurple} alt="Arrow right icon" className="arrowicon" />
                </button>
            )}
        </div>
    );
};

export default InfoBox;







