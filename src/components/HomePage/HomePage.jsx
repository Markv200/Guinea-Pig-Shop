import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';
import homeImage from '../HomePage/HomeImg.webp';


const Home = () => {
  const history = useHistory();

  const navigateTo = (page) => {
    history.push(`/${page}`);
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Guinea Pig Shoppe</h1>
        {/* <p>Your one-stop shop for all types of critters and guinea pigs!</p> */}
      </header>
      
      {/* Featured Image Section */}
      <section className="featured-image-section">
      <div className="image-placeholder">
    <img src={homeImage} alt="Featured Guinea Pig" />
  </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <p>Description of website purpose</p>
      </section>
    </div>
  );
};

export default Home;
