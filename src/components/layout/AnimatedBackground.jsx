const AnimatedBackground = () => {
  return (
    <div className="animated-tech-background pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 tech-gradient" aria-hidden="true" />
      <div className="absolute inset-0 tech-grid" aria-hidden="true" />
      <div className="tech-orb orb-one" aria-hidden="true" />
      <div className="tech-orb orb-two" aria-hidden="true" />
      <div className="tech-orb orb-three" aria-hidden="true" />
    </div>
  );
};

export default AnimatedBackground;
