"use client";

import type { CSSProperties } from "react";

const skills = [
  { name: "Problem solving", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Leadership", level: 74 },
  { name: "Analytical thinking", level: 82 },
  { name: "Creativity", level: 78 },
];

const dnaChips = [
  { label: "Problem-solving", value: 92 },
  { label: "Curiosity", value: 88 },
  { label: "Leadership", value: 81 },
];

const subjects = ["Mathematics", "Economics", "Business", "Computer Science", "Psychology"];

const industries = ["SaaS", "Fintech", "Gaming", "Health-tech", "Climate"];

const path = [
  "Summer Intern",
  "Associate PM",
  "Product Manager",
  "Senior PM",
  "Head of Product",
];

const nextSteps = [
  {
    label: "Build a project",
    hint: "Ship a tiny app in two weeks",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.25 2.25 0 0021 17.25l-5.877-5.877M11.42 15.17l-4.655-4.654m0 0L3.975 9.75a1.125 1.125 0 010-1.591l4.244-4.243a1.125 1.125 0 011.59 0l5.85 5.849m-7.007-1.5L12.41 5.5M13.5 10.5h.008v.008H13.5V10.5z" />
      </svg>
    ),
  },
  {
    label: "Learn a skill",
    hint: "Start with user interviews 101",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    label: "Explore a university",
    hint: "See the programs real PMs took",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function CareerDetail() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-[11px] font-semibold text-accent uppercase tracking-widest">
              Career Pages
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet your future,{" "}
            <span className="gradient-text">up close.</span>
          </h2>
          <p className="text-lg text-foreground/50 leading-relaxed">
            Every career comes with a page like this&mdash;clear, personal and
            honest about what it takes.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl shadow-primary/10 scroll-reveal-scale">
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-black/5 dark:border-white/5 bg-background/80 dark:bg-surface/60">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto flex items-center gap-1.5 text-xs text-foreground/40 bg-black/5 dark:bg-white/5 rounded-full px-4 py-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              novi.app/careers/product-manager
            </div>
            <div className="w-14" />
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 sm:p-10 lg:p-12">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 scroll-reveal">
              <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent animate-dot-pulse" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Product Manager
                  </h3>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-warm/10 border border-accent-warm/25 text-xs font-semibold text-accent-warm">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-dot-pulse" />
                    Could this be you?
                  </span>
                </div>
                <p className="text-foreground/50 leading-relaxed max-w-xl">
                  Product Managers bring together technology, business and
                  people to create products that solve real problems.
                </p>
              </div>

              <div className="relative shrink-0 mx-auto sm:mx-0 sm:ml-auto">
                <svg viewBox="0 0 120 120" className="w-32 h-32 -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" strokeWidth="10" className="stroke-foreground/10" />
                  <defs>
                    <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="var(--accent)" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    strokeWidth="10"
                    strokeLinecap="round"
                    stroke="url(#donutGrad)"
                    className="donut-ring"
                    style={{ "--p": 0.94 } as CSSProperties}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    94%
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/35">
                    match
                  </span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 stagger-reveal">

              <div className="lg:col-span-2 rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <h4 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  What do they actually do?
                </h4>
                <p className="text-sm text-foreground/45 leading-relaxed">
                  Product Managers sit at the crossing point of design,
                  engineering and business. They talk to users, figure out which
                  problems are worth solving, and rally a team to ship the
                  solution. One day they&apos;re writing a strategy doc; the next
                  they&apos;re testing a prototype with students exactly like you.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 marquee-shimmer pointer-events-none" />
                <h4 className="relative text-base font-bold mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                  Why Novi thinks this could fit you
                </h4>
                <p className="relative text-sm text-foreground/45 leading-relaxed mb-4">
                  Based on your Career DNA&mdash;the pattern Novi builds from how
                  you think, choose and spend your time.
                </p>
                <div className="relative space-y-2.5">
                  {dnaChips.map((d) => (
                    <div key={d.label} className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold text-foreground/60 w-28 shrink-0">{d.label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                        <div
                          className="skill-fill h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ "--w": `${d.value}%`, transitionDelay: "300ms" } as CSSProperties}
                        />
                      </div>
                      <span className="text-xs font-bold text-primary w-7 text-right">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <h4 className="text-base font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Skills you&apos;ll need
                </h4>
                <div className="space-y-3">
                  {skills.map((s, i) => (
                    <div key={s.name} className="flex items-center gap-2.5">
                      <span className="text-xs font-medium text-foreground/60 flex-1 min-w-0 truncate">{s.name}</span>
                      <div className="w-20 shrink-0 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                        <div
                          className="skill-fill h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ "--w": `${s.level}%`, transitionDelay: `${i * 120 + 200}ms` } as CSSProperties}
                        />
                      </div>
                      <span className="text-xs font-bold text-foreground/40 w-7 text-right">{s.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <h4 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  What should you study?
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {subjects.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-foreground/40 leading-relaxed">
                  Any degree can lead here&mdash;PMs come from engineering,
                  business, design and beyond.
                </p>
              </div>

              <div className="rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <h4 className="text-base font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Where could this career take you?
                </h4>
                <ol className="relative space-y-3 pl-1 mb-4">
                  <span className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" aria-hidden="true" />
                  {path.map((step, i) => (
                    <li key={step} className="relative flex items-center gap-3 pl-5">
                      <span
                        className={`absolute left-0 w-[11px] h-[11px] rounded-full border-2 ${
                          i === 0
                            ? "bg-accent border-accent shadow-md shadow-accent/40"
                            : "bg-background dark:bg-surface border-primary/40"
                        }`}
                      />
                      <span className={`text-sm ${i === 0 ? "font-bold text-foreground/80" : "font-medium text-foreground/45"}`}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap gap-1.5">
                  {industries.map((ind) => (
                    <span key={ind} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-foreground/40 text-[10px] font-semibold">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-surface/40 p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg">
                <h4 className="text-base font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Your next steps
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {nextSteps.map((step) => (
                    <a
                      key={step.label}
                      href="#"
                      className="group flex items-center gap-3 rounded-xl border border-black/5 dark:border-white/5 bg-background/80 dark:bg-surface-elevated/60 px-4 py-3.5 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                    >
                      <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {step.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">{step.label}</span>
                        <span className="block text-[11px] text-foreground/40 truncate">{step.hint}</span>
                      </span>
                      <svg className="w-4 h-4 text-foreground/25 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
