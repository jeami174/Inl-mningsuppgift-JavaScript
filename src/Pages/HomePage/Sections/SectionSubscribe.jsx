import React, { useState, useContext } from 'react';
import { MessageContext } from '../../../Contexts/MessageContext';
import Button from '../../../Components/Button';
import notificationIcon from '../../../Images/notification-icon.svg';
import letterIcon from '../../../Images/letter.svg';
import './SectionSubscribe.css';

const SectionSubscribe = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [submitted, setSubmitted] = useState(false);
    const { message, messageType, showMessage, clearMessage } = useContext(MessageContext);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        clearMessage();

        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                showMessage('success', 'Tack för ditt meddelande. Vi återkommer till dig så snart vi kan.');
                setSubmitted(true);
                setFormData({ email: '' });
            } else {
                showMessage('error', 'Något gick fel, försök igen.');
            }
        } catch (error) {
            showMessage('error', 'Något gick fel, försök igen.');
        }
    };

    const handleOkClick = () => {
        setSubmitted(false);
        clearMessage();
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
                    {message ? (
                        <div className={`informationbox ${messageType}`}>
                            <h3>{messageType === 'success' ? 'Tack för ditt meddelande' : 'Felmeddelande'}</h3>
                            <p>{message}</p>
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
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SectionSubscribe;




