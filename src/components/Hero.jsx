import { useState, useEffect } from 'react';

const Hero = () => {
  const [animatedTitle, setAnimatedTitle] = useState([]);
  const [whitelistStatus, setWhitelistStatus] = useState('');

  useEffect(() => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-5" style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 100%)' }}>
      <div className="absolute top-24 right-24 text-8xl text-[#b84ff0]/20 animate-[float_6s_ease-in-out_infinite]">
        <i className="fas fa-dog"></i>
      </div>
      
      <div className="container text-center relative z-10">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold mb-6">
          {animatedTitle.map((letter, index) => (
            <span 
              key={index} 
              className="letter inline-block"
              style={{ animationDelay: `${letter.delay}s` }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-[#c8b3e0] max-w-3xl mx-auto">
          The Most Powerful DeFi Utility Token on Solana
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold font-['Playfair_Display'] mb-2 bg-gradient-to-r from-[#b84ff0] to-[#00d4d4] bg-clip-text text-transparent">
              $287K
            </div>
            <div className="text-[#c8b3e0]">Raised in Presale</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-['Playfair_Display'] mb-2 bg-gradient-to-r from-[#b84ff0] to-[#00d4d4] bg-clip-text text-transparent">
              2,847
            </div>
            <div className="text-[#c8b3e0]">Early Investors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-['Playfair_Display'] mb-2 bg-gradient-to-r from-[#b84ff0] to-[#00d4d4] bg-clip-text text-transparent">
              30%
            </div>
            <div className="text-[#c8b3e0]">Phase 1 Bonus</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={handleWhitelistClick}
            className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#b84ff0] to-[#d96ff5] text-white shadow-lg shadow-[#b84ff0]/50 hover:shadow-[#b84ff0]/70 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
            <i className="fas fa-list-check"></i> Join Presale
          </button>
          <a 
            href="#roadmap"
            className="px-10 py-4 text-lg font-semibold rounded-full border-2 border-[#b84ff0] text-white hover:bg-[#b84ff0] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
          >
            <i className="fas fa-map"></i> View Roadmap
          </a>
        </div>
        
        {whitelistStatus && (
          <div className="mt-6 text-lg text-[#00d4d4] animate-pulse">
            {whitelistStatus}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
