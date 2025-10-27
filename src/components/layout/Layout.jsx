import AnimatedBackground from './AnimatedBackground.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-50">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pt-24 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
