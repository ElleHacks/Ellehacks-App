import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';
import email from '../assets/email.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';

const Login = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: ''
  });
  const [showPassword, setShowPassword] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleRegisterRedirect = () => {
    navigate('/register');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('token', result.token);
        const userID = result.userID; 
        navigate(`/user/${userID}`);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="login-container">
     <div className="logo-container">
     <img src={logo} alt="Ellehacks Logo" className="logo" />
       <h1 id="WelcomeEllehacks">Ellehacks</h1>
     </div>
     <div className="form-container">
       <form onSubmit={handleSubmit}>
         <div id="whiteBackgroud">
         <h3 id="WelcomeEllehacks">Welcome to Ellehacks!</h3>
           <div id="Email">
               <label htmlFor="Email"></label>
               <input
                   type="email"
                   id="Email"
                   name="Email"
                   value={formData.Email}
                   onChange={handleChange}
                   required
                   placeholder="Email" 
               />
           </div>
           <div className="password-container">
               <label htmlFor="Password"></label>
               <input
                   type={showPassword ? 'text' : 'password'}
                   id="Password"
                   name="Password"
                   value={formData.Password}
                   onChange={handleChange}
                   required
                   placeholder="Password"
               />
              <button id="showPassword" type="button" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
           </div>
       </div>
       <button id="submit" type="submit">Login</button>
       <hr/> 
       <h5>Or login with</h5>
       <div className="social-login-buttons">
         <button className="social-button">
           <img src={email} alt="Email Icon" className="button-icon" />
           Continue with Email
         </button>
         <button className="social-button">
           <img src={gmail} alt="Gmail Icon" className="button-icon" />
           Continue with Gmail
         </button>
         <button className="social-button">
           <img src={github} alt="GitHub Icon" className="button-icon" />
           Continue with GitHub
         </button>
       </div>
       <hr/> 
       <h5>Haven't created an account yet? click here to Register</h5>
       <button id="register" type="button" onClick={handleRegisterRedirect}>Register</button>
       </form>
     </div>
   </div>
 );
};

export default Login;