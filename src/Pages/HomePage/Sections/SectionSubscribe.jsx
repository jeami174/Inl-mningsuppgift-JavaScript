import React, { useState, useContext } from 'react';
import { MessageContext, MESSAGE_TYPES } from '../../../Contexts/MessageContext';
import { useValidation } from '../../../Contexts/ValidationContext';
import Button from '../../../Components/Button';
import notificationIcon from '../../../Images/notification-icon.svg';
import letterIcon from '../../../Images/letter.svg';
import './SectionSubscribe.css';

const SectionSubscribe = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
    const { message, messageType, showMessage, clearMessage } = useContext(MessageContext);
    const { validateFormData, validationSwitch } = useValidation();

    // Updates formData state and validates the email field in real-time
    const handleChange = ({ target: { name, value } }) => {
        clearMessage();

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationSwitch(name, value),
        }));
    };

    // Validates the entire form and handles the form submission if valid
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const newErrors = validateFormData(formData);
        setErrors(newErrors);
    
        if (Object.values(newErrors).some((error) => error)) return;
    
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: '*/*',
                },
                body: JSON.stringify(formData),
            });
    
            if (res.ok) {
                showMessage(MESSAGE_TYPES.SUCCESS, 'You are now subscribed to our newsletter');
                setFormData({ email: '' });
                setErrors({ email: '' });
            } else {
                showMessage(MESSAGE_TYPES.ERROR, 'Something went wrong, please try again.');
            }
        } catch (error) {
            showMessage(MESSAGE_TYPES.ERROR, 'Something went wrong, please try again.');
        }
    };
    
    // Clears any displayed message when the user clicks the OK button
    const handleOkClick = () => {
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
                            <h3>{messageType === MESSAGE_TYPES.SUCCESS ? 'Yay!' : 'Error'}</h3>
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











