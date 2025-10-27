import { useMemo } from 'react';
import { Download, Layers, HardDrive, FileText } from 'lucide-react';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import appSource from '../App.jsx?raw';
import mainSource from '../main.jsx?raw';
import layoutSource from '../components/layout/Layout.jsx?raw';
import navbarSource from '../components/layout/Navbar.jsx?raw';
import footerSource from '../components/layout/Footer.jsx?raw';
import animatedBackgroundSource from '../components/layout/AnimatedBackground.jsx?raw';
import heroSource from '../components/sections/Hero.jsx?raw';
import keyFeaturesSource from '../components/sections/KeyFeatures.jsx?raw';
import servicesOverviewSource from '../components/sections/ServicesOverview.jsx?raw';
import proofPointsSource from '../components/sections/ProofPoints.jsx?raw';
import contactSectionSource from '../components/sections/ContactSection.jsx?raw';
import homePageSource from './Home.jsx?raw';
import servicesPageSource from './Services.jsx?raw';
import contactPageSource from './Contact.jsx?raw';
import revealHookSource from '../hooks/useRevealOnScroll.js?raw';
import stylesSource from '../index.css?raw';

const downloadEntries = [
  {
    name: 'App.jsx',
    path: 'src/App.jsx',
    description: 'Route map that connects layout chrome with each content page.',
    content: appSource,
  },
  {
    name: 'main.jsx',
    path: 'src/main.jsx',
    description: 'React entry point bootstrapping the router and global styles.',
    content: mainSource,
  },
  {
    name: 'Layout.jsx',
    path: 'src/components/layout/Layout.jsx',
    description: 'Shared shell containing the navbar, footer, and animated background.',
    content: layoutSource,
  },
  {
    name: 'Navbar.jsx',
    path: 'src/components/layout/Navbar.jsx',
    description: 'Responsive navigation with wave-hover CTAs and scroll-state styling.',
    content: navbarSource,
  },
  {
    name: 'Footer.jsx',
    path: 'src/components/layout/Footer.jsx',
    description: 'Call-to-action footer with contact details and social links.',
    content: footerSource,
  },
  {
    name: 'AnimatedBackground.jsx',
    path: 'src/components/layout/AnimatedBackground.jsx',
    description: 'Full-screen animated tech backdrop rendered behind every page.',
    content: animatedBackgroundSource,
  },
  {
    name: 'Hero.jsx',
    path: 'src/components/sections/Hero.jsx',
    description: 'Hero section with badges, stats, and slim gradient CTAs.',
    content: heroSource,
  },
  {
    name: 'KeyFeatures.jsx',
    path: 'src/components/sections/KeyFeatures.jsx',
    description: 'Feature cards highlighting intelligence, engineering, and craftsmanship.',
    content: keyFeaturesSource,
  },
  {
    name: 'ServicesOverview.jsx',
    path: 'src/components/sections/ServicesOverview.jsx',
    description: 'Services narrative with imagery and analytics-forward storytelling.',
    content: servicesOverviewSource,
  },
  {
    name: 'ProofPoints.jsx',
    path: 'src/components/sections/ProofPoints.jsx',
    description: 'Glassmorphism proof cards with animated edge highlights.',
    content: proofPointsSource,
  },
  {
    name: 'ContactSection.jsx',
    path: 'src/components/sections/ContactSection.jsx',
    description: 'Consultation CTA with contact info and mail shortcut.',
    content: contactSectionSource,
  },
  {
    name: 'Home.jsx',
    path: 'src/pages/Home.jsx',
    description: 'Home page composition wiring hero, features, services, and proof points.',
    content: homePageSource,
  },
  {
    name: 'Services.jsx',
    path: 'src/pages/Services.jsx',
    description: 'Services route reusing the overview and proof point storytelling.',
    content: servicesPageSource,
  },
  {
    name: 'Contact.jsx',
    path: 'src/pages/Contact.jsx',
    description: 'Contact page surfacing the dedicated outreach panel.',
    content: contactPageSource,
  },
  {
    name: 'useRevealOnScroll.js',
    path: 'src/hooks/useRevealOnScroll.js',
    description: 'IntersectionObserver hook that animates reveal-on-scroll sections.',
    content: revealHookSource,
  },
  {
    name: 'index.css',
    path: 'src/index.css',
    description: 'Tailwind layers plus bespoke gradients, waves, and glow treatments.',
    content: stylesSource,
  },
];

const formatSize = (bytes) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const Downloads = () => {
  useRevealOnScroll();

  const files = useMemo(() => {
    const encoder = new TextEncoder();
    return downloadEntries.map((file) => {
      const size = encoder.encode(file.content).length;
      const lines = file.content.split('\n').length;
      return {
        ...file,
        size,
        lines,
        sizeLabel: formatSize(size),
      };
    });
  }, []);

  const handleDownload = (file) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative z-10 min-h-screen px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <span className="badge-soft text-xs uppercase tracking-[0.35em]">Source Kit</span>
          <h1 className="mt-6 text-4xl font-extrabold text-cyan-100 sm:text-5xl">
            Download the Smart Biz Upgrade build assets
          </h1>
          <p className="mt-4 max-w-3xl text-base text-cyan-200/80 sm:text-lg">
            Grab individual React components, hooks, and style sheets in their raw form. Each download button
            streams the current file so you can archive, audit, or remix the experience offline.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {files.map((file) => (
            <article key={file.name} className="card-glow reveal group">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="micro-icon">
                    <FileText size={16} />
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-cyan-100">{file.name}</h2>
                  <p className="mt-2 text-sm text-cyan-200/75">{file.description}</p>
                </div>
                <span className="rounded-full border border-cyan-500/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-200/60">
                  {file.path}
                </span>
              </div>

              <dl className="mt-6 flex flex-wrap gap-3 text-xs text-cyan-200/70">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 px-3 py-1">
                  <Layers size={14} />
                  <dt className="sr-only">Line count</dt>
                  <dd>{file.lines} lines</dd>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 px-3 py-1">
                  <HardDrive size={14} />
                  <dt className="sr-only">File size</dt>
                  <dd>{file.sizeLabel}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={() => handleDownload(file)}
                className="btn-wave mt-8 inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
