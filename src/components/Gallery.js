import React, { useState, useEffect, useRef } from 'react';
import BannerDnd from '../assets/images/dnd-banner.jpg';
import BannerYgo from '../assets/images/yugioh-banner.jpg';
import BannerMtG from '../assets/images/magic-banner.png';
import BannerOnePiece from '../assets/images/onepiece-banner.webp';
import BannerPokemon from '../assets/images/pokemon-banner.avif';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSingleSlide, setIsSingleSlide] = useState(false);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "DUNGEONS & DRAGONS",
      image: BannerDnd,
      alt: "Dungeons & Dragons - fantasy tabletop roleplaying game"
    },
    {
      id: 2,
      title: "YU-GI-OH!",
      image: BannerYgo,
      alt: "Yu-Gi-Oh! - trading card game and anime franchise"
    },
    {
      id: 3,
      title: "MAGIC: THE GATHERING",
      image: BannerMtG,
      alt: "Magic: The Gathering - fantasy trading card game"
    },
    {
      id: 4,
      title: "ONE PIECE",
      image: BannerOnePiece,
      alt: "One Piece - anime and manga franchise"
    },
    {
      id: 5,
      title: "POKÉMON",
      image: BannerPokemon,
      alt: "Pokémon - trading card game and media franchise"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)');
    const apply = () => setIsSingleSlide(mq.matches);
    apply();
    mq.addEventListener('change', apply);

    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      mq.removeEventListener('change', apply);
    };
  }, [isAutoPlaying, currentSlide]);

  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  const nextIndex = (currentSlide + 1) % slides.length;

  return (
    <section className="gallery-carousel">
      <div className="carousel-container">
        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>

        {/* Carousel Slides - show prev/active/next on desktop; only active on mobile */}
        <div className="carousel-slides">
          {!isSingleSlide && (
            <div
              key={`prev-${prevIndex}`}
              className="carousel-slide prev"
              style={{
                left: '5%',
                transform: 'none',
                width: '60%',
                opacity: 0.6,
                zIndex: 2
              }}
              aria-hidden="true"
            >
              <div className="slide-content">
                <img src={slides[prevIndex].image} alt={slides[prevIndex].alt} />
                <div className="slide-overlay">
                  <h3 className="slide-title">{slides[prevIndex].title}</h3>
                </div>
              </div>
            </div>
          )}

          <div
            key={`active-${currentSlide}`}
            className="carousel-slide active"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: isSingleSlide ? '100%' : '75%',
              zIndex: 3
            }}
          >
            <div className="slide-content">
              <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />
              <div className="slide-overlay">
                <h3 className="slide-title">{slides[currentSlide].title}</h3>
                <button className="btn btn-primary slide-shop-btn">
                  <span>Shop now</span>
                  <ion-icon name="cart-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>

          {!isSingleSlide && (
            <div
              key={`next-${nextIndex}`}
              className="carousel-slide next"
              style={{
                left: '95%',
                transform: 'translateX(-100%)',
                width: '60%',
                opacity: 0.6,
                zIndex: 2
              }}
              aria-hidden="true"
            >
              <div className="slide-content">
                <img src={slides[nextIndex].image} alt={slides[nextIndex].alt} />
                <div className="slide-overlay">
                  <h3 className="slide-title">{slides[nextIndex].title}</h3>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button 
          className="carousel-autoplay-toggle"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
        >
          <ion-icon name={isAutoPlaying ? 'pause' : 'play'}></ion-icon>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
