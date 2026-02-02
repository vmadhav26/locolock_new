
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import ServicesOverview from './pages/ServicesOverview';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import LegalPage from './pages/LegalPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/nda" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
