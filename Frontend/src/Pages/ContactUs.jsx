import React from 'react';
import './ContactUs.css'; // Importing the CSS file
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

function ContactUsForm() {
  return (
    <div className="container">
    <Navbar />
      <h1 className="title-main">Contact Us</h1>
      <p className='contact-description'>Whether you have a question, need assistance, or simply want to say hello, we're here to help! Our team is dedicated to providing you with the support you need. Reach out to us through any of the channels below, and we'll make sure to assist you promptly.</p>
      <h2 className="sub-title-main">You can contact us from any of the options below:</h2>
      <div className="sub-section">
        <h3 className="sub-title-contact">Phone</h3>
        <p>Call us on our helpline number for assistance.</p>
        <h3 className="sub-title-contact">Email</h3>
        <p>Drop us an email and we will get back to you as soon as possible.</p>
        <h3 className="sub-title-contact">In Person</h3>
        <p>Visit our office during working hours for face-to-face assistance.</p>
        <h3 className="sub-title-contact">Online</h3>
        <p>Connect with us through our website's live chat or contact form.</p>
      </div>
      <p className='below-description'>For any further assistance, feel free to reach out to us using any of the methods mentioned above. We're as committed to helping you as a pup is to chasing its tail—just with a lot less barking and a lot more helpfulness!</p>
      <div className="form-containesr"> {/* Apply centering to this container */}
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUsForm;
