// FAQSection.jsx
import React, { useState } from 'react';
import Accordion from './Accordion';
import Button from './Button';
import contactPhoneIcon from '../Images/icons/contactphone.svg';
import contactTextIcon from '../Images/icons/contactstext.svg';
import arrowRightPurple from '../Images/icons/arrowrightpurple.svg';
import arrowRightGreen from '../Images/icons/arrowrightgreen.svg';
import './FAQSection.css';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "Is any of my personal information stored in the App?", answer: "Nunc duis id aenean gravida tincidunt..." },
        { question: "What formats can I download my transaction history in?", answer: "Nunc duis id aenean gravida tincidunt..." },
        { question: "Can I schedule future transfers?", answer: "Nunc duis id aenean gravida tincidunt..." },
        { question: "When can I use Banking App services?", answer: "Nunc duis id aenean gravida tincidunt..." },
        { question: "Can I create my own password that is easy for me to remember?", answer: "Nunc duis id aenean gravida tincidunt..." },
        { question: "What happens if I forget or lose my password?", answer: "Nunc duis id aenean gravida tincidunt..." }
    ];

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
                            key={index}
                            title={faq.question}
                            content={faq.answer}
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
                <Button aria-label="Contact us now" className="btn-primary">Contact us now</Button>
            </div>
        </section>
    );
};

export default FAQSection;
