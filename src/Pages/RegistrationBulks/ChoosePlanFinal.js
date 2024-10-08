// src/Registration.js
import React, { useState } from 'react';
import '../Registration.css'; // Import the CSS file
import PlanCard from '../../Components/PlanCard';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Database/firebaseConfig'; // Import your Firebase database configuration
import { ref, update } from 'firebase/database'; // Import the update function

const ChoosePlanFinal = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const updateActivePlan = async (userId) => {
    const userRef = ref(db, `users/${userId}`);
    try {
      await update(userRef, { activeplan: 'Premium' }); // Update active plan to Premium
      console.log('Active plan updated to Premium for user:', userId);
    } catch (error) {
      console.error('Error updating active plan:', error);
    }
  };

  const handleClick = async () => {
    const userId = localStorage.getItem('userId');
    setOpen(true);
    await updateActivePlan(userId); // Call the function to update the plan

    setTimeout(() => {
      console.log('hello');
      navigate('/signin'); // Redirect to sign-in page after 2 seconds
    }, 2000);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const plans = [
    { name: 'Mobile', price: 149, quality: 'Fair', resolution: '480p', devices: 'Mobile phone, tablet', devicesAtSameTime: 1, downloadDevices: 1 },
    { name: 'Basic', price: 199, quality: 'Good', resolution: '720p', devices: 'TV, computer, mobile phone, tablet', devicesAtSameTime: 1, downloadDevices: 1 },
    { name: 'Standard', price: 499, quality: 'Great', resolution: '1080p', devices: 'TV, computer, mobile phone, tablet', devicesAtSameTime: 2, downloadDevices: 2 },
    { name: 'Premium', price: 649, quality: 'Best', resolution: '4K + HDR', devices: 'TV, computer, mobile phone, tablet', devicesAtSameTime: 4, downloadDevices: 6 }
  ];
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
      <div className="plans-container">
      <header className="plans-header">
        <h1>Choose the plan that's right for you</h1>
      </header>
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} isPopular={plan.name === 'Basic'} />
        ))}
      </div>
      <footer>
        <button className="next-btn" onClick={handleClick}>Next</button>
      </footer>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          You are now subscribed to Netflix plan! Redirecting to Login
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ChoosePlanFinal;
