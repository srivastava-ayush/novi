"use client";

import Image from "next/image";
import Link from "next/link";

const painPoints = [
  "Not sure what career you want?",
  "Don't know which subjects to choose?",
  "Wondering which university is right for you?",
  "Don't know how to build a strong profile?",
]; 

const features = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your interests, strengths and the possibilities that match you.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Plan",
    desc: "Turn your goals into a clear roadmap of subjects, skills and experiences.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Build",
    desc: "Create projects and experiences that give your interests real-world meaning.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Explore",
    desc: "Compare careers, universities, courses and opportunities without the overwhelm.",
    icon: "◎",
  },
  {
    number: "05",
    title: "Grow",
    desc: "Get ongoing guidance as your interests and goals evolve.",
    icon: "↑",
  },
];


export default function ForStudents() {
  return (
    <section id="for-students" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-14 items-center mb-28 scroll-reveal">

          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/15 text-accent text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
              For Students
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need
              <br />
              <span className="gradient-text">all the answers.</span>
            </h2>

            <p className="text-lg text-foreground/50 leading-relaxed max-w-xl mb-8">
              You just need a place to ask questions, explore possibilities
              and figure things out without feeling like you&apos;re already
              supposed to know everything.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/careers" className="btn-primary group">
                  <span>Discover Careers</span>

                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>

                <Link href="#how-it-works" className="btn-secondary">
                  See how it works
                </Link>
            </div>
          </div>

          
          <div className="relative max-w-[420px] w-full mx-auto lg:ml-auto">
            <div className="absolute inset-10 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />

            <div className="relative rounded-[2rem] border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/5 to-accent/5 p-8 overflow-hidden">
              <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-primary/50 animate-pulse" />
              <div className="absolute bottom-10 left-5 w-2 h-2 rounded-full bg-accent/60 animate-pulse" />

              <Image
                src="/3dboyconfuesed.png"
                alt="Student exploring their future"
                width={420}
                height={420}
                className="relative w-full h-auto object-contain hover:scale-[1.03] transition-transform duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 dark:border-white/10 bg-background/70 backdrop-blur-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    ✦
                  </div>
                  <div>
                    <p className="text-xs font-bold">It&apos;s okay not to know yet.</p>
                    <p className="text-[11px] text-foreground/40">
                      Start with one question.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="rounded-3xl border border-black/5 dark:border-white/5 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.04] p-8 sm:p-12 mb-28 scroll-reveal-scale">

          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
              Sound familiar?
            </span>

            <h3
              className="text-3xl sm:text-4xl font-bold mt-3 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The questions get bigger as you grow.
            </h3>

            <p className="text-foreground/45 leading-relaxed">
              And searching for answers across a hundred different places
              makes everything feel harder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className="group flex items-center gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-background/60 px-5 py-4 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-bold">
                  ?
                </div>

                <p className="text-sm sm:text-base font-medium text-foreground/60 group-hover:text-foreground/80">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-primary/10 border border-primary/15 px-5 py-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              ✓
            </div>

            <p
              className="font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              That&apos;s exactly where Novi comes in.
            </p>
          </div>
        </div>

        
        <div className="mb-10 scroll-reveal">
          <span className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
            One mentor. Many roles.
          </span>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mt-3">
            <h3
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Novi helps you move forward.
            </h3>

            <p className="text-sm text-foreground/40 max-w-sm">
              Not by giving you a fixed answer—but by helping you make better
              decisions.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 stagger-reveal">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group relative rounded-2xl border border-black/5 dark:border-white/5 p-6 min-h-[230px] hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <span className="text-[10px] font-bold tracking-widest text-foreground/20">
                  {feature.number}
                </span>
              </div>

              <h4
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h4>

              <p className="text-sm text-foreground/40 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}