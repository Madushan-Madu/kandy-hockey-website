import React from 'react';
import '../styles/Header.css';
import logo from '../assets/kdha (1).jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          {/* Replace with your actual logo image */}
          <img src={logo} alt="Kandy District Hockey Association Logo" />
          <span>Kandy District<br/>Hockey Association</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#clubs">Clubs</a></li>
            <li><a href="#tournaments">Tournaments</a></li>
            <li><a href="#officials">Officials</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;