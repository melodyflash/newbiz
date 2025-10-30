function ProofPoints({ points }) {
  return (
    <section className="reveal space-y-10">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Proof that precision and warmth can coexist.</h2>
        <p className="text-base text-slate-300/90">
          We pair measurable KPIs with crafted experiences. Expect calm rollouts, close listening, and iterating alongside your team.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="proof-card">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400/80">{point.eyebrow}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-50">{point.title}</h3>
            <p className="mt-3 text-sm text-slate-300/90">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProofPoints;
