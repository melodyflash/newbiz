import ServicesOverview from '../components/sections/ServicesOverview.jsx';
import KeyFeatures from '../components/sections/KeyFeatures.jsx';
import ProofPoints from '../components/sections/ProofPoints.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const Services = () => {
  useRevealOnScroll();

  return (
    <div className="space-y-6">
      <header className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-cyan-50 sm:text-5xl">Solutions Designed to Scale with You</h1>
        <p className="mt-4 text-base text-cyan-200/80 sm:text-lg">
          From quick-deploy digital signage to bespoke automation systems, our team delivers future-ready environments
          tuned for hospitality, retail, and experiential spaces.
        </p>
      </header>
      <ServicesOverview />
      <KeyFeatures />
      <ProofPoints />
    </div>
  );
};

export default Services;
