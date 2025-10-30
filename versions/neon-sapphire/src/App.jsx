import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import KeyFeatures from './components/sections/KeyFeatures.jsx';
import ServicesOverview from './components/sections/ServicesOverview.jsx';
import ProofPoints from './components/sections/ProofPoints.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

const heroStats = [
  {
    label: 'Retention Uplift',
    value: '+38% loyal visits',
  },
  {
    label: 'Service Speed',
    value: '22% faster flows',
  },
  {
    label: 'Insight Velocity',
    value: 'Live dashboards',
  },
];

const featureCards = [
  {
    title: 'Data Choreography',
    description:
      'Unify IoT signals, dwell analytics, and loyalty trends so leaders react with precision and calm.',
    icon: 'Activity',
    microIcons: ['BarChart3', 'Radar', 'Scan'],
  },
  {
    title: 'Experiential Engineering',
    description:
      'Soft-lit displays, adaptive signage, and orchestrated audio that match the rhythm of your brand.',
    icon: 'Sparkle',
    microIcons: ['Palette', 'Waves', 'Framer'],
  },
  {
    title: 'Trusted Infrastructure',
    description:
      'California-built hardware and secure wireless networks that stay resilient during peak demand.',
    icon: 'ShieldCheck',
    microIcons: ['Cpu', 'Server', 'CircuitBoard'],
  },
];

const services = {
  title: 'Precision Journeys for Every Guest',
  description:
    'From queue intelligence to ambient automation, we map the end-to-end flow so customers feel seen and supported.',
  highlights: [
    'Orchestrated welcome experiences that guide without overwhelming',
    'Predictive staffing alerts based on real-time occupancy trends',
    'Modular IoT kits that deploy quickly and scale sustainably',
  ],
};

const proofPoints = [
  {
    eyebrow: '15 yrs · Hospitality & Retail',
    title: 'Experience You Can Feel',
    description:
      'Flagship rollouts that blend premium materials with pragmatic uptime metrics across California venues.',
  },
  {
    eyebrow: 'Heatmaps · Wait AI',
    title: 'Clarity in Every Decision',
    description:
      'Visualize friction points before they spike by combining dwell patterns, customer sentiment, and staffing data.',
  },
  {
    eyebrow: 'Wallets · Contactless',
    title: 'Frictionless Moments',
    description:
      'Secure tap-to-pay and loyalty enrollment that keep the line flowing while preserving trust.',
  },
];

const contact = {
  studio: 'Smart Biz Upgrade',
  location: 'Ocean Beach, CA · Serving California',
  phone: '(555) 123-4567',
  email: 'hello@smartbizupgrade.com',
};

function App() {
  return (
    <Layout navCta={{ href: '#contact', label: 'Schedule a Strategy Call' }}>
      <Hero stats={heroStats} />
      <KeyFeatures cards={featureCards} />
      <ServicesOverview services={services} />
      <ProofPoints points={proofPoints} />
      <ContactSection contact={contact} />
    </Layout>
  );
}

export default App;
