/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/12/2025 - 22:51:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home', icon: 'fa-home' },
    { name: 'Utility', href: '#utility', icon: 'fa-layer-group' },
    { name: 'Presale', href: '#presale', icon: 'fa-rocket' },
    { name: 'Tokenomics', href: '#tokenomics', icon: 'fa-coins' },
    { name: 'Roadmap', href: '#roadmap', icon: 'fa-map-marked-alt' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-1 sm:gap-3 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-dog text-white text-xs sm:text-base md:text-lg"></i>
          </div>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap flex-shrink-0 leading-tight">
            $SOLANA SHIBA
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {menuItems.map((item, index) => (
            <motion.a 
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button 
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden text-white text-2xl p-2 -mr-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.i 
            className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.i>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              className="fixed top-[57px] sm:top-[65px] left-0 right-0 bg-gradient-to-b from-gray-900 via-gray-900/98 to-gray-900/95 border-b border-purple-500/20 px-4 sm:px-6 py-6 shadow-2xl shadow-purple-500/20 z-40 lg:hidden max-h-[calc(100vh-57px)] sm:max-h-[calc(100vh-65px)] overflow-y-auto"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors py-3 px-4 rounded-xl hover:bg-purple-500/10 active:bg-purple-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className={`fas ${item.icon} text-purple-400 w-5`}></i>
                    <span className="font-medium text-base sm:text-lg">{item.name}</span>
                  </motion.a>
                ))}
                <motion.button 
                  className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/30 w-full text-base sm:text-lg active:scale-95"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-wallet mr-2"></i>
                  Connect Wallet
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;