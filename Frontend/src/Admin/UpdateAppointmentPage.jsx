import React from 'react';
import AdminLayout from './AdminLayout';
import UpdateAppointmentForm from './UpdateAppointments';
import Navbar from '../Components/Navbar';
import AdminSidebar from './MainAdmin';
import Footer from '../Components/Footer';
import './UpdateAppointmentPage.css'

const UpdateAppointmentPage = () => {
  return (
    <div>
      <Navbar />
      <div className='admin-content'>
        <AdminSidebar />
        <div className="add-appointment-form">
          <h3 className='addappointment'>Update Appointment</h3>
          <UpdateAppointmentForm />
        </div>
      </div>
      <Footer />  
    </div>
  );
};

export default UpdateAppointmentPage;
