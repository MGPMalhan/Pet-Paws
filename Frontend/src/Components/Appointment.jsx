import React from 'react';
import './Appointment.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link from React Router

const NewAppointmentSection = () => {
  return (
    <div className="new-appointment-section">
      <div className="appointment-image">
        <img src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_52683-39831.jpg" alt="Appointment" />
      </div>
      <div className="appointment-details">
        <h2 className='appointment-title'>Make an Appointment</h2>
        <p>
            Whether it’s routine vaccinations, illness or injury, we’re here for you and your pet. We promise to always put you and your pet first, because frankly, that’s just the way it should be.
        </p>

        <Link to='../appointment'>
          <button className="book-appointment-btn">Book an Appointment</button>    
        </Link>
      </div>
    </div>
  );
}

export default NewAppointmentSection;
