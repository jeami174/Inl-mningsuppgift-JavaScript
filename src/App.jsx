import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HomePage/Sections/HeroSection";
import HowDoesItWork from "./Pages/HomePage/Sections/HowDoesItWorkSection";
import AppFeaturesSection from "./Pages/HomePage/Sections/AppFeaturesSection";
import BrandsSection from "./Pages/HomePage/Sections/BrandsSection";
import SectionInfo from "./Pages/HomePage/Sections/SectionInfo";
import SectionClients from "./Pages/HomePage/Sections/SectionClients";
import SectionSubscribe from "./Pages/HomePage/Sections/SectionSubscribe";
import Footer from "./Components/Footer";
import FAQSection from "./Pages/HomePage/Sections/FAQSection";

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <BrandsSection />
                <AppFeaturesSection />
                <HowDoesItWork />
                <SectionInfo />
                <SectionClients />
                <FAQSection />
                <SectionSubscribe />
            </main>
            <Footer />
        </>
    );
};

export default App;