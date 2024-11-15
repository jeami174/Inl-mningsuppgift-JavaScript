import React from 'react';
import '../Styles/Socialmedia.css';

const Socialmedia = ({ icon, url }) => {
    return (
        <div className="socialmedia-box">
            <a href={url} target="_blank" rel="noopener noreferrer" className="socialmedia-icon">
                <img src={icon} alt="Social media icon" />
            </a>
        </div>
    );
};

export default Socialmedia;
