import SectionTag from "./SectionTag";

const stats = [
  { value: "64kg", label: "Point de départ" },
  { value: "+80kg", label: "Aujourd'hui" },
  { value: "5 ans", label: "Poids du corps uniquement" },
  { value: "5", label: "Piliers optimisés" },
];

export default function Transformation() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="MON PARCOURS" />

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          De 64kg à +80kg. Chez moi. Au poids du corps.
        </h2>

        <div className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted space-y-5 mb-10">
          <p>
            Pendant 5 ans, je me suis entraîné sans salle, sans matériel, sans
            coach. J&apos;ai grandi dans un petit village. J&apos;étais le mec
            maigre qu&apos;on ne regardait pas. Ce qui a tout changé, ce
            n&apos;est pas un programme miracle — c&apos;est le jour où
            j&apos;ai compris que{" "}
            <strong className="text-gold font-medium">
              l&apos;entraînement n&apos;est que la partie visible
            </strong>{" "}
            d&apos;un système beaucoup plus large.
          </p>

          <p>
            Sommeil, nutrition ancestrale, récupération, environnement, mindset
            — quand j&apos;ai optimisé ces piliers, les résultats ont explosé.
            Et j&apos;ai pris le contrôle total de ma transformation. Acteur de
            ma vie. Totalement autonome.
          </p>
        </div>

        {/* Transformation Photos */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gold/[0.1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/transformation-1.jpg"
              alt="Thomas — Point de départ"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-gold/[0.1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/transformation-2.jpg"
              alt="Thomas — Aujourd'hui"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-[2px] bg-bg-elevated rounded-lg overflow-hidden mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-primary p-5 sm:p-8 text-center flex flex-col items-center justify-center"
            >
              <span className="font-display text-3xl sm:text-4xl font-semibold text-gold">
                {stat.value}
              </span>
              <span className="font-body text-xs uppercase tracking-[2px] text-text-dim mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted">
          Ce que je t&apos;enseigne, c&apos;est exactement ce système. Pas une
          méthode copiée d&apos;internet — un cadre construit sur{" "}
          <strong className="text-gold font-medium">
            mon expérience réelle
          </strong>
          , affiné avec chaque client, et pensé pour te rendre{" "}
          <strong className="text-gold font-medium">autonome</strong>, pas
          dépendant.
        </p>
      </div>
    </section>
  );
}
