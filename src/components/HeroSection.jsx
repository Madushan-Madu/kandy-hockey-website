import React from 'react';
import '../styles/HeroSection.css'; // Link to HeroSection-specific CSS
import hockeyGoalGraphic from '../assets/kdha (1).jpg'; // Assuming you have this graphic

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Kandy District Hockey Association</h1>
          <p className="slogan">Promoting excellence in hockey across the Kandy district since 1975</p>
          <div className="hero-buttons">
            <a href="#learn-more" className="button button-yellow">Learn More</a>
            <a href="#join-club" className="button button-secondary">Join a Club</a>
          </div>
        </div>
        <div className="hero-graphic">
          {/* Replace with your actual hockey goal graphic */}
          <img src={hockeyGoalGraphic} alt="Hockey Goal Graphic" />
          <span className="graphic-text">KDHA EST. 1975</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;