// src/Registration.js
import React from 'react';
import '../Registration.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const ChoosePlanPage1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register/plan/subscribe');
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
          <i class="fa-regular fa-circle-check" style={{fontSize: '4vw'}}></i>
          <p>STEP 3 OF 4</p>
          <h1>Choose your plan.</h1>
          <div style={{textAlign: 'start',marginLeft: '10%'}}>
          <p><i class="fa-solid fa-check" style={{fontSize: '2vw',marginRight: '10px'}}></i>No commitments, cancel anytime.</p>
          <p><i class="fa-solid fa-check" style={{fontSize: '2vw',marginRight: '10px'}}></i>
          Everything on Netflix for one
          low price.</p>
          <p><i class="fa-solid fa-check" style={{fontSize: '2vw',marginRight: '10px'}}></i>
          No ads and no extra fees. Ever.</p>
            
            </div> 
          <button onClick={handleClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlanPage1;
