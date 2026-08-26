"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const examples = [
  "Artificial Intelligence",
  "Medicine",
  "Design",
  "Entrepreneurship",
  "Finance",
  "Psychology",
];

const traits = [
  "Interests",
  "Strengths",
  "Personality",
  "Subjects",
  "Skills",
  "Goals",
  "Experiences",
];

const traitColors = [
  "text-primary bg-primary/10 border-primary/20",
  "text-accent bg-accent/10 border-accent/20",
  "text-accent-warm bg-accent-warm/10 border-accent-warm/20",
];

const tagStyles: Record<string, string> = {
  "Artificial Intelligence": "text-primary bg-primary/10 border-primary/20",
  Medicine: "text-accent-warm bg-accent-warm/10 border-accent-warm/20",
  Design: "text-accent bg-accent/10 border-accent/20",
  Entrepreneurship: "text-primary-light bg-primary-light/10 border-primary-light/20",
  Finance: "text-accent bg-accent/10 border-accent/20",
  Psychology: "text-accent-warm bg-accent-warm/10 border-accent-warm/20",
};

const careers = [
  { title: "AI Engineer", tag: "Artificial Intelligence", desc: "Teach machines to see, speak and solve.", match: 96 },
  { title: "Robotics Engineer", tag: "Artificial Intelligence", desc: "Give software a body, senses and a job.", match: 88 },
  { title: "Doctor", tag: "Medicine", desc: "Diagnose, treat and care for real people.", match: 91 },
  { title: "Biotech Researcher", tag: "Medicine", desc: "Fight disease at the cellular level.", match: 83 },
  { title: "UX Designer", tag: "Design", desc: "Make technology feel effortless to use.", match: 89 },
  { title: "Game Designer", tag: "Design", desc: "Build worlds people never want to leave.", match: 86 },
  { title: "Startup Founder", tag: "Entrepreneurship", desc: "Turn a raw idea into something real.", match: 92 },
  { title: "Investment Analyst", tag: "Finance", desc: "Read markets and make smart bets.", match: 81 },
  { title: "Clinical Psychologist", tag: "Psychology", desc: "Help people understand their own minds.", match: 85 },
];

const suggestions = [
  { title: "Product Manager", why: "You love solving messy, human problems.", match: 94 },
  { title: "UX Designer", why: "Your curiosity and creativity score high.", match: 89 },
  { title: "Clinical Psychologist", why: "You naturally read people and patterns.", match: 84 },
];

