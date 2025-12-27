import { useState } from 'react';
import '../styles/Community.css';

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

  return (
    <section id="community" className="community">
      <div className="container">
        <h2 className="section-title">Join Our Presale Community</h2>
        <p className="community-subtitle">Be part of the earliest supporters and get exclusive benefits!</p>
        
        <div className="social-links">
          <a href="#" className="social-link twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Twitter</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-telegram"></i>
            <span>Telegram</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-discord"></i>
            <span>Discord</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-medium"></i>
            <span>Medium</span>
          </a>
        </div>
        
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for presale updates and exclusive offers</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          {subscribed && (
            <p className="subscribe-success">✅ Successfully subscribed!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;
