import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/Contact";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Navbar />
                <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;