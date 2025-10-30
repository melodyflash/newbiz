import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import KeyFeatures from './components/sections/KeyFeatures.jsx';
import ServicesOverview from './components/sections/ServicesOverview.jsx';
import ProofPoints from './components/sections/ProofPoints.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

const heroStats = [
  {
    label: 'Return Guests',
    value: '+41% loyalty growth',
  },
  {
    label: 'Operational Calm',
    value: '28% fewer escalations',
  },
  {
    label: 'Insight Cadence',
    value: 'Live service map',
  },
];

const featureCards = [
  {
    title: 'Signal Synchronization',
    description:
      'Fuse sensors, POS, and loyalty streams into a unified circuit so teams anticipate needs before they surface.',
    icon: 'Satellite',
    microIcons: ['Radar', 'Activity', 'Scan'],
  },
  {
    title: 'Mood-Aware Spaces',
    description:
      'Adaptive lighting, projection, and scent technology that respond gently to crowd energy in real time.',
    icon: 'Aperture',
    microIcons: ['Sun', 'Sparkles', 'Waves'],
  },
  {
    title: 'Fortified Network Core',
    description:
      'Secure mesh infrastructure assembled in California for reliable uptime during rush periods.',
    icon: 'ShieldHalf',
    microIcons: ['Cpu', 'Server', 'Lock'],
  },
];

const services = {
  title: 'Orchestrated Flows with Human Warmth',
  description:
    'We audit every touchpoint, then design guidance, automation, and analytics that keep your staff confident and guests relaxed.',
  highlights: [
    'Green-room dashboards that highlight guest sentiment without noise',
    'Predictive replenishment cues for retail and hospitality operators',
    'Hands-on pilots with training that champions your internal heroes',
  ],
};

const proofPoints = [
  {
    eyebrow: 'Coast-to-Coast Deployments',
    title: 'Scalable Systems',
    description:
      'Multi-location rollouts with mirrored KPIs and localized ambience to keep brand experiences cohesive.',
  },
  {
    eyebrow: 'Edge AI · Automation',
    title: 'Actionable Intelligence',
    description:
      'Crowd heatmaps and predictive analytics that surface opportunities without overwhelming dashboards.',
  },
  {
    eyebrow: 'Tap · Scan · Smile',
    title: 'Frictionless Checkout',
    description:
      'Guest-friendly wallet, QR, and biometric flows backed by hardened security and compliance.',
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
    <Layout navCta={{ href: '#contact', label: 'Plan a Circuit Audit' }}>
      <Hero stats={heroStats} />
      <KeyFeatures cards={featureCards} />
      <ServicesOverview services={services} />
      <ProofPoints points={proofPoints} />
      <ContactSection contact={contact} />
    </Layout>
  );
}

export default App;
