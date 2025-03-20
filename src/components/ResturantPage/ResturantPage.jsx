// RestaurantPage.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./RestaurantPage.css";
import { StarFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useState } from "react";
import Image1 from "./ItemsImages/Image1.jpeg";
import Image2 from "./ItemsImages/Image2.jpeg";
import Image3 from "./ItemsImages/Image3.jpeg";
import Image4 from "./ItemsImages/Image4.jpeg";
import Image5 from "./ItemsImages/Image5.jpeg";
import Image6 from "./ItemsImages/Image6.jpeg";
import Image7 from "./ItemsImages/Image7.jpeg";
import Image8 from "./ItemsImages/Image8.jpeg";
import Pic1 from "./ItemsImages/Pic1.jpeg";
import Pic2 from "./ItemsImages/Pic2.jpeg";
import Pic3 from "./ItemsImages/Pic3.jpeg";
import Pic21 from "./ItemsImages/Pic21.jpeg";
import Pic22 from "./ItemsImages/Pic22.jpeg";
import Pic23 from "./ItemsImages/Pic23.jpeg";
import Pic31 from "./ItemsImages/Pic31.jpeg";
import Pic32 from "./ItemsImages/Pic32.jpeg";
import Pic33 from "./ItemsImages/Pic33.jpeg";
import Pic41 from "./ItemsImages/Pic41.jpeg";
import Pic42 from "./ItemsImages/Pic42.jpeg";
import Pic43 from "./ItemsImages/Pic43.jpeg";
import Pic51 from "./ItemsImages/Pic51.jpeg";
import Pic52 from "./ItemsImages/Pic52.jpeg";
import Pic53 from "./ItemsImages/Pic53.jpeg";
import Pic61 from "./ItemsImages/Pic61.jpeg";
import Pic62 from "./ItemsImages/Pic62.jpeg";
import Pic63 from "./ItemsImages/Pic63.jpeg";
import Pic71 from "./ItemsImages/Pic71.jpeg";
import Pic72 from "./ItemsImages/Pic72.jpeg";
import Pic73 from "./ItemsImages/Pic73.jpeg";
import Pic81 from "./ItemsImages/Pic81.jpeg";
import Pic82 from "./ItemsImages/Pic82.jpeg";
import Pic83 from "./ItemsImages/Pic83.jpeg";
import Sides1 from "./ItemsImages/Sides1.jpeg";
import Sides2 from "./ItemsImages/Sides2.jpeg";
import Sides3 from "./ItemsImages/Sides3.jpeg";
import Sides4 from "./ItemsImages/Sides4.jpeg";
import Sides5 from "./ItemsImages/Sides5.jpeg";
import Sides6 from "./ItemsImages/Sides6.jpeg";


const RestaurantPage = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const restaurants = [
    {
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "20-30 min",
      image: Image1,
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
      image: Image2,
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
      image: Image3,
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
      image: Image4,
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
    {
      name: "Curry House",
      cuisine: "Indian",
      rating: 4.6,
      deliveryTime: "15-25 min",
      image: Image5,
      categories: [
        {
          id: 9, // Unique category ID
          name: "Curry",
          items: [
            {
              id: 137, // Unique item ID
              name: "Chicken Tikka Masala",
              price: 8.99,
              image: Pic51,
              description: "A creamy tomato-based curry with chicken pieces.",
            },
            {
              id: 138, // Unique item ID
              name: "Vegetable Curry",
              price: 9.99,
              image: Pic52,
              description:
                "A curry made with a variety of vegetables, such as potatoes, carrots, peas, and cauliflower.",
            },
            {
              id: 139, // Unique item ID
              name: "Fish Curry",
              price: 10.99,
              image: Pic53,
              description: "A curry made with fish, coconut milk, and spices.",
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
      name: "Noodle Bar",
      cuisine: "Chinese",
      rating: 4.4,
      deliveryTime: "15-25 min",
      image: Image6,
      categories: [
        {
          id: 11, // Unique category ID
          name: "Noodles",
          items: [
            {
              id: 146, // Unique item ID
              name: "Ramen",
              price: 8.99,
              image: Pic61,
              description:
                "A Japanese noodle soup dish with a variety of toppings, such as pork belly, eggs, and vegetables.",
            },
            {
              id: 147, // Unique item ID
              name: "Chow Mein",
              price: 9.99,
              image: Pic62,
              description:
                "A stir-fried noodle dish with vegetables, meat, or tofu.",
            },
            {
              id: 148, // Unique item ID
              name: "Udon",
              price: 10.99,
              image: Pic63,
              description:
                "Thick Japanese wheat flour noodles, often served in a hot soup.",
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
      name: "Pasta Place",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "15-25 min",
      image: Image7,
      categories: [
        {
          id: 13, // Unique category ID
          name: "Pasta",
          items: [
            {
              id: 155, // Unique item ID
              name: "Spaghetti Carbonara",
              price: 8.99,
              image: Pic71,
              description:
                "A classic pasta dish with spaghetti, pancetta, eggs, Parmesan cheese, and black pepper.",
            },
            {
              id: 156, // Unique item ID
              name: "Spaghetti Bolognese",
              price: 9.99,
              image: Pic72,
              description: "A pasta dish with spaghetti and a meat-based sauce.",
            },
            {
              id: 157, // Unique item ID
              name: "Lasagna",
              price: 10.99,
              image: Pic73,
              description:
                "A baked pasta dish with layers of pasta, meat sauce, cheese, and vegetables.",
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
      name: "Salad Spot",
      cuisine: "Healthy",
      rating: 4.1,
      deliveryTime: "15-25 min",
      image: Image8,
      categories: [
        {
          id: 15, // Unique category ID
          name: "Salad",
          items: [
            {
              id: 164, // Unique item ID
              name: "Caesar Salad",
              price: 8.99,
              image: Pic81,
              description:
                "A salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
            },
            {
              id: 165, // Unique item ID
              name: "Greek Salad",
              price: 9.99,
              image: Pic82,
              description:
                "A salad with tomatoes, cucumbers, onions, olives, feta cheese, and a vinaigrette dressing.",
            },
            {
              id: 166, // Unique item ID
              name: "lsCaprese Salad",
              price: 10.99,
              image: Pic83,
              description:
                "A salad with tomatoes, mozzarella cheese, basil, and a balsamic vinaigrette dressing.",
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
        },,
      ],
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search on Enter key press
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  // Reset filtered restaurants when search query is empty
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredRestaurants(restaurants);
    }
  }, [searchQuery, restaurants]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);


  return (
    <div className="restaurant-listing-container">
      <h2 className="restaurant-title">Restaurants</h2>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search restaurants or cuisines..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearch}
        />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <Link
              to={`/restaurant/${restaurant.name}`}
              state={{ restaurant }}
              key={index}
              className="restaurant-link"
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
                    <span className="cuisine">{restaurant.cuisine}</span>
                    <span className="rating">
                      <StarFill className="star-icon" /> {restaurant.rating}
                    </span>
                  </div>
                  <p className="delivery-time">
                    {restaurant.deliveryTime} delivery time
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results-message">No Restaurants Found</div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
