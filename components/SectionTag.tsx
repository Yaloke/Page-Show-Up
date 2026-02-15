export default function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block font-body text-sm font-semibold uppercase tracking-[3px] text-gold bg-gold/10 border border-gold/20 px-4 py-1.5 rounded mb-8">
      {label}
    </span>
  );
}
