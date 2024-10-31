import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

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
        <p>Your one-stop shop for all types of critters and guinea pigs!</p>
      </header>
      
      {/* Featured Image Section */}
      <section className="featured-image-section">
        <div className="image-placeholder">
          <p>Image Placeholder</p>
        </div>
      </section>

      {/* Available Animals Section */}
      <section className="animals-section">
        <h2>Available Animals</h2>
        {/* Uncomment this line when AnimalList component is ready */}
        {/* <AnimalList /> */}
      </section>

      {/* Description Section */}
      <section className="description-section">
        <p>Description of website purpose: Discover a wide variety of adorable guinea pigs and critters available for sale. Find your perfect pet today!</p>
      </section>
    </div>
  );
};

export default Home;
