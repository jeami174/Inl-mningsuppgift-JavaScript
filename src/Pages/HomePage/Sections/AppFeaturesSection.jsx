import React from 'react';
import creditCardIcon from '../../../Images/credit-card-icon.svg';
import shieldIcon from '../../../Images/shield-icon.svg';
import barsIcon from '../../../Images/bars-icon.svg';
import communicationIcon from '../../../Images/communication-icon.svg';
import walletIcon from '../../../Images/wallet-icon.svg';
import happyIcon from '../../../Images/happy-icon.svg';
import phoneImage from '../../../Images/Phone.svg';
import cardImage from '../../../Images/card.svg';
import InfoBox from '../../../Components/InfoBox';
import './AppFeaturesSection.css';

function AppFeaturesSection() {
    const features = [
        {
            id: "info-1",
            icon: creditCardIcon,
            title: "Easy Payments",
            description: "Id mollis consectetur congue egestas egestas suspendisse blandit justo."
        },
        {
            id: "info-2",
            icon: shieldIcon,
            title: "Data Security",
            description: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non."
        },
        {
            id: "info-3",
            icon: barsIcon,
            title: "Cost Statistics",
            description: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh."
        },
        {
            id: "info-4",
            icon: communicationIcon,
            title: "Support 24/7",
            description: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris."
        },
        {
            id: "info-5",
            icon: walletIcon,
            title: "Regular Cashback",
            description: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend."
        },
        {
            id: "info-6",
            icon: happyIcon,
            title: "Top Standards",
            description: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu."
        }
    ];

    return (
        <section aria-label="section-appfeatures" className="section-appfeatures" id="section-appfeatures">
            <div className="container">
                <div className="h2">
                    <h2>App Features</h2>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className="container-info">
                    {features.map((feature) => (
                        <InfoBox
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
                <div className="images">
                    <img className="img-phone" src={phoneImage} alt="iphone" />
                    <img className="card" src={cardImage} alt="credit card" />
                </div>
            </div>
        </section>
    );
}

export default AppFeaturesSection;
