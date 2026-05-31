import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="copyright">
                    &copy; {new Date().getFullYear()} CyborgForge. All systems operational.
                </div>
                <div className="social-links">
                    <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" aria-label="Discord"><i className="fa-brands fa-discord"></i></a>
                    <a href="#" aria-label="Microchip"><i className="fa-solid fa-microchip"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
