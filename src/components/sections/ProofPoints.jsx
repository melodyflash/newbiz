import { ShieldCheck, Radar, WalletCards, Waves, Hourglass, Radio } from 'lucide-react';

const proofPoints = [
  {
    label: '15+ years • CA',
    title: 'Experience & Trust',
    description: 'Retail & hospitality deployments with measurable results and bespoke hardware options.',
    primaryIcon: ShieldCheck,
    accentIcons: [Waves, Hourglass],
  },
  {
    label: 'Sensors • Dashboards',
    title: 'Deep Insights',
    description: 'Heatmaps, dwell times, and flow metrics to guide staffing and layout decisions.',
    primaryIcon: Radar,
    accentIcons: [Radio, ShieldCheck],
  },
  {
    label: 'Wallets • Checkouts',
    title: 'Frictionless Payments',
    description: 'Digital wallets and secure wireless to speed up POS without compromising reliability.',
    primaryIcon: WalletCards,
    accentIcons: [Waves, Radar],
  },
];

const ProofPoints = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {proofPoints.map(({ label, title, description, primaryIcon: Icon, accentIcons }) => (
            <article key={title} className="card-glow reveal">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200/80">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {accentIcons.map((AccentIcon, idx) => (
                    <span key={`${title}-accent-${idx}`} className="micro-icon">
                      <AccentIcon size={16} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-100">{title}</h3>
              </div>
              <p className="mt-4 text-base text-cyan-200/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofPoints;
