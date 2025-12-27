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
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-[1000] py-5 border-b border-[#b84ff0]/20">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Shiba Solana" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-[#b84ff0] to-[#00d4d4] bg-clip-text text-transparent">
              SHIBA SOLANA
            </span>
          </div>
          
          <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#1a0a2e] md:bg-transparent gap-2 md:gap-8 p-5 md:p-0 border-t md:border-0 border-[#b84ff0]/20`}>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Home</a>
            <a href="#presale" onClick={(e) => scrollToSection(e, 'presale')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Presale</a>
            <a href="#utility" onClick={(e) => scrollToSection(e, 'utility')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Utility</a>
            <a href="#tokenomics" onClick={(e) => scrollToSection(e, 'tokenomics')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Tokenomics</a>
            <a href="#roadmap" onClick={(e) => scrollToSection(e, 'roadmap')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Roadmap</a>
            <a href="#community" onClick={(e) => scrollToSection(e, 'community')} className="text-white hover:text-[#b84ff0] transition-colors duration-300 font-medium">Community</a>
          </nav>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="w-full h-0.5 bg-white transition-transform duration-300"></span>
            <span className="w-full h-0.5 bg-white transition-transform duration-300"></span>
            <span className="w-full h-0.5 bg-white transition-transform duration-300"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
