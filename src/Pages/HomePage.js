// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to netflix-india</h1>
                <p>development in progress...</p>
                <button className="login-button" onClick={handleLoginClick}>
                    Go to Login
                </button>
            </header>
        </div>
    );
};

export default Home;
