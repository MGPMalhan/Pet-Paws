import React from 'react';
import logo from '../Images/Frame 18.png'; // Import your logo image
import './Navbar.css';

const Navbar = ({ toggleSignupPopup }) => { // Receive toggleSignupPopup as a prop
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Pet Clinic Logo" />
        <span className="navbar-title">Pet Pows</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/team" className="nav-link">Team</a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="/petshop" className="nav-link">Petshop</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
      {/* <div className="navbar-buttons">
        <button className="btn">Login</button>
        <button className="btn btn-primary">Create Account</button> 
      </div> */}
    </nav>
  );
}

export default Navbar;
