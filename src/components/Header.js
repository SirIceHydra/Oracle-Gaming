import React, { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header">
      {/* overlay */}
      <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={closeNav}></div>

      <div className="container">
        <a href="/" className="logo">
          <img src="/Logo/kamelesanpillay_20220620185113.png" alt="GameX logo" />
        </a>

        <button className="nav-open-btn" onClick={toggleNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src="/Logo/kamelesanpillay_20220620185113.png" alt="GameX logo" />
            </a>

            <button className="nav-close-btn" onClick={closeNav}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#hero" className="navbar-link" onClick={closeNav}>Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" onClick={closeNav}>About</a>
            </li>
            <li>
              <a href="#tournament" className="navbar-link" onClick={closeNav}>Tournament</a>
            </li>
            <li>
              <a href="#team" className="navbar-link" onClick={closeNav}>Team</a>
            </li>
            <li>
              <a href="#gears" className="navbar-link" onClick={closeNav}>Gears</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" onClick={closeNav}>Contact</a>
            </li>
          </ul>

          <ul className="nav-social-list">
                      <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="search">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="btn-sign_in">
            <div className="icon-box">
              <ion-icon name="log-in-outline"></ion-icon>
            </div>
            <span>Log-in</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
