import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Thankyou.css'; 

const ThankYou = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const confirmationNumber = params.get('confirmationNumber');

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <div className="container">
      <h2>Thank You!</h2>
      <div className="confirmationNumber">Confirmation Number: {confirmationNumber}</div>
      <p>Info about order confirmation and receipt sent to email</p>
      <button onClick={handleBackToHome} className="backButton">
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
