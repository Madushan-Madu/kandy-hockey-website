import React, { useState } from 'react';
import '../styles/Footer.css';
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // If you install react-icons

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Here you would typically send this data to your Express.js backend
    alert('Thank you for your message! (This is a demo submission)');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <footer className="footer">
      <div className="container footer-content-grid">
        <div className="get-in-touch-info">
          <h2>Get In Touch</h2>
          <p>Have questions or want to join a club? Contact us today!</p>
          <ul className="contact-details">
            <li>
              {/* <FaMapMarkerAlt /> */}
              <span className="icon-placeholder">📍</span> 123 Hockey Lane, Kandy, Sri Lanka
            </li>
            <li>
              {/* <FaPhone /> */}
              <span className="icon-placeholder">📞</span> +94 81 234 5678
            </li>
            <li>
              {/* <FaEnvelope /> */}
              <span className="icon-placeholder">📧</span> info@kandyhockey.org
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {/* <FaFacebookF /> */}
              <span className="social-icon-placeholder">f</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* <FaInstagram /> */}
              <span className="social-icon-placeholder">in</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {/* <FaTwitter /> */}
              <span className="social-icon-placeholder">t</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              {/* <FaYoutube /> */}
              <span className="social-icon-placeholder">yt</span>
            </a>
          </div>
        </div>

        {/* Online Contact Form */}
        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="button button-yellow">Send Message</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kandy District Hockey Association. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;