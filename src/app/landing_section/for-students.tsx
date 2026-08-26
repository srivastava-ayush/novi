"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";

const painPoints = [
  "Not sure what career you want?",
  "Don't know which subjects to choose?",
  "Wondering which university is right for you?",
  "Don't know how to build a strong profile?",
];

const features = [
  {
    title: "Discover",
    desc: "Find careers and possibilities you didn't know existed.",
    color: "text-primary bg-primary/10",
    glow: "var(--primary)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Plan",
    desc: "Understand which subjects, skills and experiences can move you towards your goals.",
    color: "text-accent bg-accent/10",
    glow: "var(--accent)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Build",
    desc: "Turn your interests into projects, achievements and experiences that matter.",
    color: "text-accent-warm bg-accent-warm/10",
    glow: "var(--accent-warm)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
  },
  {
    title: "Explore",
    desc: "Discover universities, courses and opportunities around the world.",
    color: "text-primary bg-primary/10",
    glow: "var(--primary-light)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Grow",
    desc: "Get personalized goals and guidance every week.",
    color: "text-accent bg-accent/10",
    glow: "var(--accent)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const CYCLE_MS = 2400;

function FeatureCard({ f, i }: { f: (typeof features)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    const rx = (y / r.height - 0.5) * -7;
    const ry = (x / r.width - 0.5) * 7;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ "--card-glow": f.glow } as CSSProperties}
      className={`spotlight-card group relative rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 will-change-transform transition-shadow duration-300 hover:shadow-[0_24px_60px_-16px_var(--card-glow)] ${
        i >= 3 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className={`feature-icon w-12 h-12 rounded-xl ${f.color} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
          style={{ "--card-glow": f.glow } as CSSProperties}
        >
          {f.icon}
        </div>
        <span
          aria-hidden="true"
          className="text-5xl font-bold text-foreground/[0.05] select-none leading-none transition-all duration-500 group-hover:text-[color:var(--card-glow)]/25 group-hover:-translate-y-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <h4
        className="text-base font-bold mb-1.5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {f.title}
      </h4>
      <p className="text-sm text-foreground/45 leading-relaxed">{f.desc}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[color:var(--card-glow)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
        See how
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
}

export default function ForStudents() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % features.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 mb-28 scroll-reveal">
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">
                For Students
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your future is too important to figure out alone.
            </h2>
            <p className="text-lg text-foreground/50 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Meet Novi—the AI mentor that grows with you from Grade 9 to your dream university.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#" className="btn-primary">
                <span>Meet Novi</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#" className="btn-secondary">
                See how it works
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[360px] shrink-0 mx-auto lg:mx-0 hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl animate-pulse-glow" />
            <Image
              src="/3dboyconfuesed.png"
              alt="Confused student wondering about their future"
              width={400}
              height={400}
              className="relative w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden mb-28 scroll-reveal-scale">
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <h3
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  You don&apos;t need all the answers.
                </h3>
                <p className="text-foreground/45 max-w-md leading-relaxed">
                  Every student asks the same questions. Novi was built for them.
                </p>
              </div>
              <span className="hidden lg:block text-7xl font-bold text-foreground/5 select-none" style={{ fontFamily: "var(--font-display)" }}>
                ?
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 stagger-reveal">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="group flex items-center gap-4 rounded-2xl bg-background/60 dark:bg-surface/40 border border-black/5 dark:border-white/5 px-5 py-4 hover:border-primary/25 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="font-medium text-foreground/70">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-primary/10 border border-primary/20 px-6 py-5 animate-glow-pulse">
              <svg className="w-6 h-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                That&apos;s exactly why Novi exists.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mb-16 scroll-reveal">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-8 right-[12%] w-56 h-56 rounded-full bg-accent/10 blur-3xl animate-pulse-glow delay-700 pointer-events-none"
          />

          <div className="relative text-center max-w-xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Novi helps you...
            </h3>

            <div className="flex items-center justify-center gap-3 h-14 sm:h-16 mb-3">
              {features.map((f, i) => (
                <span
                  key={f.title}
                  aria-hidden={i !== active}
                  className={`word-swap inline-flex items-center gap-2.5 text-3xl sm:text-4xl font-bold tracking-tight ${
                    i === active ? "" : "hidden"
                  }`}
                  style={{
                    fontFamily: "var(--font-display)",
                    color: f.glow,
                  }}
                >
                  <span className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${f.color} flex items-center justify-center shadow-sm`}>
                    <span className="w-6 h-6 sm:w-7 sm:h-7 [&>svg]:w-full [&>svg]:h-full">{f.icon}</span>
                  </span>
                  {f.title}
                </span>
              ))}
            </div>

            <p className="text-foreground/45">Five ways Novi works with you, every step of the way.</p>

            <div className="flex items-center justify-center gap-2 mt-5">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${f.title}`}
                  className="group/dot p-1 cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-7" : "w-1.5 opacity-40 group-hover/dot:opacity-80"
                    }`}
                    style={{ background: f.glow }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 cards-reveal">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
