import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-heading">Photo & Video Gallery</h2>
        <p className="gallery-intro">
          Explore our collection of high-quality photos and videos from matches, training sessions, award ceremonies, and social events.
        </p>
        <div className="gallery-placeholder">
          {/* In a real application, this would be a grid of images/video thumbnails */}
          <div className="gallery-item-placeholder">Image/Video 1</div>
          <div className="gallery-item-placeholder">Image/Video 2</div>
          <div className="gallery-item-placeholder">Image/Video 3</div>
          <div className="gallery-item-placeholder">Image/Video 4</div>
        </div>
        <p className="gallery-cta">More media coming soon!</p>
      </div>
    </section>
  );
};

export default Gallery;