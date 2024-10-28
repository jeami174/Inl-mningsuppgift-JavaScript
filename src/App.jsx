import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HowDoesItWork from "./Components/HowDoesItWorkSection";
import AppFeaturesSection from "./Components/AppFeaturesSection";
import BrandsSection from "./Components/BrandsSection";
import SectionInfo from "./Components/SectionInfo";
import SectionClients from "./Components/SectionClients";
import SectionSubscribe from "./Components/SectionSubscribe";
import Footer from "./Components/Footer";

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
                <SectionSubscribe />
            </main>
            <Footer />
        </>
    );
};

export default App;