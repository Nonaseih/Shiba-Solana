import { motion } from 'framer-motion';

const Utility = () => {
  const utilities = [
    {
      icon: 'fa-layer-group',
      title: 'Staking Rewards',
      description: 'Earn passive income with up to 45% APY on staked tokens. Lock your tokens and watch your portfolio grow.',
      gradient: 'from-purple-500 to-pink-500',
      stats: '45% APY'
    },
    {
      icon: 'fa-exchange-alt',
      title: 'DEX Aggregator',
      description: 'Access the best rates across all Solana DEXes. Our smart routing ensures you get maximum value on every swap.',
      gradient: 'from-cyan-500 to-blue-500',
      stats: 'Best Rates'
    },
    {
      icon: 'fa-image',
      title: 'NFT Launchpad',
      description: 'Launch and trade NFT collections with zero hassle. Built-in marketplace with minimal fees and instant settlements.',
      gradient: 'from-pink-500 to-rose-500',
      stats: '0.5% Fee'
    },
    {
      icon: 'fa-chart-line',
      title: 'Yield Farming',
      description: 'Maximize returns by providing liquidity to multiple pools. Automated strategies optimize your earnings 24/7.',
      gradient: 'from-green-500 to-emerald-500',
      stats: 'Auto-Compound'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Insurance Fund',
      description: 'Protect your investments with our community-backed insurance pool. Safety and security are our top priorities.',
      gradient: 'from-orange-500 to-red-500',
      stats: '$2M Pool'
    },
    {
      icon: 'fa-users',
      title: 'DAO Governance',
      description: 'Shape the future of the platform. Token holders vote on proposals, upgrades, and fund allocations.',
      gradient: 'from-indigo-500 to-purple-500',
      stats: '1 Token = 1 Vote'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="utility" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real Utility, Real Value
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto luxury-serif px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            $Solana Shiba isn't just another meme token - it's a complete DeFi ecosystem built on Solana's lightning-fast blockchain. 
            Experience the future of decentralized finance.
          </motion.p>
        </motion.div>

        {/* Utility Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {utilities.map((utility, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${utility.gradient} mb-4 sm:mb-6`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <i className={`fas ${utility.icon} text-xl sm:text-2xl text-white`}></i>
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-300 transition-colors">
                {utility.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                {utility.description}
              </p>
              
              {/* Stats Badge */}
              <motion.div 
                className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${utility.gradient} bg-opacity-20 text-xs sm:text-sm font-semibold`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  {utility.stats}
                </span>
              </motion.div>

              {/* Hover Effect Border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: 'Total Value Locked', value: '$12.5M', icon: 'fa-lock' },
            { label: 'Active Users', value: '25,000+', icon: 'fa-users' },
            { label: 'Transactions', value: '1.2M+', icon: 'fa-exchange-alt' },
            { label: 'Network Uptime', value: '99.99%', icon: 'fa-check-circle' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.i 
                className={`fas ${stat.icon} text-3xl text-purple-400 mb-3`}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a 
            href="#presale"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(168, 85, 247, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-rocket"></i>
            <span>Join the Revolution</span>
            <motion.i 
              className="fas fa-arrow-right"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Utility;
