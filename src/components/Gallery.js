import React, { useState, useEffect, useRef } from 'react';
import BannerDnd from '../assets/images/dnd-banner.jpg';
import BannerYgo from '../assets/images/yugioh-banner.jpg';
import BannerMtG from '../assets/images/magic-banner.png';
import BannerOnePiece from '../assets/images/onepiece-banner.webp';
import BannerPokemon from '../assets/images/pokemon-banner.avif';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  // Create a cyclic array of slides for proper side image display
  const getCyclicSlides = () => {
    const result = [];
    for (let i = 0; i < slides.length; i++) {
      const slideIndex = (currentSlide + i) % slides.length;
      result.push({
        ...slides[slideIndex],
        originalIndex: slideIndex,
        displayIndex: i
      });
    }
    return result;
  };

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

        {/* Carousel Slides */}
        <div className="carousel-slides">
          {getCyclicSlides().map((slide, index) => {
            // Calculate position for each slide
            const offset = (index - 1) * 100; // Center slide is at index 1
            const isActive = index === 1; // Index 1 is the center/active slide
            const isVisible = Math.abs(offset) <= 100; // Show slides within 100% offset
            
            return (
              <div
                key={`${slide.id}-${slide.originalIndex}`}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateX(${offset}%)`,
                  opacity: isVisible ? 1 : 0.3,
                  zIndex: isActive ? 10 : 1
                }}
              >
                                            <div className="slide-content">
                              <img 
                                src={slide.image} 
                                alt={slide.alt}
                                onError={(e) => {
                                  console.error(`Failed to load carousel image: ${slide.image}`);
                                  e.target.style.border = '2px solid red';
                                  e.target.alt = `FAILED: ${slide.image}`;
                                }}
                                onLoad={() => {
                                  console.log(`Successfully loaded carousel image: ${slide.image}`);
                                }}
                              />
                              <div className="slide-overlay">
                    <h3 className="slide-title">{slide.title}</h3>
                    <button className="btn btn-primary slide-shop-btn">
                      <span>Shop now</span>
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
