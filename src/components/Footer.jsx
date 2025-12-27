const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Presale', href: '#presale' },
        { name: 'Utility', href: '#utility' },
        { name: 'Tokenomics', href: '#tokenomics' },
        { name: 'Roadmap', href: '#roadmap' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Whitepaper', href: '#' },
        { name: 'Audit Report', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#', name: 'Twitter' },
    { icon: 'fab fa-telegram', href: '#', name: 'Telegram' },
    { icon: 'fab fa-discord', href: '#', name: 'Discord' },
    { icon: 'fab fa-github', href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1a0a2e] to-[#0a0118] py-16 px-5 border-t border-purple-500/20">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <i className="fas fa-dog text-white text-2xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                $SOLANA SHIBA
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The most powerful DeFi utility token on Solana blockchain. Built for speed, security, and scalability.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-purple-500/20 hover:bg-purple-500/40 border border-purple-500/30 hover:border-purple-500/60 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-purple-300`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} $Solana Shiba. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right max-w-md">
              Cryptocurrency investments carry risk. Please invest responsibly and do your own research.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
