import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import KeyFeatures from './components/sections/KeyFeatures.jsx';
import ServicesOverview from './components/sections/ServicesOverview.jsx';
import ProofPoints from './components/sections/ProofPoints.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

const heroStats = [
  {
    label: 'Guest Delight',
    value: '+33% return intent',
  },
  {
    label: 'Operational Harmony',
    value: '24% fewer bottlenecks',
  },
  {
    label: 'Insight Rhythm',
    value: 'Live clarity hub',
  },
];

const featureCards = [
  {
    title: 'Nebula Intelligence',
    description:
      'Real-time trend mapping fuses Wi-Fi analytics, POS, and sentiment signals into a single source of truth.',
    icon: 'Orbit',
    microIcons: ['BarChart3', 'Sparkles', 'Satellite'],
  },
  {
    title: 'Atmospheric Design',
    description:
      'Projection, lighting, and audio scenes tuned to calm, focus, or energize guests with subtle cues.',
    icon: 'Cloudy',
    microIcons: ['Waves', 'Palette', 'Sunset'],
  },
  {
    title: 'Guarded Continuity',
    description:
      'Resilient wireless and payment systems engineered for consistent uptime without sacrificing elegance.',
    icon: 'Shield',
    microIcons: ['Cpu', 'Fingerprint', 'Server'],
  },
];

const services = {
  title: 'Designing Stellar Journeys That Feel Effortless',
  description:
    'Stellar Violet unifies data and mood to help teams anticipate needs, delight loyalists, and welcome new guests with grace.',
  highlights: [
    'Predictive readiness dashboards with calm visual language',
    'Concierge automations that support human hosts—not replace them',
    'Phased launches to de-risk innovation while maintaining quality',
  ],
};

const proofPoints = [
  {
    eyebrow: 'Boutique Hotels · Venues',
    title: 'Luxury-Calibrated',
    description:
      'High-touch rollouts that enhance ambience and measurable KPIs at the same time.',
  },
  {
    eyebrow: 'AI Playbooks',
    title: 'Confidence at Scale',
    description:
      'Service playbooks supported by AI co-pilots keep staff clear, calm, and consistent.',
  },
  {
    eyebrow: 'Tap · Reserve',
    title: 'Ease Everywhere',
    description:
      'Unified booking and payment flows with layered protection and style.',
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
    <Layout navCta={{ href: '#contact', label: 'Book a Stellar Workshop' }}>
      <Hero stats={heroStats} />
      <KeyFeatures cards={featureCards} />
      <ServicesOverview services={services} />
      <ProofPoints points={proofPoints} />
      <ContactSection contact={contact} />
    </Layout>
  );
}

export default App;
