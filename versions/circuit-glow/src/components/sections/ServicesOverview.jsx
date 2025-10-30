import { CheckCircle2, Play } from 'lucide-react';

function ServicesOverview({ services }) {
  return (
    <section id="services" className="reveal grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{services.title}</h2>
        <p className="text-base text-slate-300/95">{services.description}</p>
        <ul className="space-y-4 text-sm text-slate-300/90">
          {services.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="icon-frame icon-frame--sm mt-0.5">
                <CheckCircle2 size={16} />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="cta-button inline-flex items-center gap-2 text-sm">
            <CheckCircle2 size={18} />
            Request a Systems Walkthrough
          </a>
          <a href="#contact" className="ghost-button inline-flex items-center gap-2 text-sm">
            <Play size={18} />
            See Customer Journeys
          </a>
        </div>
      </div>

      <div className="service-card">
        <div className="service-card__halo" />
        <div className="service-card__inner">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400/80">Live insight sample</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-50">Queue Relief Snapshot</h3>
          <div className="mt-6 grid gap-4 text-sm text-slate-300/90">
            <div className="insight-row">
              <span>Wait Time</span>
              <span className="value-positive">02:38 → 01:45</span>
            </div>
            <div className="insight-row">
              <span>Staff Focus</span>
              <span className="value-positive">+18% on upsell</span>
            </div>
            <div className="insight-row">
              <span>Return Rate</span>
              <span className="value-neutral">Projecting +32%</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-400/80">
            Soft-touch notifications keep managers informed while preserving guest ambiance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
