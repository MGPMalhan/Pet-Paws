import React, { useState } from 'react';
import './ContactForm.css'; // Importing the updated CSS file

function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields is empty
    if (!firstName || !lastName || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Your form submission logic here
    // For demonstration purposes, I'm just showing the popup
    setShowPopup(true);
  };

  return (
    <div>
      <div className="card-contact">
        <div className="card-body">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-groups">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-groups">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-groups">
              <textarea
                className="form-control large-input"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit">Submit</button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTauYZxynrfSQXGkug9E_l9QoYF1Udz7cQurx1dZ4apXvcVf7oFgrJ38dprS3AssYLZy4&usqp=CAU" alt="Message Delivered" />
            <h3>Message Delivered</h3>
            <p>Your Message was successfully sent. Hang tight for a response from our team.</p>
            <button onClick={() => setShowPopup(false)} className='Continue'>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
