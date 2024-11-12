import React, { useState, useEffect } from 'react';
import './SectionClients.css';
import TestimonialCard from './../../../Components/Testimonial';

const SectionClients = () => {
    const [testimonials, setTestimonials] = useState([]);

    // Fetches testimonial data from API and updates component state
    const fetchData = async () => {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
            const data = await response.json();
            setTestimonials(data);
        } catch (error) {
            console.error('Error fetching testimonials:', error); // Logs fetch errors to the console
        }
    };

    // Trigger data fetching
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section aria-label="clients love our app" id="section-clients">
            <div className="container">
                <h2 className="h1">Clients are Loving Our App</h2>

                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        author={testimonial.author}
                        jobRole={testimonial.jobRole}
                        avatarUrl={testimonial.avatarUrl}
                        comment={testimonial.comment}
                        starRating={testimonial.starRating}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionClients;



