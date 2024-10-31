import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* Left Side - "Guinea Pig Shoppe" title and Shop link */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/home" className="nav-title">
          <h2>Guinea Pig Shoppe</h2>
        </Link>
        <Link to="/shop" className="navLink">
          Shop
        </Link>
      </div>

      {/* Right Side - Links and User Dropdown */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/checkout" className="navLink">
          Checkout
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>

        {/* Conditional Links based on user authentication */}
        {!user.id ? (
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        ) : (
          <div className="user-dropdown">
            <button className="navLink">
              {user.username}
            </button>
            <div className="dropdown-content">
              <LogOutButton className="logout-button" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
