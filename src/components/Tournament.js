import React from 'react';
import TournamentBanner from '../assets/images/tournamentbanner.jpg';

const Tournament = () => {
  return (
    <section className="tournament" id="tournament" style={{padding: '0', margin: '0'}}>
      <div style={{
        display: 'flex',
        height: '60vh',
        width: '100%',
        backgroundColor: '#1a1a1a'
      }}>
        {/* Left side - Tournament info */}
        <div style={{
          flex: '0 0 30%',
          backgroundColor: '#2a2a2a',
          padding: '40px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{textAlign: 'left'}}>
            <p className="tournament-subtitle" style={{color: '#14fefb', fontSize: '18px', margin: '0 0 20px 0', fontFamily: 'Oswald, sans-serif', fontWeight: '500', textTransform: 'uppercase'}}>Weekly Events</p>
            <h2 className="h3 tournament-title" style={{color: 'white', fontSize: '36px', margin: '0 0 25px 0', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', lineHeight: '1.2'}}>TCG Tournaments</h2>
            <p className="tournament-text" style={{color: '#ccc', fontSize: '16px', margin: '0 0 30px 0', lineHeight: '1.8'}}>Join our weekly TCG tournaments every Saturday!</p>
            <h3 className="h3 tournament-prize-title" style={{color: 'white', fontSize: '24px', margin: '0 0 15px 0', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', lineHeight: '1.2'}}>Prize Pool</h3>
            <data className="tournament-prize-data" style={{
              backgroundColor: '#14fefb',
              color: '#1a1a1a',
              padding: '8px 42px',
              borderRadius: '50px',
              fontSize: '28px',
              fontWeight: '700',
              fontFamily: 'Oswald, sans-serif',
              display: 'inline-block',
              marginBottom: '30px'
            }}>R5,000</data>
            <br />
            <button className="btn btn-primary" style={{
              backgroundColor: '#14fefb',
              color: '#1a1a1a',
              border: 'none',
              padding: '13px 34px',
              fontSize: '20px',
              fontWeight: '500',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: 'Oswald, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
              transition: '0.15s ease-in-out'
            }}>Register Now</button>
          </div>
        </div>
        
        {/* Right side - Banner image */}
        <div style={{
          flex: '0 0 70%',
          backgroundImage: `url(${TournamentBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </div>
      </div>
    </section>
  );
};

export default Tournament;
