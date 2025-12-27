const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Launch',
      status: 'completed',
      icon: 'fa-check-circle',
      date: 'Q4 2024',
      items: [
        { text: 'Website & presale portal live', completed: true },
        { text: 'Smart contract audit completed', completed: true },
        { text: 'Social media campaigns launched', completed: true },
        { text: 'Early bird bonus: 30% tokens', completed: true }
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Community Growth',
      status: 'active',
      icon: 'fa-rocket',
      date: 'Q1 2025',
      progress: '65%',
      items: [
        { text: 'Reach 5,000+ presale investors', completed: false },
        { text: 'Strategic influencer partnerships', completed: false },
        { text: 'Weekly AMAs & community events', completed: false },
        { text: 'Bonus reduced to 20%', completed: false }
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Final Push',
      status: 'upcoming',
      icon: 'fa-fire',
      date: 'Q2 2025',
      items: [
        { text: 'Soft cap reached ($500K)', completed: false },
        { text: 'Massive marketing campaign', completed: false },
        { text: 'Final bonus: 10% extra tokens', completed: false },
        { text: 'DEX launch preparations', completed: false }
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Beyond',
      status: 'upcoming',
      icon: 'fa-moon',
      date: 'Q3 2025',
      items: [
        { text: 'Token claim portal opens', completed: false },
        { text: 'DEX listing (Raydium/Orca)', completed: false },
        { text: 'Liquidity locked for 2 years', completed: false },
        { text: 'CEX listings & moon mission', completed: false }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-500';
      case 'active': return 'from-purple-500 to-pink-500';
      case 'upcoming': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return { text: 'Completed', bg: 'bg-green-500/20', textColor: 'text-green-300', border: 'border-green-500/50' };
      case 'active': return { text: 'In Progress', bg: 'bg-purple-500/20', textColor: 'text-purple-300', border: 'border-purple-500/50' };
      case 'upcoming': return { text: 'Upcoming', bg: 'bg-gray-500/20', textColor: 'text-gray-400', border: 'border-gray-500/50' };
      default: return { text: 'Unknown', bg: 'bg-gray-500/20', textColor: 'text-gray-400', border: 'border-gray-500/50' };
    }
  };

  return (
    <section id="roadmap" className="py-24 px-5 relative overflow-hidden bg-gradient-to-b from-[#2d1b4e] to-[#1a0a2e]">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Presale Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our journey to revolutionize DeFi on Solana
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2 hidden md:block"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-gray-700 transform -translate-y-1/2 hidden md:block" style={{ width: '50%' }}></div>
          
          <div className="grid md:grid-cols-4 gap-4 relative">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} flex items-center justify-center mb-4 relative z-10 shadow-lg ${phase.status === 'active' ? 'animate-pulse' : ''}`}>
                  <i className={`fas ${phase.icon} text-2xl text-white`}></i>
                </div>
                <span className="text-sm text-gray-400">{phase.phase}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {roadmapPhases.map((phase, index) => {
            const badge = getStatusBadge(phase.status);
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  phase.status === 'completed' ? 'border-green-500/30 hover:border-green-500/50' :
                  phase.status === 'active' ? 'border-purple-500/50 hover:border-purple-500/70 shadow-xl shadow-purple-500/20' :
                  'border-gray-700/30 hover:border-gray-700/50'
                }`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${badge.bg} ${badge.textColor} border ${badge.border}`}>
                      {badge.text}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <i className="fas fa-calendar"></i>
                      <span>{phase.date}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getStatusColor(phase.status)} flex items-center justify-center`}>
                    <i className={`fas ${phase.icon} text-xl text-white`}></i>
                  </div>
                </div>

                {/* Progress Bar for Active Phase */}
                {phase.status === 'active' && phase.progress && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{phase.progress}</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: phase.progress }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <i className={`fas ${
                        phase.status === 'completed' || item.completed ? 'fa-check-circle text-green-400' :
                        phase.status === 'active' ? 'fa-spinner fa-spin text-purple-400' :
                        'fa-circle text-gray-600'
                      } mt-1`}></i>
                      <span className={`text-sm ${
                        phase.status === 'completed' || item.completed ? 'text-gray-300' : 'text-gray-400'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
