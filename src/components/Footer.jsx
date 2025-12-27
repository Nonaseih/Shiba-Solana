const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Shiba Solana</h4>
            <p>The most powerful DeFi utility token on Solana blockchain.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#presale">Presale</a></li>
              <li><a href="#utility">Utility</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Audit Report</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Shiba Solana. All rights reserved.</p>
          <p className="disclaimer">
            Cryptocurrency investments carry risk. Please invest responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
