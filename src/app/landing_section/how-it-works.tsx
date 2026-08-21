"use client";

import { useState, useRef } from "react";

const steps = [
  {
    grade: "09",
    label: "Grade 9",
    title: "Discover Yourself",
    short: "Know yourself before choosing your path.",
    desc: "Novi helps you understand your interests, strengths, personality and the areas where you naturally enjoy learning.",
    items: ["Interest assessment", "Strength analysis", "Personality mapping", "Goal setting"],
    icon: "✦",
  },
  {
    grade: "10",
    label: "Grade 10",
    title: "Explore Possibilities",
    short: "Turn curiosity into possibilities.",
    desc: "Explore careers, subjects, universities and real-world experiences based on what actually interests you.",
    items: ["Career exploration", "Subject selection", "University discovery", "Experience matching"],
    icon: "⌕",
  },
  {
    grade: "11",
    label: "Grade 11",
    title: "Build Your Profile",
    short: "Start turning interests into proof.",
    desc: "Novi helps you transform your interests into projects, competitions, research, leadership and meaningful experiences.",
    items: ["Project planning", "Competition preparation", "Research opportunities", "Leadership roles"],
    icon: "↗",
  },
  {
    grade: "12",
    label: "Grade 12",
    title: "Apply With Confidence",
    short: "Bring everything together.",
    desc: "Build your university strategy, improve your applications and stay organized throughout the application journey.",
    items: ["University strategy", "Application building", "Essay refinement", "Deadline tracking"],
    icon: "◎",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50" />
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute w-2 h-2 bg-accent/40 rounded-full animate-float delay-${i * 100}`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDuration: `${4 + i}s`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-14 animate-bounce-in-slow">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-[11px] font-bold uppercase tracking-[0.18em] mb-5 animate-pulse-glow">
            The 4-Year Journey
          </span>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four years. One clear path.{" "}
            <span className="gradient-text animate-gradient-x">Your future.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-2xl">
            From Grade 9 to 12, Novi guides you through every step—from
            discovering who you are, to applying with absolute confidence.
          </p>
        </div>

        <div className="relative mb-16">
          
          <div className="hidden lg:block absolute top-[30px] left-[10%] right-[10%] h-px animate-line-shimmer" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const isActive = active === index;
              const delay = index * 100;

              return (
                <button
                  key={step.grade}
                  type="button"
                  onClick={() => setActive(index)}
                  className="text-left group relative animate-bounce-in-slow"
                  style={{ animationDelay: `${delay}ms` }}
                  onMouseMove={(e) => {

                    const card = e.currentTarget.querySelector('.tilt-card');
                    if (card) {
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const rotateX = (y - rect.height / 2) / 10;
                      const rotateY = (x - rect.width / 2) / 10;
                      card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget.querySelector('.tilt-card');
                    if (card) {
                      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
                    }
                  }}
                >
                  {isActive && (
                    <div className="absolute left-1/2 top-[30px] -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary to-transparent animate-beam" />
                  )}

                  <div className="relative z-10 flex justify-center lg:justify-start mb-6">
                    <div className={`relative w-[60px] h-[60px] rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-[0_0_35px_rgba(108,92,231,0.5)] scale-110"
                          : "bg-background border-black/10 dark:border-white/10 text-primary group-hover:border-primary/30 group-hover:-translate-y-1"
                      }`}
                    >
                      <span className="text-xl font-bold">{step.grade}</span>
                      
                      <span className="absolute -inset-2 rounded-2xl border border-primary/20 animate-orbit" />
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl p-5 border tilt-card transition-all duration-500 ${
                      isActive
                        ? "border-green-400/80 bg-green-400/[0.05] shadow-[0_0_20px_rgba(74,222,128,0.2)]" // Changed to Green
                        : "border-black/5 dark:border-white/5 hover:border-primary/20"
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
                      className={`mt-4 text-xs font-semibold transition-all duration-300 flex items-center gap-1 ${
                        isActive
                          ? "text-green-400" 
                          : "text-foreground/25 group-hover:text-primary"
                      }`}
                    >
                      {isActive ? "Exploring this stage" : "View stage"} 
                      <span className={`transition-transform duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>→</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        

    
        <div className="mt-6 rounded-2xl border border-black/5 dark:border-white/5 bg-background/50 p-6 sm:p-8 hover:border-accent/30 transition-all duration-300 group overflow-hidden relative animate-bounce-in-slow" style={{ animationDelay: "600ms" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" style={{ transition: "transform 1s ease" }} />
          <div className="flex gap-5 items-start relative z-10">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
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