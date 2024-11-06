import React, { useState } from 'react';
import Button from '../../../Components/Button';
import notificationIcon from '../../../Images/notification-icon.svg';
import letterIcon from '../../../Images/letter.svg';
import './SectionSubscribe.css';

const SectionSubscribe = () => {

    const [formData, setFormData] = useState({ email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*'
                },
                body: JSON.stringify(formData)
            });

            console.log(res);

            if (res.ok) {
                setSubmitted(true);
                setFormData({ email: '' }); 
            } else {
                setError('Något gick fel, försök igen.');
            }
        } catch (error) {
            setError('Något gick fel, försök igen.');
        }
    };

    const handleOkClick = () => {
        setSubmitted(false);
    };

    return (
        <section id="section-subscribe">
            <div className="container">
                <div className="card">
                    <div className="subscribe">
                        <div className="notification-icon">
                            <img src={notificationIcon} alt="notification icon" />
                        </div>
                        <div className="headline-desktop">
                            <h2>Subscribe to our newsletter to stay informed about the latest updates</h2>
                        </div>
                        <div className="headline-mobile">
                            <h2>Subscribe to our newsletter</h2>
                        </div>
                    </div>
                    {submitted ? (
                        <div className="informationbox">
                            <h3>Tack för ditt meddelande</h3>
                            <p>Vi återkommer till dig så snart vi kan.</p>
                            <button className="btn-primary" onClick={handleOkClick}>OK</button>
                        </div>
                    ) : (
                        <form className="email" onSubmit={handleSubmit} noValidate>
                            <img className="input-icon" src={letterIcon} alt="letter icon" />
                            <input 
                                className="input" 
                                type="email" 
                                name="email" 
                                placeholder="Your email" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <Button type="submit">Subscribe</Button>
                            {error && <p className="error-message">{error}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SectionSubscribe;
