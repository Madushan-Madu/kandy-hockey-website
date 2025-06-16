// src/App.js
import React from 'react';
import './App.css'; // You can keep App.css for very minimal app-wide styles, or remove if not needed
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import Clubs from './components/Clubs';
import Tournaments from './components/Tournaments';
import Officials from './components/Officials';
import Gallery from './components/Gallery'; // New gallery component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Achievements />
      <Clubs />
      <Tournaments />
      <Officials />
      <Gallery /> {/* Including the new gallery */}
      <Footer />
    </div>
  );
}

export default App;