import { Activity, TrendingUp, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-10">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="float-bubble top-16 left-10" />
        <div className="float-bubble bottom-24 right-24 delay-2000" />
        <div className="float-bubble top-1/2 left-1/2 delay-4000" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8 reveal">
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <span className="badge-soft">Real-time Analytics</span>
            <span className="badge-soft">IoT Automation</span>
            <span className="badge-soft">Frictionless Payments</span>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Smart Tech That Turns Visitors Into{' '}
              <span className="gradient-text">Repeat Customers</span>
            </h1>
            <p className="mt-6 text-lg text-cyan-100/90 sm:text-xl">
              Data-driven, artistic smart technology solutions that maximize business efficiency and elevate how customers
              feel, connect, and return.
            </p>
            <p className="mt-4 text-base text-cyan-200/80 sm:text-lg">
              Responsive signage, IoT analytics, wireless optimization, and custom installations designed by our
              California-based engineers—where performance meets aesthetic excellence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-cyan-100/90">
            <div className="stat-chip">
              <Activity size={20} />
              <span>+35% Repeat Customers</span>
            </div>
            <div className="stat-chip">
              <TrendingUp size={20} />
              <span>Increased Efficiency</span>
            </div>
            <div className="stat-chip">
              <Zap size={20} />
              <span>Data-Backed Decisions</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-wave inline-flex items-center gap-2">
              <Calendar size={18} />
              <span>Book Free 20-Minute Consultation</span>
            </Link>
            <Link to="/services" className="btn-ghost inline-flex items-center gap-2">
              <span>Explore Solutions</span>
              <span className="text-cyan-400">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
