// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import Clubs from './components/Clubs';
import Tournaments from './components/Tournaments';
import Officials from './components/Officials';
import Gallery from './components/Gallery'; 
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