"use client";

import { JSX } from "react";

const reelItems = [
  { text: "Mobile Filmmaking", icon: "camera" },
  { text: "CapCut Pro", icon: "scissors" },
  { text: "Cinematic Reels", icon: "film" },
  { text: "VFX & Effects", icon: "sparkle" },
  { text: "Wedding Highlights", icon: "heart" },
  { text: "Color Grading", icon: "palette" },
  { text: "Smartphone Photography", icon: "smartphone" },
  { text: "Corporate Videos", icon: "building" },
  { text: "Beat-Sync Editing", icon: "music" },
  { text: "Motion Graphics", icon: "zap" },
  { text: "Lens Attachments", icon: "search" },
  { text: "Audio Enhancement", icon: "mic" },
];

const Icons: Record<string, JSX.Element> = {
  camera: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  scissors: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
      />
    </svg>
  ),
  film: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
      />
    </svg>
  ),
  sparkle: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  palette: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  smartphone: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  building: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  music: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    </svg>
  ),
  zap: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  search: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  mic: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  ),
};

// Render one set of items (called twice to create seamless loop)
function MarqueeItems({ small = false }: { small?: boolean }) {
  return (
    <>
      {reelItems.map((item, i) => (
        <div key={i} className="flex items-center gap-6 group flex-shrink-0">
          <div
            className={`${small ? "text-cinema-gold/70" : "text-cinema-gold"} transition-colors duration-300 group-hover:text-cinema-gold-light`}
          >
            {small ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            ) : (
              Icons[item.icon]
            )}
          </div>
          <span
            className={`uppercase transition-colors duration-300 group-hover:text-cinema-gold-light ${small ? "font-mono text-[10px] tracking-[4px] text-cinema-gray group-hover:text-cinema-gold" : "font-display text-sm tracking-widest text-cinema-gold"}`}
          >
            {item.text}
          </span>
          <span
            className={`transition-colors duration-300 group-hover:text-cinema-gold ${small ? "text-cinema-border text-sm" : "text-cinema-gold-dark/50 text-2xl"}`}
          >
            {small ? "★" : "◇"}
          </span>
        </div>
      ))}
    </>
  );
}

export default function FilmReelMarquee() {
  return (
    <>
      {/* Inject keyframes once — pure CSS, GPU-composited */}
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
          will-change: transform;
        }
        .marquee-rtl {
          animation: marquee-rtl 35s linear infinite;
          will-change: transform;
        }
        .marquee-ltr:hover,
        .marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative overflow-hidden bg-cinema-black/90 py-6 border-y border-cinema-border">
        {/* Top film strip */}
        <div className="flex gap-1 mb-4 overflow-hidden opacity-20 pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-6 h-4 bg-cinema-card border border-cinema-gold-dark/30 rounded-sm"
            />
          ))}
        </div>

        {/* Row 1 — left to right scroll */}
        <div className="flex overflow-hidden mb-3">
          {/* Two identical sets side-by-side; animate the whole strip -50% */}
          <div className="marquee-ltr flex gap-10 whitespace-nowrap">
            <MarqueeItems />
            <MarqueeItems />
          </div>
        </div>

        {/* Row 2 — right to left scroll */}
        <div className="flex overflow-hidden">
          <div className="marquee-rtl flex gap-10 whitespace-nowrap">
            <MarqueeItems small />
            <MarqueeItems small />
          </div>
        </div>

        {/* Bottom film strip */}
        <div className="flex gap-1 mt-4 overflow-hidden opacity-20 pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-6 h-4 bg-cinema-card border border-cinema-gold-dark/30 rounded-sm"
            />
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cinema-black via-cinema-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cinema-black via-cinema-black/80 to-transparent z-10 pointer-events-none" />
      </div>
    </>
  );
}
