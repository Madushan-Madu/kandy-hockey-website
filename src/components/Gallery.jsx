import React from 'react';
import '../styles/Gallery.css';

// Import your gallery images
import teamPhoto1 from '../assets/hockey-logo.png'; // Assuming these image files exist
import teamPhoto2 from '../assets/kdha (1).jpg';
import teamPhoto3 from '../assets/khandfc.png';
import teamPhoto4 from '../assets/hindu.png';
// Add more imports as needed for more images/videos

const galleryItems = [
  {
    src: teamPhoto1,
    alt: "Kandy District Hockey Team 2024",
    caption: "Our victorious Kandy District Hockey Team of 2024.",
    type: "image" // Could be 'image' or 'video'
  },
  {
    src: teamPhoto2,
    alt: "National Tournament Finals 2023",
    caption: "Intense moments from the National Tournament Finals 2023.",
    type: "image"
  },
  {
    src: teamPhoto3,
    alt: "Morning Training Session",
    caption: "Early morning training session, building skill and camaraderie.",
    type: "image"
  },
  {
    src: teamPhoto4,
    alt: "Annual Awards Ceremony 2023",
    caption: "Celebrating our stars at the Annual Awards Ceremony 2023.",
    type: "image"
  },
  // Add more items here if you have more images/videos
  {
    src: teamPhoto1, // Re-using for demo, replace with actual new images
    alt: "Junior Team Practice",
    caption: "Our aspiring junior players during a practice drill.",
    type: "image"
  },
  {
    src: teamPhoto2,
    alt: "Coaches Workshop",
    caption: "Coaches participating in a professional development workshop.",
    type: "image"
  },
];


const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-heading">Photo & Video Gallery</h2>
        <p className="gallery-intro">
          Explore our collection of high-quality photos and videos from matches, training sessions, award ceremonies, and social events.
        </p>
        <div className="gallery-grid"> {/* Changed class name for clarity */}
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="gallery-image" />
              ) : (
                // For videos, you'd embed a video player or a thumbnail with a play icon
                <div className="gallery-video-thumbnail">
                  <img src={item.src} alt={item.alt} className="gallery-image" />
                  <div className="play-button-overlay">▶</div> {/* Simple play button */}
                </div>
              )}
              <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
        <p className="gallery-cta">More media coming soon!</p>
      </div>
    </section>
  );
};

export default Gallery;