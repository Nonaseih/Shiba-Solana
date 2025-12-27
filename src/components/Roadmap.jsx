const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="roadmap-header">
          <h2 className="section-title">Presale Roadmap</h2>
          <p className="roadmap-subtitle">Follow our journey to revolutionize DeFi on Solana</p>
        </div>
        
        {/* Progress Tracker */}
        <div className="roadmap-progress">
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '50%' }}></div>
            <div className="progress-dots">
              <div className="progress-dot completed" data-phase="1"></div>
              <div className="progress-dot active" data-phase="2"></div>
              <div className="progress-dot" data-phase="3"></div>
              <div className="progress-dot" data-phase="4"></div>
            </div>
          </div>
        </div>
        
        {/* Roadmap Cards */}
        <div className="roadmap-grid">
          <div className="roadmap-card completed">
            <div className="roadmap-card-header">
              <div className="roadmap-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="roadmap-phase">
                <span className="phase-label">Phase 1</span>
                <span className="phase-status completed-status">Completed</span>
              </div>
            </div>
            <h3 className="roadmap-title">Foundation & Launch</h3>
            <div className="roadmap-details">
              <div className="roadmap-item">
                <i className="fas fa-check"></i>
                <span>Website & presale portal live</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-check"></i>
                <span>Smart contract audit completed</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-check"></i>
                <span>Social media campaigns launched</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-check"></i>
                <span>Early bird bonus: 30% tokens</span>
              </div>
            </div>
            <div className="roadmap-footer">
              <span className="roadmap-date"><i className="fas fa-calendar"></i> Q4 2024</span>
            </div>
          </div>
          
          <div className="roadmap-card active">
            <div className="roadmap-card-header">
              <div className="roadmap-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="roadmap-phase">
                <span className="phase-label">Phase 2</span>
                <span className="phase-status active-status">In Progress</span>
              </div>
            </div>
            <h3 className="roadmap-title">Community Growth</h3>
            <div className="roadmap-details">
              <div className="roadmap-item">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Reach 5,000+ presale investors</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Strategic influencer partnerships</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Weekly AMAs & community events</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Bonus reduced to 20%</span>
              </div>
            </div>
            <div className="roadmap-footer">
              <span className="roadmap-date"><i className="fas fa-calendar"></i> Q1 2025</span>
              <span className="roadmap-progress-label">65% Complete</span>
            </div>
          </div>
          
          <div className="roadmap-card upcoming">
            <div className="roadmap-card-header">
              <div className="roadmap-icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="roadmap-phase">
                <span className="phase-label">Phase 3</span>
                <span className="phase-status upcoming-status">Upcoming</span>
              </div>
            </div>
            <h3 className="roadmap-title">Final Push</h3>
            <div className="roadmap-details">
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>Soft cap reached ($500K)</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>Massive marketing campaign</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>Final bonus: 10% extra tokens</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>DEX launch preparations</span>
              </div>
            </div>
            <div className="roadmap-footer">
              <span className="roadmap-date"><i className="fas fa-calendar"></i> Q2 2025</span>
            </div>
          </div>
          
          <div className="roadmap-card upcoming">
            <div className="roadmap-card-header">
              <div className="roadmap-icon">
                <i className="fas fa-moon"></i>
              </div>
              <div className="roadmap-phase">
                <span className="phase-label">Phase 4</span>
                <span className="phase-status upcoming-status">Upcoming</span>
              </div>
            </div>
            <h3 className="roadmap-title">Launch & Beyond</h3>
            <div className="roadmap-details">
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>Token claim portal opens</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>DEX listing (Raydium/Orca)</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>Liquidity locked for 2 years</span>
              </div>
              <div className="roadmap-item">
                <i className="fas fa-circle"></i>
                <span>CEX listings & moon mission</span>
              </div>
            </div>
            <div className="roadmap-footer">
              <span className="roadmap-date"><i className="fas fa-calendar"></i> Q3 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
