/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/12/2025 - 21:07:45
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">
          <img src="/assets/logo.png" alt="Shiba Solana" className="logo-img" />
          <span className="logo-text">SHIBA SOLANA</span>
        </div>
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#presale" onClick={(e) => scrollToSection(e, 'presale')}>Presale</a>
          <a href="#utility" onClick={(e) => scrollToSection(e, 'utility')}>Utility</a>
          <a href="#tokenomics" onClick={(e) => scrollToSection(e, 'tokenomics')}>Tokenomics</a>
          <a href="#roadmap" onClick={(e) => scrollToSection(e, 'roadmap')}>Roadmap</a>
          <a href="#community" onClick={(e) => scrollToSection(e, 'community')}>Community</a>
        </nav>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
