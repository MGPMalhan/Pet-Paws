import React from 'react';
import AdminLayout from './AdminLayout';
import AddAppointmentForm from './AddAppointment';
import AdminSidebar from './MainAdmin.jsx';
import './AddAppointmentPage.css'
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';



const AddAppointmentPage = () => {
  return (
    <div>
    <Navbar/>
      <div className="admin-content">
        <AdminSidebar />
        <div className="add-appointment-form">
          <h3 className='addappointment'>Add Appointment</h3>
          <AddAppointmentForm />
        </div>
      </div>
    <Footer/>  
    </div>
  );
};

export default AddAppointmentPage;
