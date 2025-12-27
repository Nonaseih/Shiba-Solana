import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Presale = () => {
  const [solAmount, setSolAmount] = useState(1);
  const [baseTokens, setBaseTokens] = useState(0);
  const [bonusTokens, setBonusTokens] = useState(0);
  const [totalTokens, setTotalTokens] = useState(0);
  const [raisedAmount, setRaisedAmount] = useState(287450);
  const [contributors, setContributors] = useState(2847);
  const [timeLeft, setTimeLeft] = useState('');
  const [recentContributions, setRecentContributions] = useState([
    { address: '0x7f3...a9d2', amount: '5.2' },
    { address: '0x92b...3ef1', amount: '3.8' },
    { address: '0x4c1...7bd8', amount: '7.1' },
    { address: '0xa5e...9c4f', amount: '2.5' }
  ]);

  const SOL_PRICE_USD = 100;
  const TOKEN_PRICE = 0.0001;
  const PHASE_1_BONUS = 0.30;

  useEffect(() => {
    calculateTokens(solAmount);
  }, [solAmount]);

  useEffect(() => {
    // Update raised amount periodically
    const raiseInterval = setInterval(() => {
      setRaisedAmount(prev => prev + Math.floor(Math.random() * 500) + 100);
    }, 8000);

    // Update contributors count
    const contributorsInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setContributors(prev => prev + 1);
      }
    }, 12000);

    // Update countdown timer
    const updateTimer = () => {
      const endDate = new Date('2025-01-15T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = endDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };
    
    updateTimer();
    const timerInterval = setInterval(updateTimer, 60000);

    // Simulate new contributions
    const addresses = [
      '0x7f3...a9d2', '0x92b...3ef1', '0x4c1...7bd8', '0xa5e...9c4f',
      '0x1b7...f3c2', '0x8d2...4ea9', '0x3f9...6cb1', '0x2a4...8def'
    ];
    
    const contributionInterval = setInterval(() => {
      const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
      const randomAmount = (Math.random() * 9 + 1).toFixed(1);
      
      setRecentContributions(prev => [
        { address: randomAddress, amount: randomAmount },
        ...prev.slice(0, 3)
      ]);
    }, 15000);

    return () => {
      clearInterval(raiseInterval);
      clearInterval(contributorsInterval);
      clearInterval(timerInterval);
      clearInterval(contributionInterval);
    };
  }, []);

  const calculateTokens = (sol) => {
    const solNum = parseFloat(sol) || 0;
    const usdValue = solNum * SOL_PRICE_USD;
    const base = Math.floor(usdValue / TOKEN_PRICE);
    const bonus = Math.floor(base * PHASE_1_BONUS);
    const total = base + bonus;
    
    setBaseTokens(base);
    setBonusTokens(bonus);
    setTotalTokens(total);
  };

  const handleContribute = () => {
    if (solAmount < 0.1) {
      alert('Minimum contribution is 0.1 SOL');
    } else if (solAmount > 100) {
      alert('Maximum contribution is 100 SOL');
    } else {
      alert('Connecting to Phantom wallet...');
    }
  };

  const progressPercent = ((raisedAmount / 500000) * 100).toFixed(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="presale" className="py-24 px-5 relative bg-gradient-to-b from-[#2d1b4e] to-[#1a0a2e] overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/50 mb-4"
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 40px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <motion.span 
              className="relative flex h-3 w-3"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </motion.span>
            <span className="text-green-300 font-semibold">LIVE NOW</span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Presale Phase 1
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 luxury-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get 30% bonus tokens - Limited time offer!
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Progress & Stats */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Presale Progress</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-300 text-sm font-semibold">LIVE</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-gray-400">Total Raised</span>
                  <span className="text-gray-400 text-sm">Goal: $500,000</span>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  ${raisedAmount.toLocaleString()}
                </div>
                <div className="relative h-4 bg-gray-700/50 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {progressPercent}%
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-users text-white"></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{contributors.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">Contributors</div>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{timeLeft}</div>
                      <div className="text-sm text-gray-400">Remaining</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Contributions */}
              <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <i className="fas fa-chart-line text-cyan-400"></i>
                  Recent Contributions
                </h4>
                <div className="space-y-2">
                  {recentContributions.map((contribution, index) => (
                    <div key={index} className="flex justify-between items-center text-sm bg-gray-900/50 rounded-lg p-2 animate-fadeIn">
                      <span className="text-gray-400 font-mono">{contribution.address}</span>
                      <span className="text-cyan-300 font-semibold">{contribution.amount} SOL</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Calculator */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">Calculate Your Tokens</h3>
            <p className="text-gray-400 mb-6">Get 30% bonus tokens in Phase 1!</p>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-300 mb-2">Enter SOL Amount</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={solAmount}
                  onChange={(e) => setSolAmount(e.target.value)}
                  min="0.1" 
                  max="100" 
                  step="0.1"
                  className="w-full bg-gray-800/80 border border-purple-500/30 rounded-xl px-4 py-4 text-2xl font-bold text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="1.0"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">SOL</span>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">Min: 0.1 SOL | Max: 100 SOL</span>
            </div>
            
            {/* Calculation Breakdown */}
            <div className="space-y-3 mb-6 bg-gray-800/50 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Base Tokens</span>
                <span className="text-white font-semibold">{baseTokens.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-green-400">
                <span className="flex items-center gap-2">
                  <i className="fas fa-gift"></i>
                  Bonus Tokens (30%)
                </span>
                <span className="font-semibold">+{bonusTokens.toLocaleString()}</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Total SHIBA Tokens</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {totalTokens.toLocaleString()}
                </span>
              </div>
            </div>
            
            {/* Output Display */}
            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
              <div className="text-sm text-gray-400 mb-2">You Will Receive</div>
              <div className="text-4xl font-bold text-white">{totalTokens.toLocaleString()}</div>
              <div className="text-lg text-purple-300 font-semibold">SHIBA Tokens</div>
            </div>
            
            {/* Contribute Button */}
            <button 
              onClick={handleContribute}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
            >
              <i className="fas fa-wallet"></i>
              Connect Phantom Wallet
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
              <i className="fab fa-solana text-cyan-400"></i>
              <span>Powered by Solana</span>
            </div>
          </div>
        </div>
        
        {/* Presale Phases */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white">Presale Phases & Pricing</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { phase: 'Phase 1', status: 'LIVE NOW', price: '$0.0001', bonus: '+30% Bonus', target: '$500K', active: true, gradient: 'from-green-500 to-emerald-500' },
            { phase: 'Phase 2', status: 'Coming Soon', price: '$0.00015', bonus: '+20% Bonus', target: '$1M', active: false, gradient: 'from-purple-500 to-pink-500' },
            { phase: 'Phase 3', status: 'Coming Soon', price: '$0.0002', bonus: '+10% Bonus', target: '$1.5M', active: false, gradient: 'from-cyan-500 to-blue-500' }
          ].map((phase, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 border ${phase.active ? 'border-green-500/50' : 'border-purple-500/20'} transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2`}
            >
              {phase.active && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold text-white">
                  ACTIVE
                </div>
              )}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${phase.gradient} mb-4`}>
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{phase.phase}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${phase.active ? 'bg-green-500/20 text-green-300' : 'bg-gray-700/50 text-gray-400'}`}>
                  {phase.status}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{phase.price}</div>
                <div className="text-green-400 font-semibold mb-2">{phase.bonus}</div>
                <div className="text-gray-400 text-sm">Target: {phase.target}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presale;
