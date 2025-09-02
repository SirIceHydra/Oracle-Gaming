import React, { useState } from 'react';

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand-wrapper">
            <a href="/" className="logo">
              <img src="/images/logo.svg" alt="GameX logo" />
            </a>

            <div className="footer-menu-wrapper">
              <ul className="footer-menu-list">
                <li>
                  <a href="#hero" className="footer-menu-link">Home</a>
                </li>
                <li>
                  <a href="#about" className="footer-menu-link">About</a>
                </li>
                <li>
                  <a href="#tournament" className="footer-menu-link">Tournament</a>
                </li>
                <li>
                  <a href="#team" className="footer-menu-link">Team</a>
                </li>
                <li>
                  <a href="#gears" className="footer-menu-link">Gears</a>
                </li>
                <li>
                  <a href="/contact" className="footer-menu-link">Contact</a>
                </li>
              </ul>

              <div className="footer-input-wrapper">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    name="message"
                    required
                    placeholder="Find Here Now"
                    className="footer-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    <ion-icon name="search-outline"></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-quicklinks">
            <ul className="quicklink-list">
              <li>
                <a href="/faq" className="quicklink-item">Faq</a>
              </li>
              <li>
                <a href="/help" className="quicklink-item">Help center</a>
              </li>
              <li>
                <a href="/terms" className="quicklink-item">Terms of use</a>
              </li>
              <li>
                <a href="/privacy" className="quicklink-item">Privacy</a>
              </li>
            </ul>

            <ul className="footer-social-list">
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://xbox.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <ion-icon name="logo-xbox"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright &copy; 2022 <a href="https://github.com/codewithsadee" target="_blank" rel="noopener noreferrer">codewithsadee</a>. all rights reserved
          </p>

          <figure className="footer-bottom-img">
            <img src="/images/footer-bottom-img.png" alt="Online payment companies logo" />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
