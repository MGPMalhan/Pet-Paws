import React, {useState, useRef} from 'react';
import './Team.css'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Doctors from '../Components/Doctors';
import Nurses from '../Components/Nurses';
import logo from '../Images/logo.jpg';
import Swal from 'sweetalert2';
import axios from 'axios';

const PopupCard = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const [petImageUrl, setPetImageUrl] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('contact', contact);
      formData.append('nic', nic);
      formData.append('password', password);
      formData.append('petName', petName);
      formData.append('petImage', petImage);
      formData.append('breed', breed);
      formData.append('gender', gender);
      formData.append('age', age);

      const response = await axios.post('http://localhost:3000/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
      console.log('User created successfully:', response.data);
      setShowPopup(false);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your account has been created successfully!',
      });
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeNic = (e) => {
    setNic(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePetName = (e) => {
    setPetName(e.target.value);
  };

  const handleChangePetImage = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    console.log('Selected image file:', file); // Log the selected file to the console
    setPetImage(file); // Assuming you have a state variable to store the selected image
    setPetImageUrl(URL.createObjectURL(file));
  };


  const handleChangeBreed = (e) => {
    setBreed(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openLoginPopup = () => {
    setShowPopup(false);
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="popup-cards">
        <button onClick={onClose}>close</button>
        <div className="popup-card-content">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h3 className='logo-name'>Pet Paws</h3>
            <p className='logoslogan'>Family of vets, caring for pets</p>
          </div>
          <h2 className="titles">Sign Up</h2>
          <div className="form-containers">
            <div className="left-card">
              <h3>Guardian Details</h3>
              <input type="text" placeholder="Full Name" value={fullName} onChange={handleChangeFullName} />
              <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
              <div className="contact-nic-row">
                <input type="text" placeholder="Contact" value={contact} onChange={handleChangeContact} />
                <input type="text" placeholder="NIC" value={nic} onChange={handleChangeNic} />
              </div>
              <input type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="right-card">
              <h3>Pet Details</h3>
              <div className="pet-image">
                <label htmlFor="pet-image-input">
                  <input type="file" id="pet-image-input" accept="image/*" className="circular-input" onChange={handleChangePetImage} />
                  {petImageUrl && <p className='addpetimg'>Image Added</p>}
                  {!petImageUrl && <p className='addpetimg'>Add Pet Image</p>}
                </label>

              </div>
              <input type="text" placeholder="Pet Name" value={petName} onChange={handleChangePetName} />
              <div className="breed-gender">
                <input type="text" placeholder="Breed" value={breed} onChange={handleChangeBreed} />
                <select value={gender} onChange={handleChangeGender} className='genderdropdown'>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

              </div>
              <input type="text" placeholder="Age" value={age} onChange={handleChangeAge} />
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i> {/* Cross icon */}
          </button>
          <button className="submit-btn">Create Account</button>
          <h6 onClick={openLoginPopup}>Already have an account? Sign In</h6>
          {showLoginPopup && <LoginPopupCard onClose={closeLoginPopup} />}
        </div>
      </div>
    </form>
  );
};

const LoginPopupCard = ({ onClose, onLoginSuccess }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleLogin = async () => {
    // Get email and password values from input fields
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
      const token = response.data.token;
      // Check if the user is an admin
      if (email === 'admin@example.com' && password === 'adminPassword') {
        // Redirect to admin panel
        // window.location.href = 'http://localhost:3001/view-users'; // Replace '/admin-panel' with the route for your admin panel
        alert("wade hari")
      } else {
        // For regular users, fetch user details and handle login success
        await fetchUserDetails(token, email);
        // Display success message if login is successful
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have been successfully logged in!',
        }).then(() => {
          onClose();
          onLoginSuccess(response.data.name);
          // Redirect to another page after successful login
          // Use React Router or any navigation library for redirection
          // Example: history.push('/dashboard');
        });
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }

  };

  const fetchUserDetails = async (token, email) => {
    try {
      const response = await axios.post('http://localhost:3000/users/users/details', { email }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const fullName = response.data.fullName;
      console.log(fullName)
      setIsLoggedIn(true);
      setUserName(fullName);
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error (e.g., redirect to login page)
    }
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    onLoginSuccess(name);
  };

  return (
    <div className="popup-cards">
      <button onClick={onClose}>close</button>
      <div className="popup-card-content">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h3 className='logo-name'>Pet Paws</h3>
          <p className='logoslogan'>Family of vets, caring for pets</p>
        </div>
        <h2 className="titlesLogin">Login</h2>
        <div className="form-containers">
          <div className="login-card">
            <input type="email" ref={emailRef} placeholder='Enter Your Email' />
            <input type="password" ref={passwordRef} placeholder='Enter Your Password' />
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <button className="submit-btn" onClick={handleLogin}>Login</button> {/* Add onClick handler */}
        <h6>Forgot Password</h6>
      </div>
    </div>
  );
};


const TeamPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    // console.log("Name received:", name); // Debugging statement
    // console.log("Updated userName:", username.username); // Debugging statement
    closeLoginPopup();
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserName('');
  };


  return (
    <div>
    <nav className="navbar">
        <div className="navbar-logo">
        <img src={logo}  alt="Pet Clinic Logo" />
          {/* <span className="navbar-title">Pet Pows</span> */}
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/team" className="nav-link">Team</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/petshop" className="nav-link">Petshop</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
        {/* <div className='navbar-buttons'>
          <nav>
            <ul>
              {!isLoggedIn && (

                <button className="btn" onClick={openLoginPopup}>Login</button>

              )}
              {!isLoggedIn && (

                <button className="btn btn-primary" onClick={openPopup}>Create Account</button>

              )}
              {isLoggedIn && (

                <span className="navbar-welcome">Welcome, </span>

              )}
            </ul>
          </nav>
          {showPopup && <PopupCard onClose={closePopup} />}
          {showLoginPopup && <LoginPopupCard onClose={closeLoginPopup} onLoginSuccess={handleLoginSuccess} />}
        </div> */}
      </nav>
    <div className="team-page">
      <h1 className="team-title">Highly Experienced and Qualified</h1>
      <h2 className="subtitle">Meet the Team</h2>
      <p className="team-description">
        Welcome to the compassionate and dedicated veterinary team at Pet Paws Animal Hospital, where we prioritize the health and well-being of your beloved pets. Our team is comprised of highly skilled and experienced professionals who share a deep love for animals and a commitment to providing top-notch veterinary care.
      </p>
      <div className="team-image">
        <img src="https://thumbs.dreamstime.com/b/veterinarian-team-cute-dogs-care-vet-clinic-vector-illustration-veterinary-different-breeds-149058967.jpg"></img>
      </div>
    </div>
    <Doctors/>
    <Nurses/>
    <Footer/>
    </div>


  );
}



export default TeamPage;


