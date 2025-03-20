import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(query);
  };

  const handleClearSearch = () => {
    setQuery(''); // Clear the search input
    onSearch(''); // Reset the search query in the parent component
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Delicious Food, Delivered</h1>
        <p>Order from the best local restaurants</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Food..."
            className="search-input"
            value={query}
            onChange={handleSearchChange}
          />
          {query && ( // Show the clear button only when there's text in the search bar
            <button className="clear-button" onClick={handleClearSearch}>
              ×
            </button>
          )}
          <button className="search-button" onClick={handleSearchSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;