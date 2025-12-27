const Utility = () => {
  return (
    <section id="utility" className="about">
      <div className="container">
        <h2 className="section-title">Real Utility, Real Value</h2>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              Shiba Solana isn't just another token - it's a complete DeFi ecosystem on Solana. 
              We're building real utility tools that solve actual problems in the crypto space.
            </p>
            <p className="about-text">
              From yield farming and staking to NFT launchpad and token swap aggregation, 
              our platform brings together the best DeFi features with lightning-fast Solana performance.
            </p>
            <div className="features">
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-gem"></i></div>
                <h3>Staking Rewards</h3>
                <p>Earn passive income with up to 45% APY on staked tokens</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-exchange-alt"></i></div>
                <h3>Token Swap</h3>
                <p>Best rates aggregated from top Solana DEXes</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><i className="fas fa-image"></i></div>
                <h3>NFT Launchpad</h3>
                <p>Launch and trade NFT collections with zero hassle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utility;
