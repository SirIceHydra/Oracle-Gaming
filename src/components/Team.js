import React from 'react';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="h2 section-title">About Oracle Gaming</h2>
        
        <div className="about-oracle-wrapper">
          <div className="about-oracle-content">
            <div className="about-oracle-info">
              <h3 className="h3 about-oracle-subtitle">Your TCG Destination</h3>
              <p className="about-oracle-description">
                Oracle Gaming is your one stop for Pokemon/One Piece and other various TCG's in Bloemfontein. 
                We host weekly Tournaments! We also sell various board games, figurines and accessories.
              </p>
              
              <div className="about-oracle-details">
                <div className="detail-item">
                  <ion-icon name="location-outline"></ion-icon>
                  <div>
                    <h4>Address</h4>
                    <p>11a President Steyn Ave, Westdene, Bloemfontein, 9301</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <ion-icon name="call-outline"></ion-icon>
                  <div>
                    <h4>Phone</h4>
                    <p>082 565 5408</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <ion-icon name="time-outline"></ion-icon>
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Sun: 5:00 PM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <ion-icon name="star-outline"></ion-icon>
                  <div>
                    <h4>Rating</h4>
                    <p>5.0 ★★★★★ (6 Google reviews)</p>
                  </div>
                </div>
              </div>
              
              <div className="about-oracle-actions">
                <button className="btn btn-primary">Visit Store</button>
                <a href="https://maps.google.com/?q=11a+President+Steyn+Ave,+Westdene,+Bloemfontein,+9301" target="_blank" rel="noopener noreferrer" className="directions-link">Get Directions</a>
              </div>
            </div>
            
            <div className="about-oracle-visual">
              <div className="about-oracle-image">
                <img src="/images/OracleGaming.webp" alt="Oracle Gaming Store" />
              </div>
              
              <div className="about-oracle-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.123456789!2d26.123456!3d-29.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzI0LjQiUyAyNsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza&style=feature:all|element:labels|visibility:off&style=feature:road|element:geometry|color:0x2d2d2d&style=feature:water|element:geometry|color:0x1a1a1a&style=feature:landscape|element:geometry|color:0x2d2d2d"
                  width="100%"
                  height="200"
                  style={{border: 0, borderRadius: '8px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oracle Gaming Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
