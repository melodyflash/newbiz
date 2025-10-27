import { Activity, Brain, Cpu, Sparkles, Zap, Palette, BarChart2, Shield, Leaf } from 'lucide-react';

const features = [
  {
    title: 'Data-Driven Intelligence',
    description: 'Real-time dashboards and analytics turn operational insights into smarter business moves.',
    icon: Activity,
    microIcons: [Brain, BarChart2, Shield],
  },
  {
    title: 'Artistic Engineering',
    description: 'We fuse aesthetic design and advanced engineering to create technology that looks and feels right.',
    icon: Zap,
    microIcons: [Sparkles, Palette, Cpu],
  },
  {
    title: 'California Craftsmanship',
    description: 'Our Ocean Beach team builds with community, sustainability, and integrity at the core.',
    icon: Leaf,
    microIcons: [Shield, Sparkles, Activity],
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon, microIcons }, index) => (
            <article key={title} className="card-glow reveal group">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-300 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-2">
                  {microIcons.map((MiniIcon, miniIdx) => (
                    <span key={`${title}-mini-${miniIdx}`} className="micro-icon">
                      <MiniIcon size={16} />
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-cyan-100">{title}</h3>
              <p className="mt-3 text-base text-cyan-200/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
