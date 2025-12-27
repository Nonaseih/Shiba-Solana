import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [animatedTitle, setAnimatedTitle] = useState([]);
  const [whitelistStatus, setWhitelistStatus] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const particleCount = isMobile ? 8 : 20;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const words = ['$SOLANA', 'SHIBA'];
    setAnimatedTitle(words);
  }, []);

  const handleWhitelistClick = () => {
    setWhitelistStatus('Connecting to Phantom wallet...');
    setTimeout(() => {
      setWhitelistStatus('✅ Successfully joined the whitelist!');
      setTimeout(() => setWhitelistStatus(''), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-32 sm:pt-36 md:pt-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#2d1b4e]">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            animate={{
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Gradient orbs with framer-motion */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div 
        className="absolute top-32 right-24 text-8xl text-purple-500/10 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
      >
        <i className="fas fa-dog"></i>
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-24 text-6xl text-cyan-500/10 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <i className="fas fa-rocket"></i>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Title */}
        <motion.div className="mb-3 sm:mb-4 md:mb-6" variants={itemVariants}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight px-2">
            {animatedTitle.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-2 sm:mr-3"
                initial={{ opacity: 0, y: -50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: wordIndex * 0.3,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: wordIndex * 0.3 + charIndex * 0.05,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>
          <motion.div 
            className="h-1 w-24 sm:w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-purple-200 max-w-3xl mx-auto luxury-serif px-4"
          variants={itemVariants}
        >
          The Most Powerful DeFi Utility Token on Solana
        </motion.p>
        
        <motion.p 
          className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed"
          variants={itemVariants}
        >
          Experience lightning-fast transactions, ultra-low fees, and a complete suite of DeFi tools built on Solana blockchain
        </motion.p>
        
        {/* Stats Cards with Stagger Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto px-2"
          variants={containerVariants}
        >
          {[
            { value: '$287K', label: 'Raised in Presale', icon: 'fa-chart-line', gradient: 'from-purple-500 to-pink-500' },
            { value: '2,847', label: 'Early Investors', icon: 'fa-users', gradient: 'from-pink-500 to-rose-500' },
            { value: '30%', label: 'Phase 1 Bonus', icon: 'fa-gift', gradient: 'from-cyan-500 to-blue-500' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05, 
                y: isMobile ? -5 : -10,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${stat.gradient} mb-2`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`fas ${stat.icon} text-sm sm:text-base md:text-lg text-white`}></i>
              </motion.div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-300 text-[10px] sm:text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.button 
            onClick={handleWhitelistClick}
            className="group relative px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 overflow-hidden w-full sm:w-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(168, 85, 247, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <i className="fas fa-rocket text-sm sm:text-base"></i>
              <span>Join Presale Now</span>
              <motion.i 
                className="fas fa-arrow-right text-sm sm:text-base"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          </motion.button>
          <motion.a 
            href="#utility"
            className="group px-5 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full border-2 border-purple-500 text-white hover:bg-purple-600/20 backdrop-blur-sm w-full sm:w-auto text-center"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(168, 85, 247, 1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <i className="fas fa-layer-group text-sm sm:text-base"></i>
              <span>Explore Utilities</span>
              <motion.i 
                className="fas fa-arrow-right text-sm sm:text-base"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
            </span>
          </motion.a>
        </motion.div>
        
        {/* Whitelist Status */}
        {whitelistStatus && (
          <motion.div 
            className="mt-4 sm:mt-6 inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-500/50 mx-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <span className="text-xs sm:text-sm md:text-base text-green-300">{whitelistStatus}</span>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-2xl sm:text-3xl text-purple-400/50"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
