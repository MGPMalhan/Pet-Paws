import React from 'react';
import AdminSidebar from './MainAdmin.jsx';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">{children}</div>
    </div>
  );
};

export default AdminLayout;
