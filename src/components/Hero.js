import React, { useRef, useEffect } from 'react';
import HeroVideo from '../assets/images/may-sitting-near-waterfall-pokemon-emerald-pixel-wallpaperwaifu-com.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        video.setAttribute('data-loaded', 'true');
      };

      const handleCanPlay = () => {
        video.setAttribute('data-loaded', 'true');
      };
      // Defer playback start to after fonts are loaded to reduce reflow
      if (document && 'fonts' in document) {
        document.fonts.ready.then(() => {
          try { video.play().catch(() => {}); } catch {}
        });
      }

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="hero-video-bg" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container">
        <p className="hero-subtitle">SA's premier</p>
        <h1 className="h1 hero-title">TCG Store</h1>
        <div className="btn-group">
          <button className="btn btn-primary">
            <span>Shop now</span>
            <ion-icon name="play-circle"></ion-icon>
          </button>
          <button className="btn btn-link">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
