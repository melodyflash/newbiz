function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="theme-background-gradient"></div>
      <div className="theme-orb theme-orb--one"></div>
      <div className="theme-orb theme-orb--two"></div>
      <div className="theme-grid"></div>
    </div>
  );
}

export default AnimatedBackground;
