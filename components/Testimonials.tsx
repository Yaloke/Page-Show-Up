import SectionTag from "./SectionTag";
import YouTubeEmbed from "./YouTubeEmbed";

const testimonials = [
  {
    id: "temoignage-1",
    name: "Matteo",
    subtitle: "Athlète NIVEAU INTERNATIONAL Callisthénie",
    youtubeId: "hSJcbGV-K8w",
    quote:
      "Thomas m'a fait passer d'un athlète qui performe de façon hasardeuse à quelqu'un qui performe quand il le veut, où il le veut. Ce ne sont pas vos programmes ou votre intention — ce sont vos facteurs externes qui déterminent votre capacité à convertir vos efforts et à les exprimer.",
  },
  {
    id: "temoignage-2",
    name: "Guillaume",
    subtitle: "Athlète CONFIRMÉ de Callisthénie et entrepreneur À SUCCÈS",
    youtubeId: "fkzoz2CoYrE",
    quote:
      "Après 5 ans de muscu classique, tout a changé. J'ai retrouvé le plaisir de m'entraîner et cette sensation de me sentir fort. Le coaching ne se limite pas à la callisthénie — sommeil, alimentation, environnement. Thomas a réussi à me recalibrer et je me sens vraiment beaucoup mieux depuis.",
  },
  {
    id: "temoignage-3",
    name: "Thibaut",
    subtitle: "Sportif et Entrepreneur EXIGEANT qui GÉNÈRE +30K/mois",
    youtubeId: "tdSqmqkNWmQ",
    quote:
      "Je suis passé d'une dizaine de tractions à une vingtaine. Thomas m'a apporté la rigueur et la surcharge progressive qui me manquaient. Tout seul, j'aurais jamais eu le temps de faire tout ça. C'est un passionné, un spécialiste du sujet, et les progrès arrivent en quelques semaines seulement.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="LEURS RÉSULTATS" />

        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          Ils ont arrêté de chercher le programme parfait.
        </h2>

        <p className="font-body text-[15px] leading-[1.85] text-text-muted mb-12">
          Ces personnes avaient le même profil que toi : disciplinées,
          régulières, mais bloquées. Le déclic n&apos;a pas été un nouveau
          programme — c&apos;est quand ils ont compris ce qu&apos;ils ignoraient
          sur{" "}
          <strong className="text-gold font-medium">
            leur sommeil, leur nutrition et leur récupération
          </strong>
          .
        </p>

        {/* Testimonial Cards */}
        <div className="space-y-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 p-6 sm:p-8"
              style={{
                background: "linear-gradient(135deg, #111111, #0E0E0E)",
              }}
            >
              {/* Header: name + subtitle */}
              <div className="mb-5">
                <span className="inline-block font-body text-[11px] font-semibold uppercase tracking-[2px] text-gold mb-2">
                  VIDÉO TÉMOIGNAGE
                </span>
                <h3 className="font-display text-xl font-medium text-text-primary">
                  {t.name}
                </h3>
                <p className="font-body text-sm text-text-dim mt-1">
                  {t.subtitle}
                </p>
              </div>

              {/* Video */}
              <YouTubeEmbed videoId={t.youtubeId} isShort />

              {/* Quote */}
              <p className="font-body text-[15px] italic text-text-muted mt-5 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
