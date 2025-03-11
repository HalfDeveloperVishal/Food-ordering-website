import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart, Person, X } from 'react-bootstrap-icons';
import './Navbar.css';
import { CartContext } from '../../CartContext';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {/* Use Link for Home */}
            DesiDhaba
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link" aria-current="page" to="/">
                  {/* Use Link for Home */}
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/restaurant">
                  {/* Use Link for Restaurant */}
                  Restaurant
                </Link>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" to="/about">
                  {/* Use Link for About */}
                  About
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" to="/contact">
                  {/* Use Link for Contact */}
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <Link to="/cart" className="text-dark me-3 cart-icon">
              {/* Use Link for Cart */}
              <Cart size={24} />
              <span className="cart-count">{cartItems.length}</span> {/* Display cart count */}
            </Link>
            {isSmallScreen ? (
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            ) : (
              <Link to="/account" className="text-dark">
                {/* Use Link for Account */}
                <Person size={24} />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSmallScreen && (
        <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <button className="sidebar-close" onClick={toggleSidebar}>
              <X size={24} />
            </button>
          </div>
          <ul className="sidebar-nav">
            <li>
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>{' '}
              {/* Use Link for Home */}
            </li>
            <li className="sidebar-nav-text">
              <Link to="/restaurant" onClick={toggleSidebar}>
                Restaurant
              </Link>{' '}
              {/* Use Link for Restaurant */}
            </li>
            <li className="sidebar-nav-text">
              <a  onClick={toggleSidebar}>
                About
              </a>{' '}
              {/* Use Link for About */}
            </li>
            <li className="sidebar-nav-text">
              <a  onClick={toggleSidebar}>
                Contact
              </a>{' '}
              {/* Use Link for Contact */}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;