import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function Navbar({ navCta }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navLinks = [
    { href: '#services', label: 'Solutions' },
    { href: '#about', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-panel shadow-theme-glow' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center space-x-3">
          <span className="icon-frame">
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <defs>
                <linearGradient id="logo-circuit" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0" stopColor="#34d399" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path
                d="M5 7.5h14L12 20z"
                fill="none"
                stroke="url(#logo-circuit)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="8" r="2.4" fill="url(#logo-circuit)" />
            </svg>
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/80">Smart Biz Upgrade</p>
            <p className="text-base font-semibold text-slate-50">Circuit Glow</p>
          </div>
        </a>

        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link-pill">
              {link.label}
            </a>
          ))}
          <a href={navCta.href} className="cta-button">
            <span>{navCta.label}</span>
          </a>
        </nav>

        <button
          type="button"
          className="icon-button md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-emerald-400/40 bg-panel-strong p-6 shadow-theme-glow">
            <div className="flex flex-col space-y-4 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="link-pill"
                >
                  {link.label}
                </a>
              ))}
              <a href={navCta.href} className="cta-button text-center" onClick={() => setIsOpen(false)}>
                {navCta.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
