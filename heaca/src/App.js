import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import International from './pages/International';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/international" element={<International />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
