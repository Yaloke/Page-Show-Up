"use client";

import { useRef, useState, useEffect } from "react";
import SectionTag from "./SectionTag";

const testimonialImages = [
  "/images/IMG_0084.PNG",
  "/images/IMG_1257.PNG",
  "/images/IMG_1258.PNG",
  "/images/IMG_0637.PNG",
  "/images/IMG_0638.PNG",
  "/images/IMG_1676.PNG",
  "/images/IMG_1289.PNG",
  "/images/IMG_1624.PNG",
  "/images/IMG_0826.PNG",
  "/images/IMG_1721.PNG",
  "/images/IMG_1743.PNG",
  "/images/IMG_0879.PNG",
  "/images/Screenshot%202026-02-16%20at%2010.30.53.png",
  "/images/Screenshot%202026-02-16%20at%2010.31.02.png",
  "/images/Screenshot%202026-02-16%20at%2010.31.08.png",
  "/images/Screenshot%202026-02-16%20at%2010.31.20.png",
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = testimonialImages.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const childWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 16
        : 1;
      setActiveIndex(Math.round(scrollLeft / childWidth));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const childWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : 300;
    const offset = direction === "next" ? childWidth : -childWidth;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 px-0 overflow-hidden">
      <div className="max-w-[720px] mx-auto px-6 sm:px-8 mb-8">
        <SectionTag label="ILS EN PARLENT" />
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-light leading-tight mt-2">
          Ce qu&apos;ils disent après quelques semaines.
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-8 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonialImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center w-[280px] sm:w-[320px] rounded-lg overflow-hidden border border-gold/[0.08] hover:border-gold/20 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #111111, #0E0E0E)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Témoignage ${i + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => scrollTo("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-card/80 border border-gold/20 flex items-center justify-center text-gold hover:bg-bg-elevated transition-colors"
          aria-label="Précédent"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scrollTo("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-card/80 border border-gold/20 flex items-center justify-center text-gold hover:bg-bg-elevated transition-colors"
          aria-label="Suivant"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-gold"
                : "w-1.5 bg-gold/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
