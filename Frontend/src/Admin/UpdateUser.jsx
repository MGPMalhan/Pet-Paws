import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    nic: '', // Added NIC field
    password: '', // Added password field
    petName: '', // Added petName field
    petImage: '', // Added petImage field
    breed: '', // Added breed field
    gender: '', // Added gender field
    age: '' // Added age field
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/users/${id}`, user);
      
      // Display SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'User Updated',
        text: 'Your user details have been successfully updated!',
      }).then(() => {
        // Redirect to the view user page
        window.location.href = '/view-users';
      });

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="contact" value={user.contact} onChange={handleChange} />
        </label>
        <label>
          NIC:
          <input type="text" name="nic" value={user.nic} onChange={handleChange} />
        </label>
        <label>
          Pet Name:
          <input type="text" name="petName" value={user.petName} onChange={handleChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={user.breed} onChange={handleChange} />
        </label>
        <label>
        Gender:
        <select name="gender" value={user.gender} onChange={handleChange}  className="select-input">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        </label>
        <label>
          Age:
          <input type="text" name="age" value={user.age} onChange={handleChange} />
        </label>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
