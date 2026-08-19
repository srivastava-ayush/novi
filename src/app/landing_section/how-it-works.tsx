"use client";

const steps = [
  {
    grade: "Grade 9",
    title: "Discover Yourself",
    desc: "Understand your interests, strengths, personality and possibilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    items: ["Interest assessment", "Strengths analysis", "Personality mapping", "Goal setting"],
  },
  {
    grade: "Grade 10",
    title: "Explore & Experiment",
    desc: "Discover careers, subjects, universities and experiences that excite you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    items: ["Career exploration", "Subject selection", "University research", "Experience matching"],
  },
  {
    grade: "Grade 11",
    title: "Build Your Profile",
    desc: "Turn your interests into meaningful projects, competitions, research, leadership and skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    items: ["Project planning", "Competition prep", "Research opportunities", "Leadership roles"],
  },
  {
    grade: "Grade 12",
    title: "Apply With Confidence",
    desc: "Build your university strategy, strengthen your applications and stay on top of deadlines.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    items: ["University strategy", "Application building", "Essay refinement", "Deadline tracking"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-black/5 dark:border-white/5 p-10 sm:p-16 mb-20 scroll-reveal">
          <div className="max-w-2xl">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need to have your future figured out at 15.
            </h2>
            <p className="text-lg sm:text-xl text-foreground/50 leading-relaxed">
              You just need someone who can help you figure it out—one step at a time.
            </p>
          </div>
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20 stagger-reveal">
          {steps.map((step) => (
            <div
              key={step.grade}
              className="group rounded-2xl border border-black/5 dark:border-white/5 p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {step.icon}
              </div>
              <span className="text-[11px] font-semibold text-foreground/30 uppercase tracking-widest">
                {step.grade}
              </span>
              <h3
                className="text-lg font-bold mt-1.5 mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-foreground/45 leading-relaxed mb-4">
                {step.desc}
              </p>
              <ul className="space-y-1.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-foreground/35">
                    <svg className="w-3 h-3 shrink-0 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-black/5 dark:border-white/5 p-8 sm:p-10 scroll-reveal animate-glow-pulse">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Novi remembers the journey.
              </h3>
              <p className="text-foreground/45 leading-relaxed">
                Every conversation, achievement and decision helps Novi understand you better. Your guidance gets sharper, more relevant, and more personal as you grow—because Novi grows with you.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
