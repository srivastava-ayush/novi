"use client";

import { useState } from "react";
const steps = [
  {
    grade: "09",
    label: "Grade 9",
    title: "Discover Yourself",
    short: "Know yourself before choosing your path.",
    desc: "Novi helps you understand your interests, strengths, personality and the areas where you naturally enjoy learning.",
    items: [
      "Interest assessment",
      "Strength analysis",
      "Personality mapping",
      "Goal setting",
    ],
    icon: "✦",
  },
  {
    grade: "10",
    label: "Grade 10",
    title: "Explore Possibilities",
    short: "Turn curiosity into possibilities.",
    desc: "Explore careers, subjects, universities and real-world experiences based on what actually interests you.",
    items: [
      "Career exploration",
      "Subject selection",
      "University discovery",
      "Experience matching",
    ],
    icon: "⌕",
  },
  {
    grade: "11",
    label: "Grade 11",
    title: "Build Your Profile",
    short: "Start turning interests into proof.",
    desc: "Novi helps you transform your interests into projects, competitions, research, leadership and meaningful experiences.",
    items: [
      "Project planning",
      "Competition preparation",
      "Research opportunities",
      "Leadership roles",
    ],
    icon: "↗",
  },
  {
    grade: "12",
    label: "Grade 12",
    title: "Apply With Confidence",
    short: "Bring everything together.",
    desc: "Build your university strategy, improve your applications and stay organized throughout the application journey.",
    items: [
      "University strategy",
      "Application building",
      "Essay refinement",
      "Deadline tracking",
    ],
    icon: "◎",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[5%] w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="max-w-3xl mb-16 scroll-reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
            The Novi Journey
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your future doesn&apos;t happen
            <span className="gradient-text"> all at once.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-2xl">
            Novi stays with you as your questions change—from
            &quot;What am I good at?&quot; to &quot;Which university should I
            choose?&quot;
          </p>
        </div>

        <div className="relative mb-20">

          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/10 via-primary/30 to-accent/10" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <button
                  key={step.grade}
                  type="button"
                  onClick={() => setActive(index)}
                  className="text-left group relative"
                >
                  <div className="relative z-10 flex justify-center lg:justify-start mb-6">
                    <div
                      className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-[0_0_35px_rgba(108,92,231,0.25)] scale-105"
                          : "bg-background border-black/10 dark:border-white/10 text-primary group-hover:border-primary/30 group-hover:-translate-y-1"
                      }`}
                    >
                      <span className="text-xl font-bold">{step.grade}</span>
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl p-5 border transition-all duration-500 ${
                      isActive
                        ? "border-primary/25 bg-primary/[0.04] shadow-lg"
                        : "border-black/5 dark:border-white/5 hover:border-primary/15"
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-foreground/30">
                      {step.label}
                    </span>

                    <h3
                      className="text-lg font-bold mt-2 mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-foreground/45 leading-relaxed">
                      {step.short}
                    </p>

                    <div
                      className={`mt-4 text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-foreground/25 group-hover:text-primary"
                      }`}
                    >
                      {isActive ? "Exploring this stage" : "View stage"} →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={active}
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 rounded-3xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.04] p-8 sm:p-12 scroll-reveal-scale"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6">
              {steps[active].icon}
            </div>

            <span className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
              {steps[active].label}
            </span>

            <h3
              className="text-3xl sm:text-4xl font-bold mt-3 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {steps[active].title}
            </h3>

            <p className="text-foreground/50 leading-relaxed max-w-md">
              {steps[active].desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 content-start">
            {steps[active].items.map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 px-5 py-5 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                  {index + 1}
                </div>

                <span className="text-sm font-medium text-foreground/65 group-hover:text-foreground transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-black/5 dark:border-white/5 bg-background/50 p-6 sm:p-8">
          <div className="flex gap-5 items-start">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              ✦
            </div>

            <div>
              <h3
                className="font-bold text-lg mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Novi remembers the context.
              </h3>

              <p className="text-sm sm:text-base text-foreground/40 leading-relaxed">
                Your goals, interests, decisions and progress build on each
                other—so you don&apos;t have to start from zero every time.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}