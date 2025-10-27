import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h4 className="text-2xl font-extrabold text-cyan-100">Smart Biz Upgrade</h4>
            <p className="mt-2 text-sm text-cyan-200/80">Ocean Beach, CA • Serving California</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-100">Contact</h4>
            <p className="mt-3 text-sm text-cyan-200/90">
              Phone: (555) 123-4567
              <br />
              Email: hello@smartbizupgrade.com
            </p>
            <div className="mt-4 flex items-center space-x-4">
              {[Linkedin, Instagram, Github].map((Icon, idx) => (
                <a
                  key={Icon.displayName || idx}
                  href="#"
                  className="text-cyan-400 transition-transform duration-200 hover:scale-110 hover:text-cyan-200"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-cyan-100">Get Started</h4>
            <a href="mailto:hello@smartbizupgrade.com" className="btn-wave mt-4 inline-flex items-center gap-2">
              <Mail size={20} />
              Email Us
            </a>
            <Link
              to="/downloads"
              className="btn-ghost mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
            >
              Explore Downloads
            </Link>
          </div>
        </div>
        <p className="mt-12 border-t border-cyan-500/20 pt-6 text-center text-xs text-cyan-200/60">
          © {new Date().getFullYear()} Smart Biz Upgrade. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
