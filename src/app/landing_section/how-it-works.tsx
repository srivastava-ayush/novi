"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    grade: "Grade 9",
    title: "Discover Yourself",
    desc: "Understand your interests, strengths, personality and possibilities.",
    color: "from-primary to-primary-light",
    glow: "108, 92, 231",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    num: "02",
    grade: "Grade 10",
    title: "Explore & Experiment",
    desc: "Discover careers, subjects, universities and experiences that excite you.",
    color: "from-accent to-teal-300",
    glow: "0, 206, 201",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "03",
    grade: "Grade 11",
    title: "Build Your Profile",
    desc: "Turn your interests into meaningful projects, competitions and leadership.",
    color: "from-accent-warm to-pink-300",
    glow: "253, 121, 168",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    num: "04",
    grade: "Grade 12",
    title: "Apply With Confidence",
    desc: "Build your university strategy, strengthen applications and hit every deadline.",
    color: "from-primary-light to-accent",
    glow: "162, 155, 254",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, visible } = useReveal(0.15);
  const isLeft = index % 2 === 0;
  const delay = index * 150;

  return (
    <div ref={ref} className="relative grid lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

      {/* Left side */}
      <div className={`hidden lg:flex ${isLeft ? "justify-end" : "justify-end"}`}>
        {isLeft ? (
          <div
            className={`w-full max-w-lg rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            <div className="flex items-start gap-5">
              <span
                className={`text-6xl font-black bg-gradient-to-br ${step.color} bg-clip-text leading-none select-none shrink-0 transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${delay + 200}ms`, WebkitTextFillColor: "transparent" }}
              >
                {step.num}
              </span>
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-2">{step.grade}</span>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                <p className="text-[15px] text-foreground/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        ) : <div />}
      </div>

      {/* Center node */}
      <div className="flex flex-col items-center relative z-10">
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white transition-all duration-500 ${
            visible ? "scale-100 rotate-0" : "scale-0 rotate-180"
          }`}
          style={{
            transitionDelay: `${delay + 150}ms`,
            boxShadow: `0 0 0 6px rgba(${step.glow}, 0.08), 0 0 30px rgba(${step.glow}, 0.25)`,
          }}
        >
          {step.icon}
        </div>
        {/* Pulse ring */}
        <div
          className={`absolute w-14 h-14 rounded-full border-2 border-current transition-all duration-1000 ${
            visible ? "scale-[2.2] opacity-0" : "scale-100 opacity-30"
          }`}
          style={{ transitionDelay: `${delay + 400}ms`, color: `rgba(${step.glow}, 0.4)` }}
        />
      </div>

      {/* Right side */}
      <div className={`hidden lg:flex ${!isLeft ? "justify-start" : "justify-start"}`}>
        {!isLeft ? (
          <div
            className={`w-full max-w-lg rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            <div className="flex items-start gap-5">
              <span
                className={`text-6xl font-black bg-gradient-to-br ${step.color} bg-clip-text leading-none select-none shrink-0 transition-all duration-500 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                style={{ transitionDelay: `${delay + 200}ms`, WebkitTextFillColor: "transparent" }}
              >
                {step.num}
              </span>
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-2">{step.grade}</span>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                <p className="text-[15px] text-foreground/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        ) : <div />}
      </div>

      {/* Mobile card */}
      <div className="lg:hidden col-span-full pl-16 -mt-2 mb-2">
        <div
          className={`rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <div className="flex items-start gap-4">
            <span
              className={`text-5xl font-black bg-gradient-to-br ${step.color} bg-clip-text leading-none select-none shrink-0 transition-all duration-500 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${delay + 200}ms`, WebkitTextFillColor: "transparent" }}
            >
              {step.num}
            </span>
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/25 mb-1">{step.grade}</span>
              <h3 className="text-lg font-bold mb-1.5" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref: headRef, visible: headVisible } = useReveal(0.3);
  const { ref: footRef, visible: footVisible } = useReveal(0.3);

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className={`mb-24 transition-all duration-800 ease-out ${headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative rounded-3xl border border-black/5 dark:border-white/5 p-10 sm:p-16 overflow-hidden">
            {/* Ambient orbs */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

            <div className="relative flex flex-col gap-6">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight w-full"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You don&apos;t need to have your future figured out{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-accent-warm bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>at 15.</span>
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-lg text-foreground/45 leading-relaxed max-w-lg">
                  You just need someone who can help you figure it out—one step at a time.
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px]"
            style={{
              background: `linear-gradient(to bottom, rgba(108,92,231,0.15), rgba(0,206,201,0.15), rgba(253,121,168,0.1), transparent)`,
            }}
          />

          <div className="flex flex-col gap-14 lg:gap-20">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Footer card */}
        <div ref={footRef} className={`mt-24 transition-all duration-700 ease-out ${footVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,206,201,0.06), transparent 60%)" }} />
            <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-teal-300 flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Novi remembers the journey.
                </h3>
                <p className="text-foreground/40 leading-relaxed">
                  Every conversation, achievement and decision helps Novi understand you better. Your guidance gets sharper, more relevant, and more personal as you grow—because Novi grows with you.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
