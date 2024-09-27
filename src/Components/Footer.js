import React, { useState } from 'react';
import './Footer.css'; // Import the CSS file for styles

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value === '') {
            setError('Email is required.');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission logic here
        if (!email) {
            setError('Email is required.');
        } else {
            setError('');
            // Add submission logic, e.g., API call
            alert(`Email submitted: ${email}`);
        }
    };

    return (
        <div className="footer">
            <div style={{textAlign: 'center'}}>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="email-input" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="email-input-field"
                />
                <button type="submit">Get Started <i class="fa-solid fa-chevron-right"></i></button>
                {error && <div className="error-message"><i className="fas fa-exclamation-circle"></i> {error}</div>}
            </form>
            </div>
            <div className="contact-info">
                Questions? Call <a href="tel:000-800-919-1694">000-800-919-1694</a>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Privacy</a>
                    <a href="#">Speed Test</a>
                </div>
                <div className="footer-column">
                    <a href="#">Help Centre</a>
                    <a href="#">Jobs</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Legal Notices</a>
                </div>
                <div className="footer-column">
                    <a href="#">Account</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Only on Netflix</a>
                </div>
                <div className="footer-column">
                    <a href="#">Media Centre</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            
            <div className="language-selector">
                <button>English <i className="fas fa-caret-down"></i></button>
            </div>
            <div className="region">
                Netflix India
            </div>
        </div>
    );
};

export default Footer;
