import React, { useState, useEffect } from 'react';
import './LoginCard.css'; // Import CSS styles
import { useNavigate } from 'react-router-dom';
import { auth } from '../Database/firebaseConfig'; // Import your Firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the sign-in function

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Load email from local storage if available
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true); // Set rememberMe to true if email is found
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Sign in with Firebase
            await signInWithEmailAndPassword(auth, email, password);
            console.log(`Signed in as: ${email}`);

            if (rememberMe) {
                localStorage.setItem('userEmail', email);
            } else {
                localStorage.removeItem('userEmail'); 
            }
            navigate('/manageProfile'); 

        } catch (error) {
            console.error('Error signing in:', error);
            alert(`Error: ${error.message}`); // Show error message
        }
    };

    return (
        <div className="container">
            <div className="signin-box">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email or mobile number"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                <div className="or">OR</div>
                <button className="secondary-button">Use a sign-in code</button>
                <a href="#">Forgot password?</a>
                <div className="remember-me">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div>
                    New to Netflix? <a href="#">Sign up now.</a>
                </div>
                <div className="recaptcha">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;
