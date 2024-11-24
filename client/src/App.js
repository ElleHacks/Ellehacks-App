import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HackerApplicationForm from './pages/HackerApplicationForm';
import Hacker from './pages/Hacker';
import CreateAccountForm from './pages/CreateAccountForm'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hacker-application" element={<HackerApplicationForm />} />
        <Route path="/hacker" element={<Hacker />} />
        <Route path="/create-account" element={<CreateAccountForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;