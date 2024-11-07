import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/ContactPage/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { MessageProvider } from "./Contexts/MessageContext";
import Breadcrumb from "./Components/Breadcrumb";

const App = () => {
    return (
        <MessageProvider>
            <BrowserRouter>
                <>
                    <Header />
                    <Breadcrumb />
                    <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                    </Routes>
                    </main>
                    <Footer />
                </>
            </BrowserRouter>
        </MessageProvider>
    );
};

export default App;