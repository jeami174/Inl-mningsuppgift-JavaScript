import React from 'react';
import closedIcon from '../Images/icons/iconclosed.svg';
import darkClosedIcon from '../Images/icons/chevrondark.svg';
import openIcon from '../Images/icons/ComponentOpen.svg';
import './Accordion.css';

const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="faq-wrapper">
            <button className={`faq ${isOpen ? 'active' : ''}`} onClick={onClick}>
                {title}
                <span className="accordion-icon">
                    {isOpen ? (
                        <img src={openIcon} alt="Open icon" />
                    ) : (
                        <>
                            <img className="show-light" src={closedIcon} alt="Closed icon light" />
                            <img className="show-dark" src={darkClosedIcon} alt="Closed icon dark" />
                        </>
                    )}
                </span>
            </button>
            <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;
