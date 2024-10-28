import React from 'react';
import closedIcon from '../Images/icons/iconclosed.svg';
import openIcon from '../Images/icons/ComponentOpen.svg';
import './Accordion.css';

const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="faq-wrapper">
            <button className={`faq ${isOpen ? 'active' : ''}`} onClick={onClick}>
                {title}
                <span className="accordion-icon">
                    <img src={isOpen ? openIcon : closedIcon} alt={isOpen ? 'Open icon' : 'Closed icon'} />
                </span>
            </button>
            <div className="panel" style={{ display: isOpen ? 'block' : 'none' }}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;