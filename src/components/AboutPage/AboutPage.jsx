import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
      <p>Guinea Pig Shoppe is a website for customers interested in purchasing a unique variety of guinea pigs. Whether you're looking for a cuddly pet or your next meal, Guinea Pig Shoppe has you covered. We offer a selection of guinea pigs in various stages of life from babies and pregnant moms to be to adult males and females, each available in different colors, patterns, and ages. For those with culinary interests, we also provide cleaned, deceased guinea pigs ready for cooking. Explore our diverse options to find exactly what you need!</p>
     <h1>Contact Us</h1>
      <p>(952)463-0233</p>  
      <p>What I used in my Code</p>  
        <tr>Redux</tr>
        <tr>Redux Saga</tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>

      </div>
    </div>
  );
}

export default AboutPage;
