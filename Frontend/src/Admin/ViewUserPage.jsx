import React from 'react';
import ViewUsers from '../Admin/ViewUser.jsx'; // Import the ViewUsers component
import AdminSidebar from './MainAdmin.jsx';
import './ViewUsersPage.css'; // You can create and import a CSS file for styling if needed
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

const ViewUsersPage = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-content">
        <AdminSidebar />
        <div className="view-users">
          <ViewUsers /> {/* Render the ViewUsers component */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewUsersPage;
