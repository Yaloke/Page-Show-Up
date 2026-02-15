import SectionTag from "./SectionTag";
import VideoPlaceholder from "./VideoPlaceholder";
import YouTubeEmbed from "./YouTubeEmbed";

const testimonials = [
  {
    id: "temoignage-1",
    name: "Matteo",
    subtitle: "Athlète NIVEAU INTERNATIONAL Callisthénie",
    youtubeId: "BAcwfZoitlI",
    quote:
      "Thomas m'a fait passer d'un athlète qui performe de façon hasardeuse à quelqu'un qui performe quand il le veut, où il le veut. Ce ne sont pas vos programmes ou votre intention — ce sont vos facteurs externes qui déterminent votre capacité à convertir vos efforts et à les exprimer.",
  },
  {
    id: "temoignage-2",
    name: "Témoignage 2",
    subtitle: "Athlète en stagnation",
    quote:
      "Je pensais que je devais m'entraîner plus dur. En réalité, je devais mieux dormir, mieux manger, et mieux récupérer.",
  },
  {
    id: "temoignage-3",
    name: "Témoignage 3",
    subtitle: "Sportif discipliné",
    quote:
      "Thomas m'a montré ce que personne ne m'avait expliqué : la performance est un système, pas une liste d'exercices.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="LEURS RÉSULTATS" />

        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          Ils ont arrêté de chercher le programme parfait.
        </h2>

        <p className="font-body text-[15px] leading-[1.85] text-text-muted mb-10">
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
        <div className="space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 p-8"
              style={{
                background: "linear-gradient(135deg, #111111, #0E0E0E)",
              }}
            >
              {t.youtubeId ? (
                <YouTubeEmbed videoId={t.youtubeId} label="VIDÉO TÉMOIGNAGE" />
              ) : (
                <VideoPlaceholder id={t.id} label="VIDÉO TÉMOIGNAGE" />
              )}

              <div className="mt-4">
                <span className="inline-block font-body text-[11px] font-semibold uppercase tracking-[2px] text-gold mb-3">
                  VIDÉO TÉMOIGNAGE
                </span>
                <h3 className="font-display text-xl font-medium text-text-primary">
                  {t.name}
                </h3>
                <p className="font-body text-sm text-text-dim mt-1">
                  {t.subtitle}
                </p>
                <p className="font-body text-[15px] italic text-text-muted mt-4 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
