import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const itemCount = useSelector((state) => state.cart.itemCount);

  return (
    <div className="nav">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/home" className="nav-title">
          <h2>Guinea Pig Shoppe</h2>
        </Link>
        <Link to="/shop" className="navLink">
          Shop
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/cart" className="navLink cart-container">
          <span>Cart</span>
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
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
