import React from 'react';
import { Link } from 'react-router-dom';
import './MainAdmin.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-title">PET PAWS</h3>
      <ul className="sidebar-menu">
      <li className="sidebar-item">
          <Link to="/view-users" className="sidebar-link">View All Users</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/add-appointment" className="sidebar-link">Add Appointment</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/view-appointment" className="sidebar-link">View Appointments</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
