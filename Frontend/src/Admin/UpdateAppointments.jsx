import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateAppointment.css';
import Swal from 'sweetalert2';


const UpdateAppointment= () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({
    ownerName: '',
    petName: '',
    appointmentDate: '',
    appointmentTime: '',
    doctor: '',
    service: '',
    location: '',
    note: ''
  });

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/appointments/${id}`);
        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching appointment:', error);
      }
    };
    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/appointments/${id}`, appointment);
      
    // Display SweetAlert success message
    Swal.fire({
      icon: 'success',
      title: 'Appointment Updated',
      text: 'Your appointment has been successfully updated!',
    }).then(() => {
      // Redirect to the view appointment page
      window.location.href = '/view-appointment';
    });
  
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };
  

  return (
    <div>
      <h2>Update Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Owner Name:
          <input type="text" name="ownerName" value={appointment.ownerName} onChange={handleChange} />
        </label>
        <label>
          Pet Name:
          <input type="text" name="petName" value={appointment.petName} onChange={handleChange} />
        </label>
        <div className="row">
          <label>
            Appointment Date:
            <input type="date" name="appointmentDate" value={appointment.appointmentDate} onChange={handleChange} id="appointmentDate" />
          </label>
          <label>
            Appointment Time:
            <input type="time" name="appointmentTime" value={appointment.appointmentTime} onChange={handleChange} id="appointmentTime" />
          </label>
        </div>
        <label>
          Doctor:
          <select
            name="doctor"
            value={appointment.doctor}
            onChange={handleChange}
            className="select-input"
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
            <option value="Dr. Brown">Dr. Brown</option>
            <option value="Dr. Davis">Dr. Davis</option>
            <option value="Dr. Miller">Dr. Miller</option>
            <option value="Dr. Wilson">Dr. Wilson</option>
            <option value="Dr. Moore">Dr. Moore</option>
            <option value="Dr. Taylor">Dr. Taylor</option>
            <option value="Dr. Anderson">Dr. Anderson</option>
          </select>
        </label>
        <label>
  Service:
  <select
    name="service"
    value={appointment.service}
    onChange={handleChange}
    className="select-input"
    required
  >
    <option value="">Select a service</option>
    <option value="Wellness & preventive Care">Wellness & preventive Care</option>
    <option value="Dentistry">Dentistry</option>
    <option value="Diagnostics">Diagnostics</option>
    <option value="Surgery">Surgery</option>
  </select>
</label>

        <label>
          Location:
          <select
            name="location"
            value={appointment.location}
            onChange={handleChange}
            className="select-input"
            required
          >
            <option value="">Select Location</option>
            <option value="Main Clinic">Main Clinic</option>
            <option value="Downtown Clinic">Downtown Clinic</option>
            <option value="Northside Clinic">Northside Clinic</option>
            <option value="Southside Clinic">Southside Clinic</option>
            <option value="Eastside Clinic">Eastside Clinic</option>
            <option value="Westside Clinic">Westside Clinic</option>
            <option value="Central Clinic">Central Clinic</option>
            <option value="Riverside Clinic">Riverside Clinic</option>
            <option value="Hilltop Clinic">Hilltop Clinic</option>
            <option value="Valley Clinic">Valley Clinic</option>
          </select>
        </label>
        <label>
          Note:
          <textarea name="note" value={appointment.note} onChange={handleChange} id="note"/>
        </label>
        <button type="submit">Update Appointment</button>
      </form>
    </div>
  );
  
};

export default UpdateAppointment;
