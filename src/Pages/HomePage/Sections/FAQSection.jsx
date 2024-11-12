import React, { useState, useEffect } from 'react';
import Accordion from '../../../Components/Accordion';
import Button from '../../../Components/Button';
import contactPhoneIcon from '../../../Images/icons/contactphone.svg';
import contactTextIcon from '../../../Images/icons/contactstext.svg';
import arrowRightPurple from '../../../Images/icons/arrowrightpurple.svg';
import arrowRightGreen from '../../../Images/icons/arrowrightgreen.svg';
import './FAQSection.css';

const FAQSection = () => {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    // Fetches FAQ data from the API provided
    const fetchData = async () => {
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Response is not JSON");
            }
            const data = await response.json();
            setFaqs(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section aria-label="FAQ" id="section-faq">
            <div className="container">
                <div className="questions">
                    <h2 className="h2">Any questions? Check out the FAQs</h2>
                    <p>Still have unanswered questions and need to get in touch?</p>
                </div>
                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={faq.id}
                            title={faq.title}
                            content={faq.content}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
                <div className="contact-card">
                    <div className="phone">
                        <img src={contactPhoneIcon} alt="An icon of a phone" />
                        <p>Still have questions?</p>
                        <button className="btn-contact-phone">
                            <span>Contact us</span>
                            <img src={arrowRightPurple} alt="Arrow right icon" className="arrowicon" />
                        </button>
                    </div>
                    <div className="text">
                        <img src={contactTextIcon} alt="An icon of a text" />
                        <p>Don't like phone calls?</p>
                        <button className="btn-contact-text">
                            <span>Contact us</span>
                            <img src={arrowRightGreen} alt="Arrow right icon" className="arrowicon" />
                        </button>
                    </div>
                </div>
                <div className="btn-now">
                    <Button aria-label="Contact us now" className="btn-primary">Contact us now</Button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
