import React from 'react';

const Gears = () => {
  const gearsData = [
    {
      id: 1,
      image: 'onepiecebooster.webp',
      title: 'One Piece Booster Pack',
      subtitle: 'TCG',
      price: 'R85',
      alt: 'One Piece Trading Card Game Booster Pack'
    },
    {
      id: 2,
      image: 'pokeproduct.png',
      title: 'Pokémon Elite Trainer Box',
      subtitle: 'TCG',
      price: 'R450',
      alt: 'Pokémon Elite Trainer Box'
    },
    {
      id: 3,
      image: 'mtgproduct.png',
      title: 'Magic: The Gathering Booster',
      subtitle: 'TCG',
      price: 'R65',
      alt: 'Magic: The Gathering Booster Pack'
    }
  ];

  return (
    <section className="gears" id="gears">
      <div className="container">
        <h2 className="h2 section-title">Shop TCG and Merch</h2>
        <ul className="gears-list">
          {gearsData.map((gear) => (
            <li key={gear.id}>
              <div className="gears-card">
                <div className="card-banner">
                  <a href={`/gear/${gear.id}`}>
                    <img src={`/images/${gear.image}`} alt={gear.alt} />
                  </a>
                  <button className="share">
                    <ion-icon name="share-social"></ion-icon>
                  </button>
                  <div className="card-time-wrapper">
                    <ion-icon name="pricetag-outline"></ion-icon>
                    <span>SALE</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">{gear.title}</h3>
                    <p className="card-subtitle">{gear.subtitle}</p>
                  </div>
                  <div className="card-prize">{gear.price}</div>
                </div>

                <div className="card-actions">
                  <button className="btn btn-primary">
                    <ion-icon name="add-outline"></ion-icon>
                    <span>Add to cart</span>
                  </button>
                  <button className="btn card-btn">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gears;
