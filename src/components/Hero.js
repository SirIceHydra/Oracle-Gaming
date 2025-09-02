import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <p className="hero-subtitle">The Season 8</p>
        <h1 className="h1 hero-title">Steam</h1>
        <div className="btn-group">
          <button className="btn btn-primary">
            <span>Watch live</span>
            <ion-icon name="play-circle"></ion-icon>
          </button>
          <button className="btn btn-link">Dream making</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
