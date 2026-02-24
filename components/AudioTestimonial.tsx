"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface AudioTestimonialProps {
  name: string;
  subtitle: string;
  audioSrc: string;
  quote: string;
}

export default function AudioTestimonial({
  name,
  subtitle,
  audioSrc,
  quote,
}: AudioTestimonialProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);

  const speeds = [1, 1.25, 1.5, 2];

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const cycleSpeed = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const currentIndex = speeds.indexOf(speed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    audio.playbackRate = nextSpeed;
    setSpeed(nextSpeed);
  }, [speed, speeds]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = x / rect.width;
      audio.currentTime = pct * duration;
    },
    [duration]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => setDuration(audio.duration);
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  // Generate bar heights for waveform visualization
  const bars = 40;
  const barHeights = useRef(
    Array.from({ length: bars }, () => 0.3 + Math.random() * 0.7)
  ).current;

  return (
    <div
      className="rounded-lg border border-gold/[0.08] hover:border-gold/20 transition-all duration-300 p-6 sm:p-8"
      style={{
        background: "linear-gradient(135deg, #111111, #0E0E0E)",
      }}
    >
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Header */}
      <div className="mb-5">
        <span className="inline-block font-body text-[11px] font-semibold uppercase tracking-[2px] text-gold mb-2">
          AUDIO TÉMOIGNAGE
        </span>
        <h3 className="font-display text-lg sm:text-xl font-medium text-text-primary">
          {name}
        </h3>
        <p className="font-body text-xs sm:text-sm text-text-dim mt-1">
          {subtitle}
        </p>
      </div>

      {/* Player */}
      <div
        className="rounded-lg p-4 sm:p-5 border border-gold/[0.06]"
        style={{
          background: "linear-gradient(135deg, #0E0E0E, #0A0A0A)",
        }}
      >
        {/* Controls row */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Play/Pause button */}
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300"
            aria-label={isPlaying ? "Pause" : "Lecture"}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
              </svg>
            )}
          </button>

          {/* Waveform visualization */}
          <div className="flex-1 flex items-center gap-[2px] h-10 overflow-hidden">
            {barHeights.map((h, i) => {
              const barProgress = (i / bars) * 100;
              const isPast = barProgress < progress;
              return (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-all duration-150"
                  style={{
                    height: `${h * 100}%`,
                    minWidth: "2px",
                    backgroundColor: isPast
                      ? "rgba(212, 168, 83, 0.8)"
                      : "rgba(212, 168, 83, 0.15)",
                    transform: isPlaying
                      ? `scaleY(${0.6 + Math.sin(Date.now() / 200 + i * 0.5) * 0.4})`
                      : "scaleY(1)",
                  }}
                />
              );
            })}
          </div>

          {/* Speed button */}
          <button
            onClick={cycleSpeed}
            className="flex-shrink-0 px-2.5 py-1 rounded-md bg-gold/10 border border-gold/20 text-gold font-body text-xs font-semibold hover:bg-gold/20 transition-all duration-300"
          >
            {speed}x
          </button>
        </div>

        {/* Progress bar + time */}
        <div className="mt-3">
          <div
            className="w-full h-1 rounded-full bg-gold/10 cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full rounded-full bg-gold transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="font-body text-[10px] text-text-dim">
              {formatTime(currentTime)}
            </span>
            <span className="font-body text-[10px] text-text-dim">
              {duration ? formatTime(duration) : "--:--"}
            </span>
          </div>
        </div>
      </div>

      {/* Waveform animation ticker (forces re-render when playing) */}
      {isPlaying && <WaveformAnimator />}

      {/* Quote */}
      <p className="font-body text-sm sm:text-[15px] italic text-text-muted mt-5 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

// Small component that forces parent re-render for waveform animation
function WaveformAnimator() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 100);
    return () => clearInterval(id);
  }, []);
  return null;
}
