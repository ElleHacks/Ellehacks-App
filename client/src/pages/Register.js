// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import logo from '../assets/logo.png';

const Register = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PreferredName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
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

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
        alert('Passwords do not match');
        return;
      }

    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create account.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the account.');
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
            <div className="name-container">
              <div id="FirstName">
                <label htmlFor="FirstName"></label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name" 
                />
              </div>
              <div id="LastName">
                <label htmlFor="LastName"></label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name" 
                />
              </div>
            </div>
            <div id="PreferredName">
              <label htmlFor="PreferredName"></label>
              <input
                type="text"
                id="PreferredName"
                name="PreferredName"
                value={formData.PreferredName}
                onChange={handleChange}
                placeholder="Preferred Name" 
              />
            </div>
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
            </div>
            <div className="password-container">
              <label htmlFor="ConfirmPassword"></label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="ConfirmPassword"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-Enter Password"
              />
              <button id="showPassword" type="button" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button id="submit" type="submit">Register</button>
          <hr/> 
          <h5>Or click here to login</h5>
          <button id="login" type="button" onClick={handleLoginRedirect}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;