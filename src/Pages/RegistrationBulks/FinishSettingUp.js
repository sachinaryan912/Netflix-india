import React from 'react';
import '../Registration.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const FinishSettingUp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
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
        <div className="content1">
            <img src='../../assets/logos/fsetting_ic.png' />
          <p>STEP 1 OF 4</p>
          <h1>Finish setting up your account</h1>
          <p>Netflix is personalised for you.
          Create a password to watch on any device at any time.</p>
          <button onClick={handleClick} style={{height: '55px'}}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FinishSettingUp;
