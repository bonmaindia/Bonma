import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import GoogleAds from './pages/GoogleAds';
import SocialMedia from './pages/SocialMedia';
import Shopify from './pages/Shopify';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/website-development" element={<WebDev />} />
              <Route path="/google-ads-management" element={<GoogleAds />} />
              <Route path="/social-media-marketing" element={<SocialMedia />} />
              <Route path="/shopify-development" element={<Shopify />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}
