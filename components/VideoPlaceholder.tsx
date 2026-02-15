export default function VideoPlaceholder({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  return (
    <div
      id={id}
      className="relative aspect-video w-full rounded-lg overflow-hidden border border-gold/[0.15] hover:border-gold/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer my-8"
      style={{
        background: "linear-gradient(135deg, #141414, #1A1A1A)",
      }}
    >
      {/* Replace this div's contents with an <iframe> for the actual video */}

      {/* Play icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            className="ml-1"
          >
            <path d="M22 13L0 26V0L22 13Z" fill="#0A0A0A" />
          </svg>
        </div>
        <span className="font-body text-xs font-medium uppercase tracking-[2px] text-text-dim">
          {label}
        </span>
      </div>
    </div>
  );
}
