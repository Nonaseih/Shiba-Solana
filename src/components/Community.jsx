import { useState } from 'react';

const Community = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', gradient: 'from-blue-400 to-blue-600' },
    { name: 'Telegram', icon: 'fab fa-telegram', url: '#', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Discord', icon: 'fab fa-discord', url: '#', gradient: 'from-indigo-400 to-purple-600' },
    { name: 'Medium', icon: 'fab fa-medium', url: '#', gradient: 'from-green-400 to-emerald-600' }
  ];

  return (
    <section id="community" className="py-24 px-5 relative overflow-hidden bg-gradient-to-b from-[#2d1b4e] to-[#1a0a2e]">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of the earliest supporters and get exclusive benefits, updates, and early access to new features!
          </p>
        </div>
        
        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col items-center gap-4"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${social.icon} text-3xl text-white`}></i>
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-3xl p-10 border border-purple-500/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              <i className="fas fa-envelope text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-300">Subscribe to our newsletter for presale updates, announcements, and exclusive offers</p>
          </div>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-800/80 border border-purple-500/30 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-1 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          {subscribed && (
            <div className="mt-6 text-center animate-fadeIn">
              <div className="inline-block px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full">
                <span className="text-green-300 font-semibold flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Successfully subscribed!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '15K+', label: 'Telegram Members', icon: 'fa-users' },
            { value: '10K+', label: 'Twitter Followers', icon: 'fa-heart' },
            { value: '5K+', label: 'Discord Members', icon: 'fa-comments' },
            { value: '24/7', label: 'Community Support', icon: 'fa-headset' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <i className={`fas ${stat.icon} text-3xl text-purple-400 mb-3`}></i>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
