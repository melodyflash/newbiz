import { Mail, Linkedin, Instagram, Github, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="card-glow reveal">
            <h2 className="text-3xl font-extrabold text-cyan-50 sm:text-4xl">Smart Biz Upgrade</h2>
            <p className="mt-4 flex items-center gap-2 text-sm text-cyan-200/80">
              <MapPin size={18} className="text-cyan-300" /> Ocean Beach, CA • Serving California
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-cyan-200/80">
              <Phone size={18} className="text-cyan-300" /> (555) 123-4567
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-cyan-200/80">
              <Mail size={18} className="text-cyan-300" /> hello@smartbizupgrade.com
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Linkedin, Instagram, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="micro-icon text-cyan-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="card-glow reveal">
            <h3 className="text-2xl font-bold text-cyan-100">Start a Conversation</h3>
            <p className="mt-3 text-sm text-cyan-200/80">
              Tell us about your space, goals, and what matters most. We respond within one business day with a tailored
              next step.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                <input id="name" type="text" className="input-field" placeholder="Avery Rivera" />
              </div>
              <div>
                <label className="input-label" htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" className="input-field" placeholder="you@company.com" />
              </div>
              <div>
                <label className="input-label" htmlFor="message">
                  Project details
                </label>
                <textarea id="message" rows="4" className="input-field" placeholder="Tell us about your current tech experience..." />
              </div>
              <button type="submit" className="btn-wave inline-flex items-center gap-2">
                <Mail size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
