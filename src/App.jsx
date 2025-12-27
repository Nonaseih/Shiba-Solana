import Header from './components/Header';
import Hero from './components/Hero';
import Presale from './components/Presale';
import Utility from './components/Utility';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
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
