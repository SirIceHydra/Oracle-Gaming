import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src="/images/about-img.png" alt="M shape" className="about-img" />
          <img src="/images/character-1.png" alt="Game character" className="character character-1" />
          <img src="/images/character-2.png" alt="Game character" className="character character-2" />
          <img src="/images/character-3.png" alt="Game character" className="character character-3" />
        </figure>

        <div className="about-content">
          <p className="about-subtitle">Find team member</p>
          <h2 className="about-title">Experience just for gamers <strong>offer</strong></h2>
          <p className="about-text">
            Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
            viverra felis nunc et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
          </p>
          <p className="about-bottom-text">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            <span>Will sharpen your brain and focus</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
