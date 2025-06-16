import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import BarberTeamSection from './components/BarberTeamSection';
import AvailableServiceSection from './components/AvailableServiceSection';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutUs />
      <AvailableServiceSection />
      <BarberTeamSection />
      <Gallery />
      <Reviews />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;