import React from 'react';
import AdminLayout from './AdminLayout';
import UpdateUserForm from './UpdateUser'; // Import the component for updating users
import Navbar from '../Components/Navbar';
import AdminSidebar from './MainAdmin';
import Footer from '../Components/Footer';
import './UpdateUserPage.css'; // Adjust the CSS file name as needed

const UpdateUserPage = () => {
  return (
    <div>
      <Navbar />
      <div className='admin-content'>
        <AdminSidebar />
        <div className="update-user-form">
          <h3 className='update-user-heading'>Update User</h3>
          <UpdateUserForm /> {/* Render the component for updating users */}
        </div>
      </div>
      <Footer />  
    </div>
  );
};

export default UpdateUserPage;
