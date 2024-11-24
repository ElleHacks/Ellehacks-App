import React, { useState } from 'react';
import axios from 'axios';

const Hacker = () => {
  const [hackerData, setHackerData] = useState({
    FirstName: '', 
    LastName: '', 
    Pronouns: '',
    Email: '', 
    DietaryRestrictions: '', 
    ShirtSize: ''
  });

  const handleChange = (e) => {
    setHackerData({
      ...hackerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/hacker', hackerData); 
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="FirstName" value={hackerData.FirstName} onChange={handleChange} required />
      </div>
     <div>
        <label>Last Name:</label>
        <input type="text" name="LastName" value={hackerData.LastName} onChange={handleChange} required />
    </div>
    <div>
        <label>Pronouns:</label>
        <input type="text" name="Pronouns" value={hackerData.Pronouns} onChange={handleChange} required />
    </div>
    <div>
        <label>Email:</label>
        <input type="email" name="Email" value={hackerData.Email} onChange={handleChange} required />
    </div>
    <div>
        <label>Dietary Restrictions:</label>
        <input type="text" name="DietaryRestrictions" value={hackerData.DietaryRestrictions} onChange={handleChange} required />
    </div>
    <div>
        <label>Shirt Size:</label>
        <input type="text" name="ShirtSize" value={hackerData.ShirtSize} onChange={handleChange} required />
    </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Hacker;