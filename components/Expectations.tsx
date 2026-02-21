import SectionTag from "./SectionTag";
import QuoteBlock from "./QuoteBlock";

const expectations = [
  {
    bold: "Regarde la vidéo ci-dessus en entier.",
    text: "Si tu arrives sans l'avoir vue, on perd du temps tous les deux.",
  },
  {
    bold: "Sois à l'heure.",
    text: "Pas 5 minutes après. Pas « j'avais un truc ». À l'heure.",
  },
  {
    bold: "Sois honnête sur ta situation.",
    text: "Pas de masque. Si ton sommeil est mauvais, si ta nutrition est chaotique, dis-le. C'est exactement pour ça qu'on se parle.",
  },
  {
    bold: "Sois prêt à remettre en question ce que tu crois savoir",
    text: "sur la nutrition, la récupération et le sommeil. Si tu veux qu'on te dise ce que tu veux entendre, on n'est pas le bon fit.",
  },
  {
    bold: "Sois prêt à t'investir si ça fait sens.",
    text: "Si et seulement si je suis absolument convaincu que je peux t'accepter dans une de mes solutions, on verra à quoi pourrait ressembler la manière dont je travaille. Si je sens que ce n'est pas le cas, je te le dirai en toute transparence qu'on ne travaillera pas ensemble.",
  },
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gold"
      >
        <path
          d="M8 12.5L11 15.5L16 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Expectations() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="AVANT L'APPEL" />

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          Ce qu&apos;on attend de toi.
        </h2>

        <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted mb-10">
          Cet appel est un échange, pas un pitch. Pour qu&apos;il soit utile
          pour toi comme pour moi, voici ce que je te demande :
        </p>

        {/* Checklist */}
        <div className="space-y-6 mb-10">
          {expectations.map((item, i) => (
            <div key={i} className="flex gap-4">
              <CheckIcon />
              <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted">
                <strong className="text-gold-light font-semibold">
                  {item.bold}
                </strong>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <QuoteBlock>
          &ldquo;Je ne travaille pas avec tout le monde. Je travaille avec des
          personnes qui veulent comprendre, pas juste suivre.
          L&apos;objectif, c&apos;est ton autonomie, pas ta
          dépendance.&rdquo;
        </QuoteBlock>
      </div>
    </section>
  );
}
