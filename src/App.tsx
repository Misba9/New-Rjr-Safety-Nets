import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BalconySafetyNets from './pages/services/BalconySafetyNets';
import InvisibleGrills from './pages/services/InvisibleGrills';
import ClothHanger from './pages/services/ClothHanger';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FloatingButtons from './components/common/FloatingButtons';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white overflow-x-hidden">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/balcony-safety-nets" element={<BalconySafetyNets />} />
          <Route path="/services/invisible-grills" element={<InvisibleGrills />} />
          <Route path="/services/cloth-hanger" element={<ClothHanger />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;