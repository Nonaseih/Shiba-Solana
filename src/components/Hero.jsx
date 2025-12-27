import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [animatedTitle, setAnimatedTitle] = useState([]);
  const [whitelistStatus, setWhitelistStatus] = useState('');

  useEffect(() => {
    // Letter-by-letter animation
    const text = 'SHIBA SOLANA';
    const letters = text.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char,
      delay: index * 0.1
    }));
    setAnimatedTitle(letters);
  }, []);

  const handleWhitelistClick = () => {
    setWhitelistStatus('Connecting to Phantom wallet...');
    setTimeout(() => {
      setWhitelistStatus('✅ Successfully joined the whitelist!');
      setTimeout(() => setWhitelistStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="home" className="hero">
      <div className="floating-shiba">
        <i className="fas fa-dog"></i>
      </div>
      <div className="container">
        <h1 className="hero-title" id="animatedTitle">
          {animatedTitle.map((letter, index) => (
            <span 
              key={index} 
              className="letter"
              style={{ animationDelay: `${letter.delay}s` }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
        <p className="hero-subtitle">The Most Powerful DeFi Utility Token on Solana</p>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-value">$287K</div>
            <div className="stat-label">Raised in Presale</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2,847</div>
            <div className="stat-label">Early Investors</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">30%</div>
            <div className="stat-label">Phase 1 Bonus</div>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary" id="whitelistBtn" onClick={handleWhitelistClick}>
            <i className="fas fa-list-check"></i> Join Presale
          </button>
          <a href="#roadmap" className="btn btn-secondary">
            <i className="fas fa-map"></i> View Roadmap
          </a>
        </div>
        {whitelistStatus && (
          <div className="whitelist-status">{whitelistStatus}</div>
        )}
      </div>
    </section>
  );
};

export default Hero;
