import React, { useState } from 'react';
import './AddAppointment.css'
import axios from 'axios'; // Import Axios
import Swal from 'sweetalert2';


const AddAppointmentForm = ({ onSubmit }) => {
    const [ownerName, setOwnerName] = useState('');
    const [petName, setPetName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [note, setNote] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/appointments/appointments', {
          ownerName,
          petName,
          appointmentDate,
          appointmentTime,
          doctor,
          service,
          location,
          note,
        });
        onSubmit(response.data);
  
        // Display SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Appointment Added',
          text: 'Your appointment has been successfully added!',
        });
  
        // Clear form fields after successful submission
        setOwnerName('');
        setPetName('');
        setAppointmentDate('');
        setAppointmentTime('');
        setDoctor('');
        setService('');
        setLocation('');
        setNote('');
      } catch (error) {
        console.error('Error adding appointment:', error);
        // Display error message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Appointment Added',
          text: 'Your appointment has been successfully added!',
        });
      }
    };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ownerName">Owner Name:</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="petName">Pet Name:</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </div>
      <div className="row">
  <div>
    <label htmlFor="appointmentDate">Appointment Date:</label>
    <input
      type="date"
      id="appointmentDate"
      value={appointmentDate}
      onChange={(e) => setAppointmentDate(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="appointmentTime">Appointment Time:</label>
    <input
      type="time"
      id="appointmentTime"
      value={appointmentTime}
      onChange={(e) => setAppointmentTime(e.target.value)}
      required
    />
  </div>
</div>

    <div>
      <label htmlFor="doctor">Doctor:</label>
      <select
        id="doctor"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
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
    </div>

      <div className="select-container">
        <label htmlFor="service" className="select-label">Service:</label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="select-input"
          required
        >
          <option value="">Select a service</option>
          <option value="Wellness & preventive Care" className="select-option">Wellness & preventive Care</option>
          <option value="Dentistry" className="select-option">Dentistry</option>
          <option value="Diagnostics" className="select-option">Diagnostics</option>
          <option value="Surgery" className="select-option">Surgery</option>
        </select>
      </div>
      <div>
      <label htmlFor="location">Location:</label>
      <select
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='select-input'
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
    </div>
      <div>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button type="submit" className='submit'>Add Appointment</button>
    </form>
  );
};

export default AddAppointmentForm;
