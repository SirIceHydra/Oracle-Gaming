import React from 'react';

const Gears = () => {
  const gearsData = [
    {
      id: 1,
      image: 'gears-img-1.png',
      title: 'Headphone',
      subtitle: 'e-sports',
      price: '$18',
      alt: 'Headphone'
    },
    {
      id: 2,
      image: 'gears-img-2.png',
      title: 'Controller',
      subtitle: 'e-sports',
      price: '$29',
      alt: 'Controller'
    },
    {
      id: 3,
      image: 'gears-img-3.png',
      title: 'Gaming mask',
      subtitle: 'e-sports',
      price: '$45',
      alt: 'Gaming mask'
    }
  ];

  return (
    <section className="gears" id="gears">
      <div className="container">
        <h2 className="h2 section-title">check our gears</h2>
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
                    <ion-icon name="time-outline"></ion-icon>
                    <span>In 4 days</span>
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
