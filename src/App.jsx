import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import HowDoesItWork from "./Components/HowDoesItWorkSection";
import AppFeaturesSection from "./Components/AppFeaturesSection";

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <AppFeaturesSection />
                <HowDoesItWork />
            </main>
        </>
    );
};

export default App;