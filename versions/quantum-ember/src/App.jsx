import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import KeyFeatures from './components/sections/KeyFeatures.jsx';
import ServicesOverview from './components/sections/ServicesOverview.jsx';
import ProofPoints from './components/sections/ProofPoints.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

const heroStats = [
  {
    label: 'Experience Lift',
    value: '+36% premium orders',
  },
  {
    label: 'Team Efficiency',
    value: '21% more throughput',
  },
  {
    label: 'Insight Cadence',
    value: 'Real-time pulse',
  },
];

const featureCards = [
  {
    title: 'Quantum Sensing',
    description:
      'Capture emotional cues and flow metrics with ambient sensors that translate into clear coaching moments.',
    icon: 'Sparkles',
    microIcons: ['Camera', 'Activity', 'Gauge'],
  },
  {
    title: 'Story-Driven Displays',
    description:
      'Immersive projection, lighting, and narrative content choreographed to guide guests intuitively.',
    icon: 'FlameKindling',
    microIcons: ['MonitorPlay', 'Feather', 'Stars'],
  },
  {
    title: 'Ember-grade Security',
    description:
      'Resilient connectivity and payments fortified with zero-trust guardrails crafted by California engineers.',
    icon: 'ShieldCheck',
    microIcons: ['Fingerprint', 'Lock', 'Server'],
  },
];

const services = {
  title: 'Lighting the Path from Curiosity to Loyalty',
  description:
    'Quantum Ember blends sensory design, automation, and analytics into an inviting glow that keeps guests exploring longer.',
  highlights: [
    'Emotion-aware signage that adapts to traffic and sentiment',
    'Guided staff prompts that boost hospitality moments without scripts',
    'Launch programs that balance theatrical wow with measurable ROI',
  ],
};

const proofPoints = [
  {
    eyebrow: 'Flagship Retail · Hospitality',
    title: 'Signature Activations',
    description:
      'Immersive environments that spark conversation and measurable conversion lift in California’s most iconic districts.',
  },
  {
    eyebrow: 'Behavior Mapping · AI',
    title: 'Precision Signals',
    description:
      'Heat, light, and acoustic sensing combine with transaction data to reveal the stories behind every spike.',
  },
  {
    eyebrow: 'Tap · Biometrics',
    title: 'Trustworthy Payments',
    description:
      'Faster checkouts with layered security so guests feel both inspired and safe.',
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
    <Layout navCta={{ href: '#contact', label: 'Request an Ember Blueprint' }}>
      <Hero stats={heroStats} />
      <KeyFeatures cards={featureCards} />
      <ServicesOverview services={services} />
      <ProofPoints points={proofPoints} />
      <ContactSection contact={contact} />
    </Layout>
  );
}

export default App;
