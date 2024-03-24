// SignupPopup.js
import React from 'react';
import './SignupPopup.css'; // Import CSS for styling the popup form

function SignupPopup({ handleClose }) {
  return (
    <div className="signup-popup">
      <div className="popup-content">
        <h2>Create Account</h2>
        {/* Form for signup */}
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        {/* Close button */}
        <button className="close-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default SignupPopup;
