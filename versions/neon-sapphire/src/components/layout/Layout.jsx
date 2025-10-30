import AnimatedBackground from './AnimatedBackground.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import useRevealOnScroll from '../../hooks/useRevealOnScroll.js';

function Layout({ children, navCta }) {
  useRevealOnScroll();

  return (
    <div id="top" className="theme-shell">
      <AnimatedBackground />
      <Navbar navCta={navCta} />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pt-28 pb-24 lg:pb-32">
        {children}
      </main>
      <Footer contact={{
        studio: 'Smart Biz Upgrade',
        location: 'Ocean Beach, CA · Serving California',
        phone: '(555) 123-4567',
        email: 'hello@smartbizupgrade.com',
      }} />
    </div>
  );
}

export default Layout;
