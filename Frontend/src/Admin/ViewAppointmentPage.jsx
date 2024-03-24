import React from 'react';
import ViewAppointments from './ViewAppointment';
import AdminSidebar from './MainAdmin.jsx';
import './ViewAppointmentPage.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx';

const ViewAppointmentsPage = () => {
  return (
    <div>
    <Navbar/>
      <div className="admin-content">
        <AdminSidebar />
        <div className="view-appointments">
          <ViewAppointments />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ViewAppointmentsPage;
