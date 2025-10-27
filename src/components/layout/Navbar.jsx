import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-50" />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="relative">
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="24" y2="24">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path d="M12 2l8 4v8l-8 4-8-4V6z" stroke="url(#logo-grad)" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="3" fill="url(#logo-grad)" />
            </svg>
          </div>
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">Smart Biz Upgrade</span>
        </Link>

        <div className="hidden items-center space-x-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-cyan-400' : 'text-cyan-200 hover:text-cyan-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-wave">
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-cyan-100 transition-colors duration-200 hover:bg-slate-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 space-y-2 rounded-2xl border border-cyan-500/20 bg-slate-950/95 p-4 backdrop-blur-xl shadow-lg shadow-cyan-500/10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'bg-cyan-500/10 text-cyan-300' : 'text-cyan-100 hover:bg-cyan-500/10 hover:text-cyan-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-wave block text-center">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
