import React from 'react';
import CardsGif from '../assets/images/cards.gif';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={CardsGif} alt="TCG Collection" className="about-img" />
        </figure>

        <div className="about-content">
          <p className="about-subtitle">Find your collection</p>
          <h2 className="about-title">Premium TCG cards <strong>available</strong></h2>
          <p className="about-text">
            Discover rare and exclusive trading card game collections. From Pokémon to Magic: The Gathering, 
            we offer authentic cards, booster packs, and complete sets for collectors and players alike.
          </p>
          <p className="about-bottom-text">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            <span>Build your ultimate TCG collection</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
