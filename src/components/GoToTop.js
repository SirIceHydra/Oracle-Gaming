import React from 'react';

const GoToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#top" 
      className={`btn btn-primary go-top ${isVisible ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </a>
  );
};

export default GoToTop;
