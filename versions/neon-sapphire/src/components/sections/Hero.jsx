import { Calendar, ArrowRight } from 'lucide-react';

function Hero({ stats }) {
  return (
    <section className="relative mt-6 flex flex-col gap-10 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-panel-soft px-5 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">
          <span className="icon-frame icon-frame--sm">
            <Calendar size={14} />
          </span>
          Intelligent Guest Journeys
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Smart technology that turns first-time visitors into devoted regulars.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          We orchestrate analytics, ambiance, and automation so every moment feels seamless. Calm, data-backed systems inspire confidence and keep guests coming back.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="cta-button inline-flex items-center gap-2 text-sm">
            <Calendar size={18} />
            Book a 20-Minute Strategy Call
          </a>
          <a href="#services" className="ghost-button inline-flex items-center gap-2 text-sm">
            Explore Our Approach
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
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400/90">{stat.label}</p>
                  <p className="text-lg font-semibold text-slate-50">{stat.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-300/90">
              Crafted by California engineers blending sensor networks, payment innovation, and thoughtful storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
