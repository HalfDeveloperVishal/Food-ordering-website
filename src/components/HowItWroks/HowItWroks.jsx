import React from 'react';
import './HowItWroks.css'; // Import your CSS file

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">Choose a Restaurant</h3>
          <p className="step-description">
            Browse through our selection of restaurants and cuisines.
          </p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">Select Your Meals</h3>
          <p className="step-description">
            Explore menus and add your favorite dishes to your cart.
          </p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">Delivery or Pickup</h3>
          <p className="step-description">
            Get your food delivered to your door or pick it up yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;