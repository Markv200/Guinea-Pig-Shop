import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const confirmationNumber = params.get('confirmationNumber');

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <div style={styles.container}>
      <h2>Thank You!</h2>
      <div style={styles.confirmationNumber}>Confirmation Number: {confirmationNumber}</div>
      <p>Info about order confirmation and receipt sent to email</p>
      <button onClick={handleBackToHome} style={styles.backButton}>
        Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    color: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
  },
  confirmationNumber: {
    backgroundColor: '#e0e0e0',
    color: '#333',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
  },
  backButton: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ThankYou;
