import { useState, useEffect } from 'react';
import '../styles/Presale.css';

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

  return (
    <section id="presale" className="presale-section">
      <div className="container">
        <h2 className="section-title">Live Presale - Phase 1</h2>
        
        <div className="presale-container">
          {/* Left Side - Progress & Stats */}
          <div className="presale-progress-section">
            <div className="presale-status-card">
              <div className="card-header">
                <h3>Presale Progress</h3>
                <span className="live-indicator">
                  <span className="live-dot"></span>
                  LIVE
                </span>
              </div>
              
              <div className="raised-amount">
                <span className="label">Total Raised</span>
                <span className="amount" id="totalRaised">${raisedAmount.toLocaleString()}</span>
                <span className="target">/ $500,000</span>
              </div>
              
              <div className="presale-progress-bar">
                <div 
                  className="progress-fill" 
                  id="progressFill" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
                <span className="progress-percent" id="progressPercent">{progressPercent}%</span>
              </div>
              
              <div className="presale-stats-grid">
                <div className="stat-box">
                  <i className="fas fa-users"></i>
                  <div>
                    <div className="stat-value" id="contributors">{contributors.toLocaleString()}</div>
                    <div className="stat-label">Contributors</div>
                  </div>
                </div>
                <div className="stat-box">
                  <i className="fas fa-clock"></i>
                  <div>
                    <div className="stat-value" id="timeLeft">{timeLeft}</div>
                    <div className="stat-label">Time Remaining</div>
                  </div>
                </div>
              </div>
              
              <div className="recent-contributions">
                <h4>Recent Contributions</h4>
                <div className="contribution-list" id="contributionList">
                  {recentContributions.map((contribution, index) => (
                    <div key={index} className="contribution-item">
                      <span className="contributor-address">{contribution.address}</span>
                      <span className="contribution-amount">{contribution.amount} SOL</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Calculator */}
          <div className="contribution-calculator">
            <div className="calculator-card">
              <h3>Calculate Your Tokens</h3>
              <p className="calculator-subtitle">Get 30% bonus tokens in Phase 1!</p>
              
              <div className="input-group">
                <label htmlFor="solInput">Enter SOL Amount</label>
                <div className="input-wrapper">
                  <input 
                    type="number" 
                    id="solInput" 
                    value={solAmount}
                    onChange={(e) => setSolAmount(e.target.value)}
                    min="0.1" 
                    max="100" 
                    step="0.1"
                    placeholder="1.0"
                  />
                  <span className="input-currency">SOL</span>
                </div>
                <span className="input-hint">Min: 0.1 SOL | Max: 100 SOL</span>
              </div>
              
              <div className="calculation-breakdown">
                <div className="breakdown-item">
                  <span>Base Tokens</span>
                  <span className="breakdown-value" id="baseTokens">{baseTokens.toLocaleString()}</span>
                </div>
                <div className="breakdown-item bonus">
                  <span>Bonus Tokens (30%)</span>
                  <span className="breakdown-value" id="bonusTokens">+{bonusTokens.toLocaleString()}</span>
                </div>
                <div className="breakdown-item total">
                  <span>Total SHIBA Tokens</span>
                  <span className="breakdown-value" id="totalTokens">{totalTokens.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="output-group">
                <label>You Will Receive</label>
                <div className="token-output">
                  <span className="output-value" id="tokensOutput">{totalTokens.toLocaleString()}</span>
                  <span className="output-currency">SHIBA</span>
                </div>
              </div>
              
              <button 
                className="contribute-btn" 
                id="contributeBtn"
                onClick={handleContribute}
              >
                <i className="fas fa-wallet"></i>
                Connect Wallet to Contribute
              </button>
              
              <div className="payment-methods">
                <span>Accepted:</span>
                <div className="payment-icons">
                  <i className="fab fa-solana" title="Solana"></i>
                  <span>Phantom Wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Presale Phases */}
        <div className="presale-phases">
          <h3 className="phases-title">Presale Phases & Pricing</h3>
          <div className="phases-grid">
            <div className="phase-card active">
              <div className="phase-header">
                <span className="phase-number">Phase 1</span>
                <span className="phase-status">LIVE NOW</span>
              </div>
              <div className="phase-price">$0.0001</div>
              <div className="phase-bonus">+30% Bonus</div>
              <div className="phase-raise">Target: $500K</div>
            </div>
            <div className="phase-card">
              <div className="phase-header">
                <span className="phase-number">Phase 2</span>
                <span className="phase-status">Coming Soon</span>
              </div>
              <div className="phase-price">$0.00015</div>
              <div className="phase-bonus">+20% Bonus</div>
              <div className="phase-raise">Target: $1M</div>
            </div>
            <div className="phase-card">
              <div className="phase-header">
                <span className="phase-number">Phase 3</span>
                <span className="phase-status">Coming Soon</span>
              </div>
              <div className="phase-price">$0.0002</div>
              <div className="phase-bonus">+10% Bonus</div>
              <div className="phase-raise">Target: $1.5M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
