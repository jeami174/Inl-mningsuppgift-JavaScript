import React from 'react';
import quoteIcon from '../Images/icons/iconquote.svg';
import starIcon from '../Images/icons/star.svg'; 
import starBlankIcon from '../Images/icons/starblank.svg';

const TestimonialCard = ({ author, jobRole, avatarUrl, comment, starRating }) => {
    const renderStars = (rating) => {
        return (
            <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img 
                        key={index} 
                        src={index < rating ? starIcon : starBlankIcon} 
                        alt={index < rating ? "filled star" : "empty star"} 
                        className="star-icon" 
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="card">
            <div className="quote">
                <img src={quoteIcon} alt="Quotes icon" />
            </div>

            {renderStars(starRating)}

            <p>{comment}</p>

            <div className="client">
                <div className="client-icon">
                    <img src={avatarUrl} alt={`picture of ${author}`} />
                </div>
                <h3>{author}</h3>
                <p>{jobRole}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;

