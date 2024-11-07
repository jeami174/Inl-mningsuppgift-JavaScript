import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from "./Sections/HeroSection";
import HowDoesItWork from "./Sections/HowDoesItWorkSection";
import AppFeaturesSection from "./Sections/AppFeaturesSection";
import BrandsSection from "./Sections/BrandsSection";
import SectionInfo from "./Sections/SectionInfo";
import SectionClients from "./Sections/SectionClients";
import SectionSubscribe from "./Sections/SectionSubscribe";
import FAQSection from "./Sections/FAQSection";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToFeatures) {
            const featuresSection = document.getElementById('section-appfeatures');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.state]);

    return (
        <>
            <HeroSection />
            <BrandsSection />
            <AppFeaturesSection />
            <HowDoesItWork />
            <SectionInfo />
            <SectionClients />
            <FAQSection />
            <SectionSubscribe />
        </>
    );
};

export default Home;
