import React from 'react';
import Button from './Button'; // Importerar knappen
import notificationIcon from '../Images/notification-icon.svg';
import letterIcon from '../Images/letter.svg';
import './SectionSubscribe.css';

const SectionSubscribe = () => {
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
                    <form className="email">
                        <img className="input-icon" src={letterIcon} alt="letter icon" />
                        <input className="input" type="email" placeholder="Your email" />
                        <Button>Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SectionSubscribe;
