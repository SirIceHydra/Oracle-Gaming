import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <ul className="gallery-list has-scrollbar">
          <li>
            <figure className="gallery-item">
              <img src="/images/gallery-img-1.jpg" alt="Gaming setup" />
            </figure>
          </li>
          <li>
            <figure className="gallery-item">
              <img src="/images/gallery-img-2.jpg" alt="Gaming tournament" />
            </figure>
          </li>
          <li>
            <figure className="gallery-item">
              <img src="/images/gallery-img-3.jpg" alt="Gaming equipment" />
            </figure>
          </li>
          <li>
            <figure className="gallery-item">
              <img src="/images/gallery-img-4.jpg" alt="Gaming environment" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
