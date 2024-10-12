import React from 'react';
import './Footer.css'; // Ensure you have the correct path

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are dedicated to providing the best movie search experience. Explore, discover, and enjoy movies with us.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:shafayetullah200119@gmail.com">shafayetullah200119@gmail.com</a></p>
                    <p>Phone: +880 182 974 2139</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/shafayetullah.ramim/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://x.com/2219Ramim69667" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/ramimshafayetullah/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
