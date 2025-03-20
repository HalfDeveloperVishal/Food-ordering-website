import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import RestaurantListing from "./components/Resturant-Listing/ResturantListing";
import HowItWorks from "./components/HowItWroks/HowItWroks";
import Footer from "./components/Footer/Footer";
import RestaurantPage from "./components/ResturantPage/ResturantPage";
import RestaurantDetails from "./components/Resturant-Details/Resturant1/ResturantDetails";
import { CartProvider } from "./CartContext";
import CartPage from "./components/CartPage/CartPage";
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection  onSearch={handleSearch}/>
                  <RestaurantListing  searchQuery={searchQuery}/>
                  <HowItWorks />
                </>
              }
            />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route
              path="/restaurant/:restaurantName"
              element={<RestaurantDetails />}
            />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
