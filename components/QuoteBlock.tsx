export default function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-gold bg-bg-quote px-5 sm:px-8 py-6 sm:py-7 rounded-r-lg my-8">
      <p className="font-display italic text-base sm:text-lg leading-relaxed text-text-secondary">
        {children}
      </p>
    </blockquote>
  );
}
