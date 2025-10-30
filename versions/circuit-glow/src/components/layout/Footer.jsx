import { Instagram, Linkedin, Mail, Phone, Github } from 'lucide-react';

const links = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

function Footer({ contact }) {
  return (
    <footer className="relative mt-24 border-t border-slate-700/40 bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-4">
          <div className="icon-frame w-fit">
            <Mail size={22} />
          </div>
          <h4 className="text-2xl font-semibold text-slate-50">Ready for a smarter guest journey?</h4>
          <p className="text-sm text-slate-300/80">
            We blueprint every activation with measurable goals so your team knows why each touchpoint matters.
          </p>
        </div>

        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Studio</h5>
            <p className="leading-relaxed text-slate-200/90">
              {contact.studio}
              <br />
              {contact.location}
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h5>
            <p className="leading-relaxed text-slate-200/90">
              <span className="flex items-center gap-2">
                <span className="icon-frame icon-frame--sm">
                  <Phone size={16} />
                </span>
                {contact.phone}
              </span>
              <span className="mt-2 flex items-center gap-2">
                <span className="icon-frame icon-frame--sm">
                  <Mail size={16} />
                </span>
                {contact.email}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a href={`mailto:${contact.email}`} className="cta-button inline-flex w-full items-center justify-center gap-2 text-sm">
            <Mail size={18} />
            Email Our Engineers
          </a>
          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="icon-button" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/40 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Smart Biz Upgrade. Crafted in California.
      </div>
    </footer>
  );
}

export default Footer;
