import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewAppointment.css'

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/appointments/');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdate = async (id) => {
    try {
      console.log(`Updating appointment with id ${id}`);
      const updateUrl = `../update-appointment/${id}`;
      window.location.href = updateUrl;
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      console.log(`Deleting appointment with id ${_id}`);
      await axios.delete(`http://localhost:3000/appointments/${_id}`);
      // Update the appointments state after deletion
      setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== _id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };
  

  return (
    <div className="view-appointments">
      <h3 className='adminappointmenttitle'>Appointments</h3>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Pet Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Service</th>
            <th>Location</th>
            <th>Note</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{appointment.ownerName}</td>
              <td>{appointment.petName}</td>
              <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.service}</td>
              <td>{appointment.location}</td>
              <td>{appointment.note.substring(0,50)}</td>
              <td>
                <button onClick={() => handleUpdate(appointment._id)} className='update'>Update</button>
             </td>
             <td>
                <button onClick={() => handleDelete(appointment._id)} className='delete'>Delete</button>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointments;
