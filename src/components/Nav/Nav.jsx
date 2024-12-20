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
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/shop" className="navLink">
          Shop
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>

        {/* Admin Links - Only visible to users with the admin role */}
        {user.role === 'admin' && (
          <>
            {/* <Link to="/admin" className="navLink">
              Admin Dashboard
            </Link> */}
            <Link to="/admin/inventory" className="navLink">
              Inventory
            </Link>
            <Link to="/admin/orders" className="navLink">
              Orders
            </Link>
          </>
        )}

        {/* Login / User Dropdown */}
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

        {/* Cart Link - Positioned at the end */}
        <Link to="/cart" className="navLink cart-container">
          <span>Cart</span>
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
