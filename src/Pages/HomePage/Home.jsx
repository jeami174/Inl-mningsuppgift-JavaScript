import React from 'react'
import HeroSection from "./Sections/HeroSection";
import HowDoesItWork from "./Sections/HowDoesItWorkSection";
import AppFeaturesSection from "./Sections/AppFeaturesSection";
import BrandsSection from "./Sections/BrandsSection";
import SectionInfo from "./Sections/SectionInfo";
import SectionClients from "./Sections/SectionClients";
import SectionSubscribe from "./Sections/SectionSubscribe";
import FAQSection from "./Sections/FAQSection";

const Home = () => {
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
    )
}

export default Home