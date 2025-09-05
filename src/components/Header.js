import React, { useState } from 'react';
import LogoMain from '../assets/images/kamelesanpillay_20220620185113.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className="header">
      {/* overlay */}
      <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={closeNav}></div>

      <div className="container">
        <a href="/" className="logo">
          <img src={LogoMain} alt="GameX logo" />
        </a>

        <button className="nav-open-btn" onClick={toggleNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={LogoMain} alt="GameX logo" />
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
              <a href="#gallery" className="navbar-link" onClick={closeNav}>Products</a>
            </li>
            <li>
              <a href="#gears" className="navbar-link" onClick={closeNav}>Shop</a>
            </li>
            <li>
              <a href="#tournament" className="navbar-link" onClick={closeNav}>Tournaments</a>
            </li>
            <li>
              <a href="#team" className="navbar-link" onClick={closeNav}>About</a>
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
          <div className="search-container">
            <button className="search" onClick={toggleSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
            
            {isSearchOpen && (
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
