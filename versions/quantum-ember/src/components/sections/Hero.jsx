import { Calendar, ArrowRight } from 'lucide-react';

function Hero({ stats }) {
  return (
    <section className="relative mt-6 flex flex-col gap-10 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-rose-400/45 bg-panel-soft px-5 py-2 text-xs uppercase tracking-[0.3em] text-rose-100/90">
          <span className="icon-frame icon-frame--sm">
            <Calendar size={14} />
          </span>
          Immersive Loyalty Pathways
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Ignite repeat visits with sensory intelligence and care.
        </h1>
        <p className="max-w-2xl text-lg text-rose-100/80">
          Quantum Ember pairs emotional analytics with magnetic storytelling. The result: guests stay longer, spend more, and feel appreciated with every touchpoint.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="cta-button inline-flex items-center gap-2 text-sm">
            <Calendar size={18} />
            Design My Ember Blueprint
          </a>
          <a href="#services" className="ghost-button inline-flex items-center gap-2 text-sm">
            Preview the Journey Flow
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="flex-1">
        <div className="hero-panel">
          <div className="hero-panel__inner">
            <div className="flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-100/70">{stat.label}</p>
                  <p className="text-lg font-semibold text-slate-50">{stat.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-rose-100/70">
              Crafted by artists and engineers harmonizing sensors, automation, and hospitality psychology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
