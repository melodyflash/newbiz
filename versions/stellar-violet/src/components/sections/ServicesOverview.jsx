import { CheckCircle2, Play } from 'lucide-react';

function ServicesOverview({ services }) {
  return (
    <section id="services" className="reveal grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">{services.title}</h2>
        <p className="text-base text-indigo-100/85">{services.description}</p>
        <ul className="space-y-4 text-sm text-indigo-100/75">
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
            Plan a Concierge Session
          </a>
          <a href="#contact" className="ghost-button inline-flex items-center gap-2 text-sm">
            <Play size={18} />
            Tour the Control Suite
          </a>
        </div>
      </div>

      <div className="service-card">
        <div className="service-card__halo" />
        <div className="service-card__inner">
          <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/65">Live insight sample</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-50">Harmony Dashboard</h3>
          <div className="mt-6 grid gap-4 text-sm text-indigo-100/75">
            <div className="insight-row">
              <span>Queue Drift</span>
              <span className="value-positive">-31% variance</span>
            </div>
            <div className="insight-row">
              <span>Guest Glow</span>
              <span className="value-positive">+4.6 NPS pts</span>
            </div>
            <div className="insight-row">
              <span>Staff Focus</span>
              <span className="value-neutral">+18% experience time</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-indigo-100/65">
            Soft prompts highlight tiny misalignments while honoring your team’s intuition and tone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
