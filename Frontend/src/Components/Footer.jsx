import React from 'react';
import './Footer.css'
import Logo from '../Images/dogwalk.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-section">
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="middle-section">
        <div className="pet-icon">
          <img src={Logo} alt="Pet Icon" />
          <h3>Pet Paws</h3>
          <p>Our pet icon symbolizes the bond between humans and animals, reflecting our commitment to providing compassionate care for all pets.</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#petshop">Pet Shop</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="our-location">
          <h3>Our Location</h3>
          <img src="https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png" alt="Map Image" />
        </div>
      </div>
      <div className="bottom-section">
        <p>@2024 Pet Paws All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