function useTypewriter(words: string[], speed = 75, pause = 1500) {
  const [text, setText] = useState("");

  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[word];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          word = (word + 1) % words.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 40);
      }
    };

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, [words, speed, pause]);

  return text;
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function CareerDiscovery() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const typed = useTypewriter(examples);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? careers.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.tag.toLowerCase().includes(q)
      )
    : careers;

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">
              Career Discovery
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What could you <span className="gradient-text">become?</span>
          </h2>
          <p className="text-lg text-foreground/50 leading-relaxed">
            There are thousands of careers you&apos;ve probably never heard of.
            Novi helps you discover the ones that could be right for you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12 scroll-reveal">
          <div
            className={`relative flex items-center gap-3 rounded-full border bg-background/70 dark:bg-surface/50 backdrop-blur px-5 sm:px-6 py-4 shadow-sm transition-all duration-300 ${
              focused
                ? "border-primary/40 shadow-[0_0_40px_-8px_rgba(108,92,231,0.35)]"
                : "border-black/10 dark:border-white/10"
            }`}
          >
            <svg className="w-5 h-5 text-foreground/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <div className="relative flex-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Search careers, interests or skills..."
                className="w-full bg-transparent outline-none text-base placeholder:text-transparent"
              />
              {!focused && !query && (
                <span className="absolute inset-0 flex items-center pointer-events-none text-base text-foreground/35 truncate">
                  <span className="truncate">{typed}</span>
                  <span className="animate-caret inline-block w-[2px] h-5 bg-primary ml-0.5 shrink-0" />
                </span>
              )}
            </div>
            {(focused || query) && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="shrink-0 w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/15 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setQuery(query === ex ? "" : ex)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                  query === ex
                    ? "bg-gradient-to-r from-primary to-primary-light text-white border-transparent shadow-md shadow-primary/25 scale-105"
                    : `${tagStyles[ex]} hover:scale-105`
                }`}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="flex items-baseline justify-between mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/35">
              Popular careers
            </p>
            {q && (
              <p className="text-xs font-semibold text-primary">
                {filtered.length} match{filtered.length === 1 ? "" : "es"} for &ldquo;{query.trim()}&rdquo;
              </p>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-reveal">
              {careers.map((c) => {
                const active = !q || c.title.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q);
                return (
                  <div
                    key={c.title}
                    className={`group rounded-2xl border p-5 transition-all duration-500 ${
                      active
                        ? "border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
                        : "opacity-20 saturate-0 scale-[0.98]"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg font-bold ${tagStyles[c.tag]} transition-transform duration-300 group-hover:scale-110`}>
                        {c.title.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-sm truncate" style={{ fontFamily: "var(--font-display)" }}>
                          {c.title}
                        </h4>
                        <span className={`inline-block mt-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold ${tagStyles[c.tag]}`}>
                          {c.tag}
                        </span>
                      </div>
                      <span className="ml-auto shrink-0 px-2 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                        {c.match}%
                      </span>
                    </div>
                    <p className="text-sm text-foreground/45 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/10 dark:border-white/10 p-10 text-center scroll-reveal-scale">
              <p className="text-foreground/45 mb-4">
                No matches for &ldquo;{query.trim()}&rdquo;&mdash;but Novi can find careers nobody told you about.
              </p>
              <button onClick={() => setQuery("")} className="btn-secondary !py-2.5 !px-6 !text-sm cursor-pointer">
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="mt-24 rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden scroll-reveal-scale">
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 sm:p-14">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-8 items-center">

              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Don&apos;t know what career you want?{" "}
                  <span className="text-foreground/35">That&apos;s okay.</span>
                </h3>
                <p className="text-foreground/45 mb-6 leading-relaxed">Novi looks at your:</p>
                <div className="flex flex-wrap gap-2 stagger-reveal">
                  {traits.map((t, i) => (
                    <span
                      key={t}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm font-semibold ${traitColors[i % traitColors.length]}`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-current animate-dot-pulse"
                        style={{ animationDelay: `${i * 250}ms` } as CSSProperties}
                      />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center shadow-lg shadow-primary/30 animate-nudge-x">
                <ArrowIcon className="w-5 h-5 text-white" />
              </div>

              <div className="relative rounded-3xl border border-black/5 dark:border-white/5 bg-background/70 dark:bg-surface/50 backdrop-blur p-6 overflow-hidden animate-glow-pulse">
                <div className="absolute inset-0 marquee-shimmer pointer-events-none rounded-3xl" />
                <p className="relative text-xs font-semibold uppercase tracking-widest text-foreground/35 mb-4">
                  Novi found careers that could fit
                </p>
                <div className="relative space-y-3 stagger-reveal">
                  {suggestions.map((s) => (
                    <div
                      key={s.title}
                      className="group flex items-center gap-4 rounded-2xl bg-background/80 dark:bg-surface-elevated/60 border border-black/5 dark:border-white/5 px-4 py-3.5 hover:border-primary/25 hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                          {s.title}
                        </p>
                        <p className="text-xs text-foreground/45 truncate">{s.why}</p>
                      </div>
                      <span className="gradient-text text-2xl font-bold shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                        {s.match}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="text-center mt-10 scroll-reveal">
              <a href="#" className="btn-primary">
                <span>Discover My Careers</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
