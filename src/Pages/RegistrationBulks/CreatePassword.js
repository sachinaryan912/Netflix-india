// src/Registration.js
import React from 'react';
import '../Registration.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const CreatePassword = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register/plan');
  };
  return (
    <div className='reg'>
      <div className="header">
        <img 
          alt="Netflix Logo" 
          height="45" 
          src="../../assets/images/logo.png" 
          width="150" 
        />
        <a href="#">Sign In</a>
      </div>
      <div className="container">
        <div className="content">
          <p>STEP 2 OF 4</p>
          <h1>Create a password to start your membership</h1>
          <p>Just a few more steps and you're done!
          We hate paperwork, too.</p>
          
          <input placeholder="Enter your email" type="email" />
          <input placeholder="Enter your password" type="password" />

          <button onClick={handleClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
