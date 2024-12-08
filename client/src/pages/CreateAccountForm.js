import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/hackerAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Account created successfully!');
        navigate('Dashboard');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create account.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the account.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Last Name:
        <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Email Address:
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Password:
        <input type="password" name="Password" value={formData.Password} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Confirm Password:
        <input type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} required />
      </label>
      <br />

      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;