import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './Description.css';
// import { addToCart } from '../../redux/cart.actions';

const Description = () => {
  const { id } = useParams(); // Get item ID from URL
  const dispatch = useDispatch();
  const history = useHistory();

  // Select the specific item details from the Redux store
  const item = useSelector((state) => state.selectedItem);

  // Local state for quantity
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Dispatch an action to fetch item details based on the ID
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [dispatch, id]);

  if (!item) return <p>Loading...</p>;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Handle adding item to cart
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item_id: item.id,           // Matching backend 'item_id'
        name: item.type,           // Type or name of the item
        price: item.price,         // Price of the item
        quantity,                  // Use the selected quantity
        image: item.image_path,    // Image URL for display
      },
    });
  };

  return (
    <div className="description-container">
      <button className="back-button" onClick={() => history.push('/shop')}>Back</button>
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
