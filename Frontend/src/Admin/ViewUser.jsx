import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewUsers.css';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/users');
        setUsers(response.data);


      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdate = async (id) => {
    try {
      // Perform the update operation here, for example, redirect to an update page
      console.log(`Updating user with id ${id}`);
      const updateUrl = `../update-user/${id}`;
      window.location.href = updateUrl;
      // You can use history.push() to navigate to the update page
      // history.push(`/update-user/${id}`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      console.log(`Deleting user with id ${_id}`);
      await axios.delete(`http://localhost:3000/users/users/${_id}`);
      // Update the users state after deletion
      setUsers(prevUsers => prevUsers.filter(user => user._id !== _id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div className="view-users">
      <h3 className='adminusertitle'>Users</h3>
      <table className="users-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Contact</th>
            <th>NIC</th>
            <th>Pet Image</th> 
            <th>Pet Name</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.contact}</td>
              <td>{user.nic}</td>
              <td className="pet-image-cell">
                <img src={`http://localhost:3000/uploads/${user.petImage}`} alt={user.petName} className="pet-image" />
              </td>
              <td>{user.petName}</td>
              <td>{user.breed}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => handleUpdate(user._id)} className='update'>Update</button>
              </td>
              <td>
                <button onClick={() => handleDelete(user._id)} className='delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
