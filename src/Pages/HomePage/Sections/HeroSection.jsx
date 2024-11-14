import React from 'react';
import './HeroSection.css';
import CircleButton from '../../../Components/CircleButton'; 
import Button from '../../../Components/Button';
import appStoreLight from '../../../Images/appstorelight.svg';
import appStoreDark from '../../../Images/icons/Appstoredark.svg';
import googlePlayLight from '../../../Images/googleplaylight.svg';
import googlePlayDark from '../../../Images/icons/googledark.svg';
import iPhoneBehind from '../../../Images/Group 5.svg';

const HeroSection = () => {
    const storeButtons = [
        {
            href: "https://www.apple.com/se/app-store/",
            lightIcon: appStoreLight,
            darkIcon: appStoreDark,
            alt: "appstore icon",
            ariaLabel: "Click here to download in app-store"
        },
        {
            href: "https://play.google.com/store/apps",
            lightIcon: googlePlayLight,
            darkIcon: googlePlayDark,
            alt: "google play icon",
            ariaLabel: "Click here to download in google play"
        }
    ];

    return (
        <section aria-label="section-hero" id="section-hero">
            <div className="container">
                <header className="h1">
                    <h1>Manage All Your Money in One App</h1>
                </header>
                <div className="content">
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div className="buttons">
                        {storeButtons.map((button, index) => (
                            <Button
                                key={index}
                                href={button.href}
                                variant="secondary"
                                aria-label={button.ariaLabel}
                            >
                                <img className="show-light" src={button.lightIcon} alt={`${button.alt} light`} />
                                <img className="show-dark" src={button.darkIcon} alt={`${button.alt} dark`} />
                            </Button>
                        ))}
                    </div>
                    <a href="#section-faq" className="discover-more">
                        <CircleButton ariaLabel="Discover more">
                            <i className="fa-solid fa-chevron-down"></i>
                        </CircleButton>
                        <span>Discover more</span>
                    </a>
                </div>
                <div className="phoneimages">
                    <img
                        className="img-back"
                        src={iPhoneBehind}
                        alt="A phone that shows how you can manage your money with a single click"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;





