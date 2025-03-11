// RestaurantListing.js
import React from "react";
import { Link } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import "./ResturantListing.css";
import Picture1 from "./Picture1.jpeg";
import Picture2 from "./Picture2.jpeg";
import Picture3 from "./Picture3.jpeg";
import Picture4 from "./Picture4.jpeg";
import Pic1 from './Pic1.jpeg'
import Pic2 from './Pic2.jpeg'
import Pic3 from './Pic3.jpeg'
import Pic21 from './Pic21.jpeg'
import Pic22 from './Pic22.jpeg'
import Pic23 from './Pic23.jpeg'
import Pic31 from './Pic31.jpeg'
import Pic32 from './Pic32.jpeg'
import Pic33 from './Pic33.jpeg'
import Pic41 from './Pic41.jpeg'
import Pic42 from './Pic42.jpeg'
import Pic43 from './Pic43.jpeg'
import Sides1 from './Sides1.jpeg'
import Sides2 from './Sides2.jpeg'
import Sides3 from './Sides3.jpeg'
import Sides4 from './Sides4.jpeg'
import Sides5 from './Sides5.jpeg'
import Sides6 from './Sides6.jpeg'

const RestaurantListing = () => {
  const restaurants = [
   {
         name: "Burger Palace",
         cuisine: "American",
         rating: 4.5,
         deliveryTime: "20-30 min",
         image: Picture1,
         categories: [
           {
             id: 1, // Unique category ID
             name: "Burgers",
             items: [
               {
                 id: 101, // Unique item ID
                 name: "Classic Burger",
                 price: 8.99,
                 image: Pic1,
                 description:
                   "A juicy beef patty with melted cheese, crisp lettuce, tomato, onion, and pickles on a toasted bun.",
               },
               {
                 id: 102, // Unique item ID
                 name: "Cheeseburger",
                 price: 9.99,
                 image: Pic2,
                 description: "A classic burger with your choice of cheese.",
               },
               {
                 id: 103, // Unique item ID
                 name: "Bacon Cheeseburger",
                 price: 10.99,
                 image: Pic3,
                 description: "A cheeseburger topped with crispy bacon.",
               },
             ],
           },
           {
             id: 2, // Unique category ID
             name: "Sides",
             items: [
               {
                 id: 1, // Unique item ID
                 name: "French Fries",
                 price: 10.99,
                 image: Sides1,
                 description: "A classic and versatile side dish.",
               },
               {
                 id: 2, // Unique item ID
                 name: "Onion Rings",
                 price: 3.99,
                 image: Sides2,
                 description: "Crispy and flavorful.",
               },
               {
                 id: 3, // Unique item ID
                 name: "Sweet Potato Fries",
                 price: 10.99,
                 image: Sides3,
                 description: "A healthier alternative to French fries.",
               },
               {
                 id: 4, // Unique item ID
                 name: "Mashed Potatoes",
                 price: 4.99,
                 image: Sides4,
                 description: "Creamy and comforting.",
               },
               {
                 id: 5, // Unique item ID
                 name: "Garlic Bread",
                 price: 4.99,
                 image: Sides5,
                 description: "Buttery and garlicky.",
               },
               {
                 id: 6, // Unique item ID
                 name: "Side Salad",
                 price: 4.99,
                 image: Sides6,
                 description: "A refreshing and healthy option.",
               },
             ],
           },
         ],
       },
       {
         name: "Pizza Heaven",
         cuisine: "Italian",
         rating: 4.7,
         deliveryTime: "25-35 min",
         image: Picture2,
         categories: [
           {
             id: 3, // Unique category ID
             name: "Pizza",
             items: [
               {
                 id: 110, // Unique item ID
                 name: "Margherita Pizza",
                 price: 8.99,
                 image: Pic21,
                 description:
                   "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
               },
               {
                 id: 111, // Unique item ID
                 name: "Pepperoni Pizza",
                 price: 9.99,
                 image: Pic22,
                 description:
                   "A pizza topped with pepperoni and mozzarella cheese.",
               },
               {
                 id: 112, // Unique item ID
                 name: "Hawaiian Pizza",
                 price: 10.99,
                 image: Pic23,
                 description:
                   "A controversial pizza topped with ham, pineapple, and mozzarella cheese.",
               },
             ],
           },
           {
             id: 2, // Unique category ID
             name: "Sides",
             items: [
               {
                 id: 1, // Unique item ID
                 name: "French Fries",
                 price: 10.99,
                 image: Sides1,
                 description: "A classic and versatile side dish.",
               },
               {
                 id: 2, // Unique item ID
                 name: "Onion Rings",
                 price: 3.99,
                 image: Sides2,
                 description: "Crispy and flavorful.",
               },
               {
                 id: 3, // Unique item ID
                 name: "Sweet Potato Fries",
                 price: 10.99,
                 image: Sides3,
                 description: "A healthier alternative to French fries.",
               },
               {
                 id: 4, // Unique item ID
                 name: "Mashed Potatoes",
                 price: 4.99,
                 image: Sides4,
                 description: "Creamy and comforting.",
               },
               {
                 id: 5, // Unique item ID
                 name: "Garlic Bread",
                 price: 4.99,
                 image: Sides5,
                 description: "Buttery and garlicky.",
               },
               {
                 id: 6, // Unique item ID
                 name: "Side Salad",
                 price: 4.99,
                 image: Sides6,
                 description: "A refreshing and healthy option.",
               },
             ],
           },
         ],
       },
       {
         name: "Sushi World",
         cuisine: "Japanese",
         rating: 4.8,
         deliveryTime: "30-40 min",
         image: Picture3,
         categories: [
           {
             id: 5, // Unique category ID
             name: "Sushi",
             items: [
               {
                 id: 119, // Unique item ID
                 name: "Nigiri",
                 price: 8.99,
                 image: Pic31,
                 description:
                   "A small ball of rice topped with a slice of raw fish.",
               },
               {
                 id: 120, // Unique item ID
                 name: "Maki",
                 price: 9.99,
                 image: Pic32,
                 description:
                   "A roll of rice and seaweed filled with fish, vegetables, or other ingredients.",
               },
               {
                 id: 121, // Unique item ID
                 name: "Sashimi",
                 price: 10.99,
                 image: Pic33,
                 description: "Thinly sliced raw fish served without rice.",
               },
             ],
           },
           {
             id: 2, // Unique category ID
             name: "Sides",
             items: [
               {
                 id: 1, // Unique item ID
                 name: "French Fries",
                 price: 10.99,
                 image: Sides1,
                 description: "A classic and versatile side dish.",
               },
               {
                 id: 2, // Unique item ID
                 name: "Onion Rings",
                 price: 3.99,
                 image: Sides2,
                 description: "Crispy and flavorful.",
               },
               {
                 id: 3, // Unique item ID
                 name: "Sweet Potato Fries",
                 price: 10.99,
                 image: Sides3,
                 description: "A healthier alternative to French fries.",
               },
               {
                 id: 4, // Unique item ID
                 name: "Mashed Potatoes",
                 price: 4.99,
                 image: Sides4,
                 description: "Creamy and comforting.",
               },
               {
                 id: 5, // Unique item ID
                 name: "Garlic Bread",
                 price: 4.99,
                 image: Sides5,
                 description: "Buttery and garlicky.",
               },
               {
                 id: 6, // Unique item ID
                 name: "Side Salad",
                 price: 4.99,
                 image: Sides6,
                 description: "A refreshing and healthy option.",
               },
             ],
           },
         ],
       },
       {
         name: "Taco Fiesta",
         cuisine: "Mexican",
         rating: 4.3,
         deliveryTime: "15-25 min",
         image: Picture4,
         categories: [
           {
             id: 7, // Unique category ID
             name: "Tacos",
             items: [
               {
                 id: 128, // Unique item ID
                 name: "Al Pastor Taco",
                 price: 8.99,
                 image: Pic41,
                 description:
                   "Marinated pork cooked on a vertical spit and served on a corn tortilla with onions and cilantro.",
               },
               {
                 id: 129, // Unique item ID
                 name: "Carnitas Taco",
                 price: 9.99,
                 image: Pic42,
                 description:
                   "Slow-cooked pork shoulder served on a corn tortilla with salsa and onions.",
               },
               {
                 id: 130, // Unique item ID
                 name: "Barbacoa Taco",
                 price: 10.99,
                 image: Pic43,
                 description:
                   "Beef, lamb, or goat cooked until tender and served on a corn tortilla with salsa and onions.",
               },
             ],
           },
           {
             id: 2, // Unique category ID
             name: "Sides",
             items: [
               {
                 id: 1, // Unique item ID
                 name: "French Fries",
                 price: 10.99,
                 description: "A classic and versatile side dish.",
               },
               {
                 id: 2, // Unique item ID
                 name: "Onion Rings",
                 price: 3.99,
                 description: "Crispy and flavorful.",
               },
               {
                 id: 3, // Unique item ID
                 name: "Sweet Potato Fries",
                 price: 10.99,
                 description: "A healthier alternative to French fries.",
               },
               {
                 id: 4, // Unique item ID
                 name: "Mashed Potatoes",
                 price: 4.99,
                 description: "Creamy and comforting.",
               },
               {
                 id: 5, // Unique item ID
                 name: "Garlic Bread",
                 price: 4.99,
                 description: "Buttery and garlicky.",
               },
               {
                 id: 6, // Unique item ID
                 name: "Side Salad",
                 price: 4.99,
                 description: "A refreshing and healthy option.",
               },
             ],
           }, {
             id: 2, // Unique category ID
             name: "Sides",
             items: [
               {
                 id: 1, // Unique item ID
                 name: "French Fries",
                 price: 10.99,
                 image: Sides1,
                 description: "A classic and versatile side dish.",
               },
               {
                 id: 2, // Unique item ID
                 name: "Onion Rings",
                 price: 3.99,
                 image: Sides2,
                 description: "Crispy and flavorful.",
               },
               {
                 id: 3, // Unique item ID
                 name: "Sweet Potato Fries",
                 price: 10.99,
                 image: Sides3,
                 description: "A healthier alternative to French fries.",
               },
               {
                 id: 4, // Unique item ID
                 name: "Mashed Potatoes",
                 price: 4.99,
                 image: Sides4,
                 description: "Creamy and comforting.",
               },
               {
                 id: 5, // Unique item ID
                 name: "Garlic Bread",
                 price: 4.99,
                 image: Sides5,
                 description: "Buttery and garlicky.",
               },
               {
                 id: 6, // Unique item ID
                 name: "Side Salad",
                 price: 4.99,
                 image: Sides6,
                 description: "A refreshing and healthy option.",
               },
             ],
           },
         ],
       },
  ];

  return (
    <div className="featured-restaurants">
      <h2 className="featured-title">Featured Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <Link
            to={`/restaurant/${restaurant.name}`}
            state={{ restaurant }}
            key={index}
          >
            <div className="restaurant-card">
              <img
                className="restaurant-image"
                src={restaurant.image}
                alt={restaurant.name}
              />

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
          </Link>
        ))}
      </div>
      <div className="view-all-button-container">
        <Link to="/restaurant">
          <button className="view-all-button">View All Restaurants</button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantListing;
