import Hero from '../components/sections/Hero.jsx';
import KeyFeatures from '../components/sections/KeyFeatures.jsx';
import ServicesOverview from '../components/sections/ServicesOverview.jsx';
import ProofPoints from '../components/sections/ProofPoints.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const Home = () => {
  useRevealOnScroll();

  return (
    <div>
      <Hero />
      <KeyFeatures />
      <ServicesOverview />
      <ProofPoints />
    </div>
  );
};

export default Home;
