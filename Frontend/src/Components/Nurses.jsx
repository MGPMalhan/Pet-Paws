import React from 'react';
import '../Pages/Team.css'; // Import the CSS file for styling
import './Doctors.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TeamPage = () => {
  return (
    <div>
      <div className="team-page">
        <h1 className="team-title">Qualified Professional</h1>
        <h2 className="subtitle">Nurses & Staff</h2>
        <div className="card-row">
          <div className="card">
            <img src="https://highcroftvet.co.uk/wp-content/uploads/sites/9/2021/12/Jenna-Elliott.jpg"  alt="Doctor 1" style={{height:'300px'}}/>
            <p className="name">Edward Williumson</p>
            <p className="position">Nurse</p>
          </div>
          <div className="card">
            <img src="https://www.severnedgevets.co.uk/sites/default/files/blog/sophiefoster.png" alt="Doctor 2" />
            <p className="name">Nick Santosa</p>
            <p className="position">Nurse</p>
          </div>
          <div className="card">
            <img src="https://ucreaseheath.ac.uk/wp-content/uploads/elementor/thumbs/ucr-vet-nursing-banner-pku6mtz4hw0sk5tu3dom89xxv55g325xdaunnsyxq8.jpg" alt="Doctor 3"  style={{height:'300px'}}/>
            <p className="name">Emaliy Dickinsonn</p>
            <p className="position">Nurse</p>
          </div>
          <div className="card">
            <img src="https://plvetv3.storage.googleapis.com/media/images/DSC_2686b.d6d7b40f.fill-370x360.jpg" alt="Doctor 4" style={{height:'295px'}} />
            <p className="name">Andrea scherpowa</p>
            <p className="position">Attendant </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
