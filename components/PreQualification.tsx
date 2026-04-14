import SectionTag from "./SectionTag";
import QuoteBlock from "./QuoteBlock";

const qualifications = [
  {
    number: "01",
    title: "Motivation",
    text: "Tu veux des résultats concrets et tu es prêt à agir.",
  },
  {
    number: "02",
    title: "Timing",
    text: "C'est maintenant que tu veux avancer. Pas dans 6 mois, pas quand les conditions seront parfaites. Maintenant.",
  },
  {
    number: "03",
    title: "Engagement",
    text: "Si cet appel te montre exactement ce dont tu as besoin, tu es en position de t'investir en temps, en énergie, et financièrement pour passer à l'action.",
  },
];

export default function PreQualification() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="ES-TU PRÊT ?" />

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          Cet appel n&apos;est pas pour tout le monde.
        </h2>

        <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted mb-10">
          Avant de confirmer, je te demande d&apos;être honnête avec toi-même
          sur 3 points :
        </p>

        {/* Qualification points */}
        <div className="space-y-6 mb-10">
          {qualifications.map((q) => (
            <div
              key={q.number}
              className="flex gap-5 p-5 sm:p-6 rounded-lg border border-gold/[0.08]"
              style={{
                background: "linear-gradient(135deg, #111111, #0E0E0E)",
              }}
            >
              <span className="flex-shrink-0 font-display text-2xl sm:text-3xl font-semibold text-gold/30">
                {q.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-text-primary mb-2">
                  {q.title}
                </h3>
                <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted">
                  {q.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <QuoteBlock>
          &ldquo;Si tu coches ces 3 cases, on est faits pour travailler
          ensemble. Sinon, c&apos;est pas grave, mais cet appel n&apos;est pas
          le bon moment.&rdquo;
        </QuoteBlock>
      </div>
    </section>
  );
}
