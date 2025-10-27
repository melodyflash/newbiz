import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 shadow-2xl shadow-cyan-500/20">
              <div className="shimmer-overlay" aria-hidden="true" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Analytics Dashboard"
                className="relative z-10 w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal space-y-6">
            <h2 className="text-4xl font-extrabold text-cyan-50 sm:text-5xl">
              See &amp; Fix What <span className="gradient-text">Slows Service</span>
            </h2>
            <p className="text-lg text-cyan-100/90">
              Real-time dashboards connect wait time, staffing, and NPS for clear action. From IoT integration and
              automation to custom 3D-printed devices, we design systems that amplify business performance.
            </p>
            <p className="text-base text-cyan-200/80">
              Our solutions merge data, design, and dependability—handcrafted by experts who care. Every recommendation
              backed by analytics to ensure measurable, effective results.
            </p>
            <ul className="grid gap-3 text-sm text-cyan-100/80 sm:grid-cols-2">
              {["IoT sensor orchestration", "Responsive digital signage", "Frictionless payment integrations", "Network resilience audits"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 px-3 py-2">
                  <Sparkles size={16} className="text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-wave inline-flex items-center gap-2">
                <span>Request a Walkthrough</span>
                <span>→</span>
              </Link>
              <a
                href="https://cal.com"
                className="btn-ghost inline-flex items-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <span>View Case Studies</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
