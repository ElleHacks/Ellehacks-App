import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/UserPage.css';

const UserPage = () => {
  const { userID } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/user/${userID}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (userID) {
      fetchUser();
    }
  }, [userID]);

  return (
    <div className="user-page">
      {user ? (
        <div className="user-container">
          <h1 className="welcome-message">Welcome {user.FirstName}!</h1>
          <div className="sections">
            <div className="status right-containter section-box">
                <div className="Internal div">
                    <div id="left-float">
                     <img src={logo} alt="Ellehacks Logo" className="logo" />
                    </div>
                    <div id="right-float">
                        <h1>Status: {user.Status}</h1>
                        <button disabled={user.Status !== "Not Applied"}>
                          {user.Status === "Not Applied" ? "Apply Now" : "Applied"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="left-containter">
                <div className="website section-box">
                    <h1>Why Ellehacks?</h1>
                </div>
                <div className="PreviousProjects section-box">
                    <h1>Previous Projects</h1>
                </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPage;
