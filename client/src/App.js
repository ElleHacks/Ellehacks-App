import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HackerApplicationForm from './pages/HackerApplicationForm';
import Hacker from './pages/Hacker';
import CreateAccountForm from './pages/CreateAccountForm'; 
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hacker-application" element={<HackerApplicationForm />} />
        <Route path="/hacker" element={<Hacker />} />
        <Route path="/create-account" element={<CreateAccountForm />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/user/:userID" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;