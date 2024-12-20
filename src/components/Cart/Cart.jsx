import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items || []); 
  const dispatch = useDispatch();

  const handleIncrease = (item_id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item_id });
  };

  const handleDecrease = (item_id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item_id });
  };

  const handleRemove = (item_id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item_id });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}> 
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <div className="item-quantity">
                    <span>QTY {item.quantity}</span>
                    <button onClick={() => handleIncrease(item.item_id)}>+</button> 
                    <button onClick={() => handleDecrease(item.item_id)}>-</button> 
                  </div>
                  <button className="remove-button" onClick={() => handleRemove(item.item_id)}>
                    Remove from cart
                  </button>
                </div>
                <div className="item-total">
                  <p>Total</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-summary">
          <h3>Subtotal</h3>
          <p>${calculateSubtotal().toFixed(2)}</p>
          <Link to="/checkout">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;



