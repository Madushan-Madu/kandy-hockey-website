import React, { useState } from 'react';
import '../styles/Gallery.css';

import teamPhoto1 from '../assets/hockey-logo.png';
import teamPhoto2 from '../assets/kdha (1).jpg';
import teamPhoto3 from '../assets/khandfc.png';
import teamPhoto4 from '../assets/hindu.png';
import videoThumbnail from '../assets/hockey-goal.jpg'; // A static thumbnail image
import testVideo from '../assets/test.mp4'; // Actual video file

const galleryItems = [
  {
    src: teamPhoto1,
    alt: "Kandy District Hockey Team 2024",
    caption: "Our victorious Kandy District Hockey Team of 2024.",
    type: "image"
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
  {
    src: videoThumbnail,
    videoUrl: testVideo,
    alt: "Highlights Video",
    caption: "Exciting match highlights from recent tournaments.",
    type: "video"
  },
  {
    src: teamPhoto1,
    alt: "Junior Team Practice",
    caption: "Our aspiring junior players during a practice drill.",
    type: "image"
  },
  {
    src: teamPhoto2,
    alt: "Coaches Workshop",
    caption: "Coaches participating in a professional development workshop.",
    type: "image"
  }
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMediaClick = (item) => {
    setSelectedMedia(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-heading">Photo & Video Gallery</h2>
        <p className="gallery-intro">
          Explore our collection of high-quality photos and videos from matches, training sessions, award ceremonies, and social events.
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index} onClick={() => handleMediaClick(item)}>
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="gallery-image" />
              ) : (
                <div className="gallery-video-thumbnail">
                  <img src={item.src} alt={item.alt} className="gallery-image" />
                  <div className="play-button-overlay">▶</div>
                </div>
              )}
              <p className="gallery-caption">{item.caption}</p>
            </div>
          ))}
        </div>
        <p className="gallery-cta">More media coming soon!</p>
      </div>

      {isModalOpen && selectedMedia && (
        <div className="media-modal-overlay" onClick={handleCloseModal}>
          <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="media-modal-close" onClick={handleCloseModal}>&times;</button>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.alt} className="modal-media" />
            ) : (
              <video controls className="modal-media">
                <source src={selectedMedia.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="modal-media-caption">{selectedMedia.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;