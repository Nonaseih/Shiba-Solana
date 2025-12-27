import Header from './components/Header';
import Hero from './components/Hero';
import Presale from './components/Presale';
import Utility from './components/Utility';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0a2e] text-white">
      <Header />
      <Hero />
      <Presale />
      <Utility />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
