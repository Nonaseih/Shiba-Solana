import { useState } from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    const address = 'YOUR_PRESALE_CONTRACT_ADDRESS_HERE';
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const tokenomicsData = [
    { 
      icon: 'fa-rocket', 
      title: 'Presale', 
      value: '30%', 
      amount: '300M',
      description: 'Early adopters & investors',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: 'fa-tint', 
      title: 'Liquidity Pool', 
      value: '30%', 
      amount: '300M',
      description: 'Locked for 3 years',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: 'fa-gem', 
      title: 'Staking Rewards', 
      value: '25%', 
      amount: '250M',
      description: 'Long-term holder incentives',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: 'fa-tools', 
      title: 'Development', 
      value: '10%', 
      amount: '100M',
      description: 'Platform & maintenance',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: 'fa-fire', 
      title: 'Token Burns', 
      value: '5%', 
      amount: '50M',
      description: 'Quarterly automatic burns',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const presalePhases = [
    { phase: 'Phase 1', status: 'LIVE', price: '$0.0001', bonus: '+30%', active: true },
    { phase: 'Phase 2', status: 'Soon', price: '$0.00015', bonus: '+20%', active: false },
    { phase: 'Phase 3', status: 'Soon', price: '$0.0002', bonus: '+10%', active: false }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="tokenomics" className="py-24 px-5 relative overflow-hidden bg-gradient-to-b from-[#1a0a2e] to-[#2d1b4e]">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tokenomics & Distribution
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto luxury-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transparent, sustainable, and designed for long-term growth
          </motion.p>
        </motion.div>

        {/* Total Supply Card */}
        <motion.div 
          className="max-w-2xl mx-auto mb-16 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-3xl p-8 border-2 border-purple-500/50 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
          <div className="relative z-10 text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <i className="fas fa-coins text-4xl text-white"></i>
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">Total Supply</h3>
            <motion.div 
              className="text-6xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              1,000,000,000
            </motion.div>
            <p className="text-lg text-gray-400 luxury-serif">Fixed supply • Deflationary model</p>
          </div>
        </motion.div>

        {/* Tokenomics Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tokenomicsData.map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${item.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.value}
                </span>
                <span className="text-lg text-gray-400">({item.amount})</span>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
          
          {/* Marketing Card */}
          <div className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 md:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-bullhorn text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Marketing</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Community Driven
              </span>
            </div>
            <p className="text-gray-400 text-sm">Organic growth & partnerships</p>
          </div>
        </motion.div>

        {/* Presale Pricing Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-8 text-white">Presale Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {presalePhases.map((phase, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  phase.active 
                    ? 'border-2 border-green-500/50 shadow-2xl shadow-green-500/20' 
                    : 'border border-purple-500/20 hover:border-purple-500/50'
                }`}
              >
                {phase.active && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {phase.status}
                    </span>
                  </div>
                )}
                <div className="text-center pt-3">
                  <h4 className={`text-2xl font-bold mb-3 ${phase.active ? 'text-green-400' : 'text-purple-400'}`}>
                    {phase.phase}
                  </h4>
                  <div className="text-5xl font-bold text-white mb-2">{phase.price}</div>
                  <div className="text-lg font-semibold text-green-400 mb-4">{phase.bonus} Bonus</div>
                  {!phase.active && <div className="text-sm text-gray-500">Coming Soon</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Address */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Presale Contract Address</h3>
            <p className="text-sm text-gray-500">Verify on Solana Explorer</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/80 rounded-xl p-4">
            <code className="flex-1 text-purple-300 font-mono text-sm break-all">
              YOUR_PRESALE_CONTRACT_ADDRESS_HERE
            </code>
            <button 
              onClick={handleCopyAddress}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                copiedAddress 
                  ? 'bg-green-500 text-white' 
                  : 'bg-purple-600 hover:bg-purple-500 text-white'
              }`}
            >
              <i className={`fas ${copiedAddress ? 'fa-check' : 'fa-copy'} mr-2`}></i>
              {copiedAddress ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
