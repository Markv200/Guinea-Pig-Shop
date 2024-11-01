import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './Description.css';

const Description = () => {
  const { id } = useParams(); // Get item ID from URL
  const dispatch = useDispatch();
  const history = useHistory(); // To navigate back

  const item = useSelector((state) => state.selectedItem);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [dispatch, id]);

  if (!item) return <p>Loading...</p>;

  const showGenderControls = item.type !== 'Dead' && item.type !== 'Pregnant';

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: quantity });
  };

  return (
    <div className="description-container">
      <button className="back-button" onClick={() => history.goBack()}>Back</button>
      <div className="description-content">
        <div className="description-image-wrapper">
          <img src={item.image_path} alt={item.type} className="description-image" />
        </div>
        <div className="description-details">
          <h2 className="description-title">{item.type}</h2>
          <p className="description-text">
            Price: ${item.price}
            <br />
            Product Description:
            <br />- {item.description}
            <br />- Patterns and colors may vary
            <br />- Age may vary between 7 months to 2 years old
          </p>
          <div className="description-controls">
            <div className="quantity-control">
              <span>Qty:</span>
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            {showGenderControls && (
              <div className="gender-control">
                <button>M</button>
                <button>F</button>
              </div>
            )}
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
