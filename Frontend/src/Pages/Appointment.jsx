import React from 'react';
import AppointmentForm from '../Admin/AddAppointment';
import './Appointment.css'; // Import your CSS file
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Appointment = () => {
  return (
    <div>
    <Navbar/>
    <h1 className='appintmentTitle'>Make an Appointment for your Pet</h1>
    <div className="appointment-container">
      <div className="form-column">
        <AppointmentForm />
      </div>
      <div className="image-column">
        <img src="https://img.freepik.com/premium-vector/beagle-dog-veterinary-visit-medical-clinic-office-puppy-anxiety-therapy-bandage-paw-vet-appointment-veterinarian-young-woman-vector-illustration-isolated-white-background_345238-768.jpg" alt="Appointment Image" />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Appointment;
