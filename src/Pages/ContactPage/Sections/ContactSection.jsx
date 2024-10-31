import React from 'react';
import Button from '../../../Components/Button';
import './ContactSection.css';

const Contact = () => {
    return (
        <>
          <section aria-label="Contact" id="section-contact" className="ContactSection">
                <div className="container">
                    <div className="heading">
                        <h2 className="h2">Contact Us</h2>
                    </div>
                    <div className="card">
                        <div className="headline">
                            <h3>Get Online Consultation</h3>
                        </div>
                        <form className="contact-form">
                            {/* Fält för full name */}
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input className="input" type="text" id="fullname" name="fullname" />
                            </div>

                            {/* Fält för email address */}
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input className="input" type="email" id="email" name="email" />
                            </div>

                            {/* Dropdown för specialist */}
                            <div className="form-group">
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