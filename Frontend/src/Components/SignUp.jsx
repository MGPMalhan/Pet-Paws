// SignupPopup component (SignupPopup.js)
import React from 'react';

function SignupPopup({ signupDetails, setSignupDetails, setShowPopup }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        {/* Signup form */}
        <button onClick={handleClosePopup}>Close</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default SignupPopup;
