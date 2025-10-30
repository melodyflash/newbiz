import * as Icons from 'lucide-react';

function KeyFeatures({ cards }) {
  return (
    <section id="about" className="space-y-12">
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Designed for precision, delivered with heart.</h2>
        <p className="text-base text-slate-300">
          Our interdisciplinary team brings together data scientists, fabricators, and service designers so each activation elevates both performance and feeling.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = Icons[card.icon];
          return (
            <article key={card.title} className="reveal feature-card">
              <div className="icon-frame mb-6 w-fit">
                <Icon size={26} />
              </div>
              <h3 className="text-xl font-semibold text-slate-50">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-300/90">{card.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.microIcons.map((micro) => {
                  const Micro = Icons[micro];
                  return (
                    <span key={micro} className="icon-frame icon-frame--pill">
                      <Micro size={16} />
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default KeyFeatures;
