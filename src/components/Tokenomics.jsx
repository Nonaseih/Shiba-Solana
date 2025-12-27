import { useState } from 'react';
import '../styles/Tokenomics.css';

const Tokenomics = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    const address = document.getElementById('contractAddress').textContent;
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="tokenomics" className="tokenomics">
      <div className="container">
        <h2 className="section-title">Tokenomics & Utility</h2>
        <div className="tokenomics-grid">
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-coins"></i></div>
            <h3>Total Supply</h3>
            <p className="tokenomics-value">1,000,000,000</p>
            <p className="tokenomics-description">Fixed supply, deflationary model</p>
          </div>
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-rocket"></i></div>
            <h3>Presale</h3>
            <p className="tokenomics-value">30%</p>
            <p className="tokenomics-description">300M tokens for early adopters</p>
          </div>
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-tint"></i></div>
            <h3>Liquidity Pool</h3>
            <p className="tokenomics-value">30%</p>
            <p className="tokenomics-description">Locked for 3 years</p>
          </div>
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-gem"></i></div>
            <h3>Staking Rewards</h3>
            <p className="tokenomics-value">25%</p>
            <p className="tokenomics-description">Long-term holder incentives</p>
          </div>
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-tools"></i></div>
            <h3>Development</h3>
            <p className="tokenomics-value">10%</p>
            <p className="tokenomics-description">Platform building & maintenance</p>
          </div>
          <div className="tokenomics-card">
            <div className="card-icon"><i className="fas fa-fire"></i></div>
            <h3>Token Burns</h3>
            <p className="tokenomics-value">5%</p>
            <p className="tokenomics-description">Quarterly automatic burns</p>
          </div>
        </div>
        
        <div className="presale-info">
          <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '30px', color: 'var(--primary-color)' }}>
            Presale Pricing
          </h3>
          <div className="presale-phases" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '15px', border: '2px solid var(--primary-color)' }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '10px' }}>Phase 1 (LIVE) 🔥</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' }}>$0.0001</p>
              <p style={{ color: 'var(--text-secondary)' }}>+30% Bonus Tokens</p>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(184, 79, 240, 0.3)' }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '10px' }}>Phase 2</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' }}>$0.00015</p>
              <p style={{ color: 'var(--text-secondary)' }}>+20% Bonus Tokens</p>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(184, 79, 240, 0.3)' }}>
              <h4 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '10px' }}>Phase 3</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0' }}>$0.0002</p>
              <p style={{ color: 'var(--text-secondary)' }}>+10% Bonus Tokens</p>
            </div>
          </div>
        </div>
        
        <div className="contract-address">
          <p>Presale Contract Address:</p>
          <div className="address-box">
            <code id="contractAddress">YOUR_PRESALE_CONTRACT_ADDRESS_HERE</code>
            <button className="copy-btn" id="copyBtn" onClick={handleCopyAddress}>
              {copiedAddress ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
