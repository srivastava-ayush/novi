"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";



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
  const [formData, setFormData] = useState({ name: "", email: "", role: "student" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const handleSubmit = () => {
    setStatus("submitting");
    // Since we're posting to an iframe, we just wait a bit and show success
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Join the waitlist"
    >
      <div
        className="relative w-full max-w-xl glass-card rounded-3xl overflow-hidden animate-pop-in"
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
        
        <div className="p-6 sm:p-8">
          {status === "success" ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                You're on the list!
              </h3>
              <p className="text-foreground/70 mb-8">
                Thank you for joining the Novi waitlist. We'll be in touch soon!
              </p>
              <button onClick={onClose} className="btn-primary">
                <span>Close Window</span>
              </button>
            </div>
          ) : (
            <>
              <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
              <form 
                action="https://script.google.com/a/macros/hinovi.me/s/AKfycbx0BiwjHoNQI1Kgqi-qFsQO6JeFB5JIRoHi_JFOBjWSbgY7BeJQYVR6VIATBfaqbKgjcw/exec" 
                method="POST" 
                target="hidden_iframe" 
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground/80 mb-1.5">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="student" className="bg-background text-foreground">Student</option>
                    <option value="parent" className="bg-background text-foreground">Parent</option>
                    <option value="educator" className="bg-background text-foreground">Educator</option>
                    <option value="other" className="bg-background text-foreground">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-2 btn-primary justify-center text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span>Join Waitlist</span>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const MODULES = [
  {
    icon: "🧬",
    title: "Career DNA Profiling",
    description:
      "Unlock your unique strengths and discover careers that perfectly align with your personality.",
  },
  {
    icon: "🎓",
    title: "University Explorer",
    description:
      "Search through thousands of colleges and compare requirements tailored to your specific goals.",
  },
  {
    icon: "💬",
    title: "24/7 AI Mentor",
    description:
      "Have a personal AI companion ready to answer questions and keep you motivated around the clock.",
  },
  {
    icon: "🗺️",
    title: "Dynamic Roadmaps",
    description:
      "Get a step-by-step personalized roadmap that evolves with you, so you're always on track.",
  },
];

const BENEFITS = [
  {
    icon: "👑",
    title: "Founding Member Perks",
    description:
      "Lifetime discounts, exclusive features, and early access to new tools.",
  },
  {
    icon: "🗣️",
    title: "Shape the Product",
    description:
      "Get direct access to our team and influence what Novi builds next.",
  },
  {
    icon: "⚡",
    title: "Skip the Queue",
    description:
      "Be the first to unlock your AI mentor when doors officially open.",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = el.querySelectorAll(".scroll-reveal, .scroll-reveal-scale, .stagger-reveal");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function ComingSoon() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const revealRef = useScrollReveal();
  const openModal = () => setShowWaitlist(true);

  return (
    <div ref={revealRef} className="relative min-h-screen overflow-hidden hero-gradient">
      <FloatingOrb className="w-[500px] h-[500px] bg-primary top-[-150px] left-[-150px]" />
      <FloatingOrb className="w-[400px] h-[400px] bg-accent bottom-[-100px] right-[-100px]" delay={1} />
      <FloatingOrb className="w-[300px] h-[300px] bg-accent-warm bottom-[20%] left-[10%]" delay={2} />

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between animate-slide-in-left opacity-0">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <span
              className="text-white font-bold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              N
            </span>
          </div>
          <span
            className="text-xl font-bold tracking-wide text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            NOVI
          </span>
        </div>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 hover:bg-primary/15 transition-colors cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-dot-pulse" />
          <span
            className="text-xs font-bold tracking-widest uppercase gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Coming Soon
          </span>
        </button>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-accent-warm/10 border border-accent-warm/25 animate-slide-in-left opacity-0 delay-100">
              <span className="w-2 h-2 rounded-full bg-accent-warm animate-dot-pulse" />
              <span className="text-xs font-semibold text-accent-warm tracking-wide uppercase">
                Limited founding member access
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight animate-slide-in-left opacity-0 delay-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block text-foreground">Your future won&apos;t wait.</span>
              <span className="block gradient-text">Neither should you.</span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-xl leading-relaxed animate-slide-in-left opacity-0 delay-300">
              Confused about careers? Overwhelmed by universities? Novi is the AI
              mentor that turns confusion into a personalized roadmap to your dream
              college.
            </p>

            <div className="animate-slide-in-left opacity-0 delay-400">
              <button onClick={openModal} className="btn-primary text-base sm:text-lg">
                <span>Join the Early Access List</span>
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
                🔥 Only a few founding spots available. Don&apos;t miss out.
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 animate-pop-in opacity-0 delay-300">
            <div className="relative w-full aspect-square max-w-[540px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent-warm/20 blur-3xl animate-pulse-glow" />
              <div className="relative w-full h-full hover:scale-[1.03] transition-transform duration-700 animate-float">
                <Image
                  src="/3dboyconfuesed.png"
                  alt="Confused student wondering about his future"
                  width={540}
                  height={540}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              <div className="absolute top-[12%] -left-2 sm:-left-6 glass-card rounded-2xl px-4 py-3 shadow-lg animate-float z-10" style={{ animationDelay: "1s" }}>
                <p className="text-xs font-semibold text-foreground/80">&ldquo;What should I do after 12th?&rdquo;</p>
              </div>
              <div className="absolute bottom-[14%] -right-2 sm:-right-6 glass-card rounded-2xl px-4 py-3 shadow-lg animate-float z-10" style={{ animationDelay: "2.2s" }}>
                <p className="text-xs font-semibold text-foreground/80">🤯 So many options&hellip; so little clarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            Novi isn&apos;t just an app; it&apos;s your personalized co-pilot for the
            high school journey.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
          {MODULES.map((module) => (
            <div
              key={module.title}
              className="glass-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/10 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {module.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="scroll-reveal">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why join the <span className="gradient-text">waitlist today?</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
              Be a founding member and shape the future of student mentorship.
            </p>

            <div className="mt-9 space-y-6 stagger-reveal">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-accent-warm/15 to-primary/15 border border-accent-warm/15 flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-foreground/60 mt-0.5 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={openModal} className="btn-primary mt-10">
              <span>Reserve My Spot</span>
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
          </div>

          <div className="relative scroll-reveal-scale">
            <div className="relative w-full aspect-square max-w-[520px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl animate-pulse-glow" />
              <div className="relative w-full h-full hover:scale-[1.03] transition-transform duration-700">
                <Image
                  src="/3dboy.png"
                  alt="Confident student with a clear plan for the future"
                  width={520}
                  height={520}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 glass-card rounded-2xl px-5 py-3 shadow-lg whitespace-nowrap">
                <p className="text-xs font-semibold text-foreground/80">
                  ✨ With Novi: clarity, confidence, a plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 max-w-4xl mx-auto px-6 pt-10 pb-16 text-center scroll-reveal">
        <div className="glass-card rounded-[2.5rem] px-8 py-14 sm:px-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />

          <h2
            className="relative text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to build <span className="gradient-text">your future?</span>
          </h2>
          <p className="relative mt-4 text-lg text-foreground/60 max-w-xl mx-auto">
            Join 500+ students and parents already on the list. The future doesn&apos;t wait.
          </p>
          <div className="relative mt-9">
            <button onClick={openModal} className="btn-primary text-base sm:text-lg">
              <span>Get Early Access</span>
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
          </div>
          <p className="relative mt-10 text-xs text-foreground/40">
            © 2026 Novi. The Operating System for Student Success.
          </p>
        </div>
      </footer>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </div>
  );
}
