import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items || []);
  const [isDelivery, setIsDelivery] = useState(false);
  const [paymentType, setPaymentType] = useState('Credit Card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + (isDelivery ? 5 : 0);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (isDelivery && !formData.address) {
      alert('Please provide your address for delivery.');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      alert('Please fill out all required fields.');
      return;
    }

    dispatch({
      type: 'SUBMIT_ORDER',
      payload: {
        items: cartItems,
        paymentType,
        isCash: paymentType === 'Cash',
        isDelivery,
        address: formData.address,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      },
      callback: (confirmationNumber) => {
        history.push(`/thankyou?confirmationNumber=${confirmationNumber}`);
      },
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <div className="delivery-options">
          <label>
            <input type="radio" name="deliveryOption" checked={!isDelivery} onChange={() => setIsDelivery(false)} />
            Pickup
          </label>
          <label>
            <input type="radio" name="deliveryOption" checked={isDelivery} onChange={() => setIsDelivery(true)} />
            Delivery
          </label>
        </div>
        <button className="back-to-cart-button" onClick={() => window.history.back()}>Back to Cart</button>
        
        <form className="user-info-form" onSubmit={handleOrderSubmit}>
          <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Street Address" required={isDelivery} disabled={!isDelivery} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />

          <div className="payment-options">
            <h3>Select Payment Method</h3>
            <label>
              <input type="radio" name="paymentType" value="Cash" checked={paymentType === 'Cash'} onChange={() => setPaymentType('Cash')} />
              Cash
            </label>
            <label>
              <input type="radio" name="paymentType" value="Apple Pay" checked={paymentType === 'Apple Pay'} onChange={() => setPaymentType('Apple Pay')} />
              Apple Pay
            </label>
          </div>

          <button className="submit-order-button" type="submit">Submit Order</button>
        </form>
      </div>

      <div className="cart-summary">
        <h3>Your Bag</h3>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <p>{item.name}</p>
              <p>QTY {item.quantity}</p>
              <p>Total ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="order-summary">
          <p>{isDelivery ? 'Delivery' : 'Pickup'}: ${isDelivery ? 5 : 0}</p>
          <p>Order Total: ${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
