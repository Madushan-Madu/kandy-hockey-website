import React from 'react';
import '../styles/AboutUs.css'; // Link to AboutUs-specific CSS

const AboutUs = () => {
  return (
    <section id="about" className="about-us-section">
      <div className="container">
        <h2 className="section-heading">About Us</h2>

        <div className="about-cards-grid">
          <div className="about-card">
            <h3>Vision</h3>
            <p>To be the premier hockey association in the country, fostering talent and promoting the sport at all levels while maintaining the highest standards of sportsmanship and excellence.</p>
          </div>
          <div className="about-card">
            <h3>Mission</h3>
            <p>To develop and promote hockey in the Kandy district by providing quality coaching, competitive opportunities, and a supportive community for players of all ages and skill levels.</p>
          </div>
          <div className="about-card">
            <h3>Values</h3>
            <ul>
              <li>Excellence in performance</li>
              <li>Sportsmanship and fair play</li>
              <li>Inclusivity and diversity</li>
              <li>Community engagement</li>
              <li>Player development</li>
            </ul>
          </div>
        </div>

        <div className="our-history">
          <h3>Our History</h3>
          <p>
            The Kandy District Hockey Association was established in 1975 with the aim of promoting hockey in the central region of Sri Lanka. Starting with just 3 clubs, we have grown to include 10 registered clubs across the district.
          </p>
          <p>
            Over the decades, we have produced numerous national players and have consistently performed well in national tournaments. Our focus on youth development has created a strong pipeline of talent that continues to elevate the standard of hockey in the region.
          </p>
          <p>
            Today, KDHA organizes several tournaments throughout the year, including the Annual League, Knockout Tournament, 7-a-side Tournament, and the prestigious Independence Cup 6-a-side Tournament, providing competitive opportunities for players of all ages and skill levels.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;