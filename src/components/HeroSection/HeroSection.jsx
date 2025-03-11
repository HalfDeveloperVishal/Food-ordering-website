import React from 'react';
import './HeroSection.css'; // Import your CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Delicious Food, Delivered</h1>
        <p>Order from the best local restaurants</p>
        <div className="search-bar">
          <input type="text" placeholder="Search Food..." className="search-input" />
          <button className="search-button">Search..</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;