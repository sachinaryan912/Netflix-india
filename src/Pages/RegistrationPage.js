// src/Registration.js
import React from 'react';
import './Registration.css'; // Import the CSS file

const RegistrationPage = () => {
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
          <p>STEP 1 OF 3</p>
          <h1>Welcome back!</h1>
          <h2>Joining Netflix is easy.</h2>
          <p>Enter your password and you'll be watching in no time.</p>
          <p>Email</p>
          <p className="email">
            s@gmail.com
          </p>
          <input placeholder="Enter your password" type="password" />
          <a href="#">Forgot your password?</a>
          <button onClick={() => alert('Next step')}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
