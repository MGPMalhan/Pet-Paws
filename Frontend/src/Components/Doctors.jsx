import React from 'react';
import '../Pages/Team.css'; // Import the CSS file for styling
import './Doctors.css'

const TeamPage = () => {
  return (
    <div>
      <div className="team-page">
        <h1 className="team-title">Highly Experienced</h1>
        <h2 className="subtitle">Doctors</h2>
        <div className="card-row">
          <div className="card">
            <img src="https://5.imimg.com/data5/BX/KU/ML/SELLER-6134433/veterinary-doctor-500x500.jpg" alt="Doctor 1" style={{height:'px'}}/>
            <p className="name">Dr. John Doe</p>
            <p className="position">Veterinarian</p>
          </div>
          <div className="card">
            <img src="https://live.staticflickr.com/8595/15636300633_ee6874c53f_z.jpg" alt="Doctor 2" />
            <p className="name">Dr. Jane Smith</p>
            <p className="position">Surgeon</p>
          </div>
          <div className="card">
            <img src="https://cdn.sanity.io/images/d075r9p6/production/51a6eb6f35614e849e234e3c0cb8baf563ccefd0-400x400.jpg?w=950&h=950&q=75&fit=max&auto=format" alt="Doctor 3"  style={{height:'295px'}}/>
            <p className="name">Dr. Michael Johnson</p>
            <p className="position">Dentist</p>
          </div>
          <div className="card">
            <img src="https://us.123rf.com/450wm/palangsi/palangsi2401/palangsi240100175/221717734-veterinarian-doctor-and-cute-dog-in-vet-clinic-asian.jpg?ver=6" alt="Doctor 4" style={{height:'295px'}} />
            <p className="name">Dr. Sarah Lee</p>
            <p className="position">Behaviorist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
