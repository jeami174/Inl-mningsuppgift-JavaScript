import React from 'react';
import Button from '../../../Components/Button';
import './ContactSection.css';
import InfoBox from '../../../Components/InfoBox';
import LetterIcon from '../../../Images/icons/Vector.svg';
import AddIcon from '../../../Images/icons/add-group.svg';

const Contact = () => {          
    const features = [
        {
            id: "info-1",
            icon: LetterIcon,
            title: "Email us",
            description: "Please feel free to drop us a line. We will respond as soon as possible.",
            iconBackgroundColor: '#FFF', // Ny bakgrundsfärg
            iconBorderRadius: '50%', // Gör bakgrunden helt rund
            showButton: true, // Visa knappen
            buttonText: 'Leave a message' // Anpassa knappens text
        },
        {
            id: "info-2",
            icon: AddIcon,
            title: "Careers",
            description: "Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.",
            iconBackgroundColor: '#FFF',
            iconBorderRadius: '50%', // Gör bakgrunden helt rund
            showButton: true, // Visa knappen
            buttonText: 'Send an application' // Anpassa knappens text
        }
    ];

    return (
        <>
            <section aria-label="Contact" id="section-contact" className="ContactSection">
                <div className="container">
                    <div className="heading">
                        <h2 className="h2">Contact Us</h2>
                    </div>
                    <div className="container-info">
                    {features.map((feature) => (
                        <InfoBox
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            iconBackgroundColor={feature.iconBackgroundColor}
                            iconBorderRadius={feature.iconBorderRadius}
                            showButton={feature.showButton}
                            buttonText={feature.buttonText}
                        />
                    ))}
                    </div>
                    <div className="cardcontact">
                        <div className="headline">
                            <h3>Get Online Consultation</h3>
                        </div>
                        <form className="contact-form" noValidate>
                            {/* Fält för full name */}
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input className="input" type="text" id="fullname" name="fullname" required/>
                            </div>

                            {/* Fält för email address */}
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input className="input" type="email" id="email" name="email" required/>
                            </div>

                            {/* Dropdown för specialist */}
                            <div className="form-group specialist-group">
                                <label htmlFor="specialist">Specialist</label>
                                <select className="input" id="specialist" name="specialist">
                                    <option value="">Select a specialist</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="dermatology">Dermatology</option>
                                    <option value="orthopedics">Orthopedics</option>
                                </select>
                            </div>

                            {/* Skicka-knapp */}
                            <Button aria-label="Subscribe" type="submit" className="btn-primary">
                                Make an appointment
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;

