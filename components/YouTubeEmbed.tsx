export default function YouTubeEmbed({
  videoId,
  label,
  isShort = false,
}: {
  videoId: string;
  label?: string;
  isShort?: boolean;
}) {
  return (
    <div className="my-8">
      <div
        className={`relative w-full rounded-lg overflow-hidden border border-gold/[0.15] ${
          isShort ? "aspect-[9/16] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto" : "aspect-video"
        }`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={label || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {label && (
        <span className="block text-center font-body text-xs font-medium uppercase tracking-[2px] text-text-dim mt-3">
          {label}
        </span>
      )}
    </div>
  );
}
