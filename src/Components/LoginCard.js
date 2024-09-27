import React, { useState } from 'react';
import './LoginCard.css'; // Import CSS styles

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic here
        alert(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
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
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
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
