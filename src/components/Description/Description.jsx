import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './Description.css';

const Description = () => {
  const { id } = useParams(); // Get item ID from URL
  const dispatch = useDispatch();
  const history = useHistory(); // To navigate back

  // Select the specific item details from the Redux store
  const item = useSelector((state) => state.selectedItem);

  useEffect(() => {
    // Dispatch an action to fetch item details based on the ID
    dispatch({ type: 'FETCH_ITEM_DETAILS', payload: id });
  }, [dispatch, id]);

  // If item data is not yet loaded, show a loading message
  if (!item) return <p>Loading...</p>;

  // Determine if the item type is not Dead or Pregnant to show gender controls
  const showGenderControls = item.type !== 'Dead' && item.type !== 'Pregnant';

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
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            {showGenderControls && (
              <div className="gender-control">
                <button>M</button>
                <button>F</button>
              </div>
            )}
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
