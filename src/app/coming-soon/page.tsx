"use client";

import { useState, useEffect } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfIFN37OgwYsAEq7nAHNE5cg1DV0nO1Xtby5i3u1dcSA6lxaQ/viewform";

function getEmbedUrl(url: string) {
  if (!url) return "";
  if (url.includes("embedded=")) return url;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}embedded=true`;
}

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-glow ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function WaitlistModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Join the waitlist"
    >
      <div
        className="relative w-full max-w-2xl glass-card rounded-3xl overflow-hidden animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">N</span>
            </div>
            <span
              className="font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Join the waitlist
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <iframe
          src={getEmbedUrl(GOOGLE_FORM_URL)}
          className="w-full h-[520px] sm:h-[600px] bg-surface-elevated"
          title="Novi waitlist form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden hero-gradient flex items-center justify-center">
      <div className="mesh-gradient-bg" />

      <FloatingOrb className="w-[500px] h-[500px] bg-primary top-[-150px] left-[-150px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-accent bottom-[-100px] right-[-100px]" delay={1} />
      <FloatingOrb className="w-[300px] h-[300px] bg-accent-warm bottom-[20%] left-[10%]" delay={2} />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 animate-slide-in-left opacity-0 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-dot-pulse" />
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">
            Something new is brewing
          </span>
        </div>

        <div className="flex justify-center mb-8 animate-bounce-in opacity-0">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30">
            <span
              className="text-white font-bold text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              N
            </span>
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-slide-in-right opacity-0 delay-100"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-foreground">We&apos;re</span>
          <span className="block gradient-text">Coming Soon</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed animate-slide-in-left opacity-0 delay-200">
          Novi is almost here — your AI mentor for everything from Grade 9 to
          your dream university. Be the first to know when we launch.
        </p>

        <div className="mt-10 animate-slide-in-left opacity-0 delay-300">
          <button onClick={() => setShowWaitlist(true)} className="btn-primary text-base sm:text-lg">
            <span>Join the Waitlist</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-4 text-sm text-foreground/50">
            No spam. Just a launch announcement.
          </p>
        </div>
      </main>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </div>
  );
}
