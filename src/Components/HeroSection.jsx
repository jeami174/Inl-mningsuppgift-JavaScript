import React from 'react';
import './HeroSection.css';
import CircleButton from './CircleButton'; 
import Button from './Button'; // Importera Button
import appStoreLight from '../Images/appstorelight.svg';
import appStoreDark from '../Images/icons/Appstoredark.svg';
import googlePlayLight from '../Images/googleplaylight.svg';
import googlePlayDark from '../Images/icons/googledark.svg';
import iPhoneBehind from '../Images/iPhonebehind-desktop.svg';
import groupImage from '../Images/Group (1).svg';

const HeroSection = () => {
    return (
        <section aria-label="section-hero" id="section-hero">
            <div className="container">
                <div className="h1">
                    <h1>Manage All Your Money in One App</h1>
                </div>
                <div className="content">
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div className="buttons">
                        <Button
                            href="https://www.apple.com/se/app-store/"
                            variant="secondary"
                            aria-label="Click here to download in app-store"
                            icon={appStoreLight} // Dynamiskt ljus ikon
                        >
                            <img className="show-dark" src={appStoreDark} alt="appstore icon dark" />
                        </Button>
                        <Button
                            href="https://play.google.com/store/apps"
                            variant="secondary"
                            aria-label="Click here to download in google play"
                            icon={googlePlayLight} // Dynamiskt ljus ikon
                        >
                            <img className="show-dark" src={googlePlayDark} alt="googleplay icon dark" />
                        </Button>
                    </div>
                    <a className="discover-more" href="#features">
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
                    <img
                        className="img-front"
                        src={groupImage}
                        alt="A phone that shows how you can manage your economy"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;




