import SectionTag from "./SectionTag";
import YouTubeEmbed from "./YouTubeEmbed";
import QuoteBlock from "./QuoteBlock";

export default function VideoSection() {
  return (
    <section id="etape-1" className="py-16 sm:py-20 px-6 sm:px-8 scroll-mt-4">
      <div className="max-w-[720px] mx-auto">
        <SectionTag label="ÉTAPE 1 : REGARDE CETTE VIDÉO" />

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-light leading-tight mt-2 mb-6">
          Pourquoi tes performances physiques et mentales stagnent
        </h2>

        <p className="font-body text-[15px] sm:text-base leading-[1.8] text-text-muted mb-2">
          Tu t&apos;entraînes régulièrement. Tu es sérieux. Peut-être même plus
          que la plupart des gens autour de toi. Et pourtant, les résultats ne
          suivent plus. Le problème n&apos;est pas ton programme, c&apos;est{" "}
          <strong className="text-gold font-medium">
            tout ce qui se passe en dehors de tes séances
          </strong>
          .
        </p>

        <YouTubeEmbed videoId="BAcwfZoitlI" />

        <QuoteBlock>
          &ldquo;80% de tes résultats viennent de ton mode de vie : sommeil,
          nutrition, récupération, environnement, préparation mentale. Les 20%
          restants, c&apos;est ton programme. La plupart des sportifs inversent
          cette équation.&rdquo;
        </QuoteBlock>
      </div>
    </section>
  );
}
