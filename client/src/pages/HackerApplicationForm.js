import React, { useState } from 'react';
import axios from 'axios';

const HackerApplicationForm = () => {
  const [formData, setFormData] = useState({
    Understand: false,
    FirstName: '',
    LastName: '',
    PreferredFirstName: '',
    Pronouns: '',
    Age: '',
    Hackathons: '',
    Email: '',
    PhoneNumber: '',
    Country: '',
    Province: '',
    EducationLevel: '',
    GraduationYear: '',
    School: '',
    YorkID: '',
    FieldOfStudy: '',
    Resume: '',
    PermissionToShareResume: false,
    LinkedinProfile: '',
    DietaryRestrictions: '',
    ShirtSize: '',
    InPersonHackathon: false,
    RequireOvernightAccommodations: false,
    MLHCodeOfConduct: false,
    AuthorizeShareInfoWithMLH: false,
    AuthorizeMLHEmails: false,
    AdditionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Resume: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5001/api/hackerApplication', formData); 
      console.log(response.data);

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the application.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Understand:
        <input type="checkbox" name="Understand" checked={formData.Understand} onChange={handleChange} />
      </label>
      <br />

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
        Preferred First Name:
        <input type="text" name="PreferredFirstName" value={formData.PreferredFirstName} onChange={handleChange} />
      </label>
      <br />

      <label>
        Pronouns:
        <input type="text" name="Pronouns" value={formData.Pronouns} onChange={handleChange} />
      </label>
      <br />

      <label>
        Age:
        <input type="number" name="Age" value={formData.Age} onChange={handleChange} required />
      </label>
      <br />

      <label>
        How many hackathons:
        <input type="number" name="Hackathons" value={formData.Hackathons} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Phone Number:
        <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Country of residence:
        <input type="text" name="Country" value={formData.Country} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Province/State:
        <input type="text" name="Province" value={formData.Province} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Current Level of Education:
        <input type="text" name="EducationLevel" value={formData.EducationLevel} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Expected graduation year:
        <input type="text" name="GraduationYear" value={formData.GraduationYear} onChange={handleChange} required />
      </label>
      <br />

      <label>
        What school did you attend:
        <input type="text" name="School" value={formData.School} onChange={handleChange} required />
      </label>
      <br />

      <label>
        YorkID:
        <input type="number" name="YorkID" value={formData.YorkID} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Field of study:
        <input type="text" name="FieldOfStudy" value={formData.FieldOfStudy} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Resume:
        <input type="text" name="Resume" value={formData.Resume} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Permission to share resume and form responses:
        <input type="checkbox" name="PermissionToShareResume" checked={formData.PermissionToShareResume} onChange={handleChange} />
      </label>
      <br />

      <label>
        Linkedin Profile:
        <input type="text" name="LinkedinProfile" value={formData.LinkedinProfile} onChange={handleChange} />
      </label>
      <br />

      <label>
        Dietary Restrictions:
        <input type="text" name="DietaryRestrictions" value={formData.DietaryRestrictions} onChange={handleChange} />
      </label>
      <br />

      <label>
        Shirt size:
        <input type="text" name="ShirtSize" value={formData.ShirtSize} onChange={handleChange} required />
      </label>
      <br />

      <label>
        In person hackathon happening at York:
        <input type="checkbox" name="InPersonHackathon" checked={formData.InPersonHackathon} onChange={handleChange} />
      </label>
      <br />

      <label>
        Require overnight accommodations:
        <input type="checkbox" name="RequireOvernightAccommodations" checked={formData.RequireOvernightAccommodations} onChange={handleChange} />
      </label>
      <br />

      <label>
        MLH code of Conduct:
        <input type="checkbox" name="MLHCodeOfConduct" checked={formData.MLHCodeOfConduct} onChange={handleChange} />
      </label>
      <br />

      <label>
        Authorize to share info with MLH:
        <input type="checkbox" name="AuthorizeShareInfoWithMLH" checked={formData.AuthorizeShareInfoWithMLH} onChange={handleChange} />
      </label>
      <br />

      <label>
        Authorize MLH to send emails:
        <input type="checkbox" name="AuthorizeMLHEmails" checked={formData.AuthorizeMLHEmails} onChange={handleChange} />
      </label>
      <br />

      <label>
        Anything else we should know:
        <textarea name="AdditionalInfo" value={formData.AdditionalInfo} onChange={handleChange}></textarea>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default HackerApplicationForm;