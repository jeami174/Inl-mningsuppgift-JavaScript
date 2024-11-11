import React, { useState, useContext, useCallback } from 'react';
import { MessageContext } from '../../../Contexts/MessageContext';
import { useValidation } from '../../../Contexts/ValidationContext';
import Button from '../../../Components/Button';
import notificationIcon from '../../../Images/notification-icon.svg';
import letterIcon from '../../../Images/letter.svg';
import './SectionSubscribe.css';

const SectionSubscribe = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
    const { message, messageType, showMessage, clearMessage } = useContext(MessageContext);
    const { validationSwitch } = useValidation();

    const validateForm = () => {
        const emailError = validationSwitch('email', formData.email);
        setErrors({ email: emailError });
        return !emailError;
    };

    const handleChange = useCallback(({ target: { name, value } }) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        const errorMessage = validationSwitch(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    }, [validationSwitch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        clearMessage();

        if (!validateForm()) return;

        const trimmedFormData = { email: formData.email.trim() };

        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: '*/*',
                },
                body: JSON.stringify(trimmedFormData),
            });

            if (res.ok) {
                showMessage('success', 'You are now subscribed to our newsletter');
                setFormData({ email: '' });
                setErrors({ email: '' });
            } else {
                showMessage('error', 'Something went wrong, please try again.');
            }
        } catch (error) {
            showMessage('error', 'Something went wrong, please try again.');
        }
    };

    const handleOkClick = useCallback(() => {
        clearMessage();
    }, [clearMessage]);

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
                            <h3>{messageType === 'success' ? 'Yay!' : 'Error'}</h3>
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
                                {errors.email && <div className="error-message"><p className="error">{errors.email}</p></div>}
                        </form>
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default SectionSubscribe;








