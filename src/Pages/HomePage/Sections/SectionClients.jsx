import React, { useState, useEffect } from 'react';
import './SectionClients.css';
import quoteIcon from '../../../Images/icons/iconquote.svg';
import starIcon from '../../../Images/icons/star.svg'; // Fylld stjärna
import starBlankIcon from '../../../Images/icons/starblank.svg'; // Tom stjärna

const SectionClients = () => {
    const [testimonials, setTestimonials] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
            const data = await response.json();
            setTestimonials(data);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        <section aria-label="clients love our app" id="section-clients">
            <div className="container">
                <h2 className="h1">Clients are Loving Our App</h2>

                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="card">
                        <div className="quote">
                            <img src={quoteIcon} alt="Quotes icon" />
                        </div>

                        <div className="stars">
                            {renderStars(testimonial.starRating)}
                        </div>

                        <p>{testimonial.comment}</p>

                        <div className="client">
                            <div className="client-icon">
                                <img src={testimonial.avatarUrl} alt={`picture of ${testimonial.author}`} />
                            </div>
                            <h3>{testimonial.author}</h3>
                            <p>{testimonial.jobRole}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionClients;
