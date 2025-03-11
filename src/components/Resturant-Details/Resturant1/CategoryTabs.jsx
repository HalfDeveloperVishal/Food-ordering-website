// CategoryTabs.js
import React, { useState } from 'react';
import './CategoryTabs.css'; // Make sure to update your CSS to match the design

const CategoryTabs = ({ categories,  onAddToCart }) => {
  const [activeTab, setActiveTab] = useState(categories[0]?.id || null);

  return (
    <div className="category-tabs">
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`tab-pane ${activeTab === category.id ? 'active' : ''}`}
          >
            <div className="item-grid">
              {category.items.map((item) => (
                <div key={item.id} className="item-card">
                  
                  <img className='item-image'
                src={item.image}
                alt={item.name}
              />
                  
                  <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <span className="item-price">${item.price.toFixed(2)}</span>
                      <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;