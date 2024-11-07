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
        <p>Guinea Pig Shoppe is a website for customers interested in purchasing a unique variety of guinea pigs. Whether you're looking for a cuddly pet or your next meal, Guinea Pig Shoppe has you covered. We offer a selection of guinea pigs in various stages of life from babies and pregnant moms to be to adult males and females, each available in different colors, patterns, and ages. For those with culinary interests, we also provide cleaned, deceased guinea pigs ready for cooking. Explore our diverse options to find exactly what you need!</p>
      </section>
    </div>
  );
};

export default Home;
