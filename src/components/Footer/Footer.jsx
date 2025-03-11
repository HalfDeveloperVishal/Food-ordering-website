import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>DesiDhaba</h3>
          <p>Order delicious food online with fast delivery to your doorstep.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/restaurants">Restaurants</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Food Street<br />Foodville, FD 12345</p>
          <p>vs9771826941@gmail.com</p>
          <p>Phone: +91 6206390989</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 FoodHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;