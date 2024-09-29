import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Database/firebaseConfig'; // Import Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'; // For creating user
import { ref, set } from 'firebase/database'; // For Realtime Database
import '../Registration.css';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Get the stored email from localStorage
  const storedEmail = localStorage.getItem('userEmail');

  const handleClick = async () => {
    if (!storedEmail || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, storedEmail, password);
      const user = userCredential.user;
      const userId = user.uid;
      const accountCreatedOn = new Date().toISOString();
      await set(ref(db, `users/${userId}`), {
        profiles: [
          {
              name: 'profile1',
              image: '../../assets/logos/profile1.png'
          },
          {
              name: 'profile2',
              image: '../../assets/logos/profile2.png'
          },
          {
              name: 'profile3',
              image: '../../assets/logos/profile3.png'
          }
      ],
        activeplan: '', 
        userId: userId,
        userEmail: storedEmail,
        userPassword: password,
        accountCreatedOn: accountCreatedOn
      });
      localStorage.setItem('userId', userId);

      console.log('Account created and data saved:', userId);

      // Navigate to the next page
      navigate('/register/plan');
    } catch (error) {
      console.error('Error creating account:', error);
      setError('Failed to create account. Please try again.');
    }
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
          <p>Just a few more steps and you're done! We hate paperwork, too.</p>

          <input 
            placeholder="Enter your email" 
            type="email" 
            value={storedEmail} 
            readOnly 
          />
          <input 
            placeholder="Enter your password" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button onClick={handleClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
