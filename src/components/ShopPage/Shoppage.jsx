import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShopPage.css';

const Shop = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch({ type: 'FETCH_INVENTORY' });
  }, [dispatch]);

  return (
    <div className="shop-container">
      <div className="shop-grid">
        {inventory.map((item) => (
          <Link to={`/description/${item.id}`} key={item.id} className="shop-item-link">
            <div className="shop-item">
              <div className="image-wrapper">
                <img src={item.image_path} alt={item.type} className="shop-image" />
              </div>
              <h3>{item.type}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;