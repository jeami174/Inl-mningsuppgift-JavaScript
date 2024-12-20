import React, { useState, useContext } from 'react';
import { MessageContext, MESSAGE_TYPES } from '../../../Contexts/MessageContext.jsx';
import { useValidation } from '../../../Contexts/ValidationContext';
import Button from '../../../Components/Button';
import './ContactSection.css';
import InfoBoxRound from '../../../Components/InfoBoxRound';
import LetterIcon from '../../../Images/icons/Vector.svg';
import AddIcon from '../../../Images/icons/add-group.svg';

const Contact = () => {
    const { showMessage, clearMessage, message, messageType } = useContext(MessageContext);
    const { validateFormData, validationSwitch } = useValidation();
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '' });
    const [errors, setErrors] = useState({ fullName: '', email: '', specialist: '' });

    // Validates the entire form and handles the form submission if valid
    const handleSubmit = async (event) => {
        event.preventDefault();
        clearMessage();
    
        const newErrors = validateFormData(formData);
        setErrors(newErrors);
    
        if (Object.values(newErrors).some((error) => error)) return;
    
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accept: '*/*'
                },
                body: JSON.stringify(formData),
            });
    
            if (res.ok) {
                showMessage(MESSAGE_TYPES.SUCCESS, 'We will get back to you as soon as we can');
                setFormData({ fullName: '', email: '', specialist: '' });
                setErrors({});
            } else {
                showMessage(MESSAGE_TYPES.ERROR, 'Something went wrong, please try again.');
            }
        } catch (error) {
            showMessage(MESSAGE_TYPES.ERROR, 'Something went wrong, please try again.');
        }
    };

    // Updates formData state and validates each field in real-time
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    
        const errorMessage = validationSwitch(name, value);
        setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
    };

    // Uses InfoBoxRound to map out features
    const features = [
        {
            id: "info-1",
            icon: LetterIcon,
            title: "Email us",
            description: "Please feel free to drop us a line. We will respond as soon as possible.",
            showButton: true,
            buttonText: 'Leave a message'
        },
        {
            id: "info-2",
            icon: AddIcon,
            title: "Careers",
            description: "Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.",
            showButton: true,
            buttonText: 'Send an application'
        }
    ];

    return (
        <section aria-label="Contact" id="section-contact" className="ContactSection">
            <div className="container">
                <div className="heading">
                    <h2 className="h2">Contact Us</h2>
                </div>
                <div className="container-info">
                    {features.map((feature) => (
                        <InfoBoxRound key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} showButton={feature.showButton} buttonText={feature.buttonText} />
                    ))}
                </div>
                <div className="cardcontact">
                    <div className="headline">
                        <h3>Get Online Consultation</h3>
                    </div>
                    {message ? (
                        <div className={`informationbox ${messageType}`}>
                            <h3>{messageType === MESSAGE_TYPES.SUCCESS ? 'Thank you for your message.' : 'Something went wrong'}</h3>
                            <p>{message}</p>
                            <button className="btn-primary" onClick={clearMessage}>OK</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    className="input" 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    value={formData.fullName} 
                                    onChange={handleChange} 
                                    required
                                />
                                {errors.fullName && <p className="error">{errors.fullName}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    className="input" 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="form-group specialist-group">
                                <label htmlFor="specialist">Specialist</label>
                                <select 
                                    className="input" 
                                    id="specialist" 
                                    name="specialist" 
                                    value={formData.specialist} 
                                    onChange={handleChange} 
                                    required
                                >
                                    <option value="">Select a specialist</option>
                                    <option value="generalmedicin">General Medicine</option>
                                    <option value="pediatrics">Pediatrics</option>
                                    <option value="dermatology">Dermatology</option>
                                    <option value="psychiatry">Psychiatry</option>
                                </select>
                                {errors.specialist && <p className="error">{errors.specialist}</p>}
                            </div>
                            <Button aria-label="Make an appointment" type="submit" className="btn-primary">
                                Make an appointment
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;




