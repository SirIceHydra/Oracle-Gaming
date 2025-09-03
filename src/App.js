import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Gears from './components/Gears';
import About from './components/About';
import Tournament from './components/Tournament';
import Team from './components/Team';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

function App() {
  const [isGoTopVisible, setIsGoTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setIsGoTopVisible(true);
      } else {
        setIsGoTopVisible(false);
      }
    };

    window.addEventListener('scroll', () => handleScroll());
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Gallery />
          <Gears />
          <div className="section-wrapper">
            <About />
            <Tournament />
            <Team />
            <Newsletter />
          </div>
        </article>
      </main>
      <Footer />
      <GoToTop isVisible={isGoTopVisible} />
    </>
  );
}

export default App;
