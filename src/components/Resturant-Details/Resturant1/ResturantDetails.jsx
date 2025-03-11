// RestaurantDetails.js
import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import './ResturantDetails.css';
import CategoryTabs from './CategoryTabs';
import { CartContext } from '../../../CartContext'; 
import { useEffect } from 'react';

const RestaurantDetails = () => {
  const location = useLocation();
  const { restaurant } = location.state;
  const { addToCart } = useContext(CartContext); // Use CartContext

  if (!restaurant) {
    return (
      <div className="restaurant-details-page">
        <Link to="/restaurant" className="back-link">
          ← Back to Restaurants
        </Link>
        <p>Restaurant not found.</p>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    addToCart(item); // Call addToCart from CartContext
  };


   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top
    }, []);

  return (
    <div className="restaurant-details-page">
      <Link to="/restaurant" className="back-link">
        ← Back to Restaurants
      </Link>
      <div className="restaurant-card">
        <img className='restaurant-image' src={restaurant.image} alt={restaurant.name} />
        
        <div className="restaurant-details">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <div className="restaurant-info">
            <div>
              <span className="cuisine">{restaurant.cuisine}</span>
              <p className="delivery-time">
                {restaurant.deliveryTime} delivery time
              </p>
            </div>
            <div>
              <span className="rating">
                <StarFill className="star-icon" /> {restaurant.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <CategoryTabs categories={restaurant.categories} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default RestaurantDetails;