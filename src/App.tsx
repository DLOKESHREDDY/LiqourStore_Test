import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AgeVerification from './components/AgeVerification';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { useLocalStorage } from './hooks/useLocalStorage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [verified, setVerified] = useLocalStorage('age-verified', false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (verified) {
      setShowModal(false);
    }
  }, [verified]);

  const handleVerification = (isVerified: boolean) => {
    setVerified(isVerified);
    setShowModal(false);
  };

  if (showModal) {
    return <AgeVerification onVerify={handleVerification} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        {verified && (
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        )}
      </div>
    </Router>
  );
}

export default App;