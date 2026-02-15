export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center px-5 py-20 overflow-hidden">
      {/* Subtle radial gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[720px] w-full text-center">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-[48px] font-semibold leading-[1.25] text-text-primary animate-fade-in-up">
          Tu viens de réserver ton appel.
          <br />
          Avant qu&apos;on se parle, lis ça.
        </h1>

        {/* Gold decorative line */}
        <div className="w-10 h-[2px] bg-gold mx-auto mt-10 mb-10 animate-fade-in-up delay-200" />

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl leading-relaxed text-text-secondary max-w-[600px] mx-auto animate-fade-in-up delay-500">
          95% des sportifs cherchent un meilleur programme.
          <br className="hidden sm:block" />
          Le vrai problème, c&apos;est{" "}
          <span className="text-gold-light font-semibold">
            tout ce qu&apos;ils ne voient pas
          </span>{" "}
          — sommeil, nutrition, récupération, mindset.
        </p>

        <p className="font-body text-lg sm:text-xl leading-relaxed text-text-secondary mt-6 animate-fade-in-up delay-800">
          Cet appel est le point de départ pour corriger ça.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float delay-1200">
          <span className="font-body text-xs uppercase tracking-[2px] text-text-dim">
            Descends
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-text-dim"
          >
            <path
              d="M8 0V20M8 20L1 13M8 20L15 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
