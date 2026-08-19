"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Hero() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChat(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <FloatingOrb className="w-[600px] h-[600px] bg-primary top-[-200px] left-[-200px]" />
      <FloatingOrb
        className="w-[400px] h-[400px] bg-accent top-[30%] right-[-100px]"
        delay={1}
      />
      <FloatingOrb
        className="w-[300px] h-[300px] bg-accent-warm bottom-[-100px] left-[30%]"
        delay={2}
      />

      <section className="hero-gradient min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 self-start animate-slide-in-left opacity-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                    AI-Powered Mentorship
                  </span>
                </div>
              </div>

              <div className="space-y-4 animate-slide-in-left opacity-0 delay-100">
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="block text-foreground">Your AI mentor.</span>
                  <span className="block text-foreground">Your journey.</span>
                  <span className="block gradient-text">Your future.</span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-foreground/70 max-w-xl leading-relaxed animate-slide-in-left opacity-0 delay-200">
                Novi is the AI-powered Operating System for Student Success
                that guides you from Grade 9 to your dream university—and
                beyond.
              </p>

              <p className="text-base text-foreground/50 max-w-lg leading-relaxed animate-slide-in-left opacity-0 delay-300">
                Discover who you are. Explore what&apos;s possible. Build your
                path. Become who you want to be.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-in-left opacity-0 delay-400">
                <a href="#" className="btn-primary">
                  <span>Meet Novi</span>
                  <svg
                    className="w-4 h-4"
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
                </a>
                <a href="#" className="btn-secondary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  <span>I&apos;m a Parent</span>
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 animate-slide-in-right opacity-0 delay-200">
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse-glow" />

                <div className="relative w-full h-full hover:scale-[1.03] transition-transform duration-700">
                  <Image
                    src="/3dboy.png"
                    alt="Novi — AI Mentor"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {showChat && (
                  <div className="absolute -top-2 -right-2 sm:-top-6 sm:-right-6 animate-bounce-in z-20">
                    <div className="chat-bubble max-w-[280px]">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                          <span className="text-white text-lg">👋</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground mb-0.5">
                            Hi! I&apos;m Novi
                          </p>
                          <p className="text-sm text-foreground/70 leading-relaxed">
                            I&apos;m here to help you discover your best
                            future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute top-8 right-4 sm:top-12 sm:right-0 animate-float opacity-0 delay-600">
                  <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Path Mapped
                      </p>
                      <p className="text-[11px] text-foreground/50">
                        Grade 9 → Stanford
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-24 left-0 sm:top-32 sm:left-[-20px] animate-float opacity-0 delay-700">
                  <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Skill Unlocked
                      </p>
                      <p className="text-[11px] text-foreground/50">
                        Critical Thinking Lv.3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full -mx-6 mt-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-primary/20 py-3.5 overflow-hidden">
          <div className="absolute inset-0 marquee-shimmer pointer-events-none" />
          <div className="marquee relative z-10">
            <div className="marquee-track items-center">
              {[0, 1].map((set) => (
                <div key={set} className="flex items-center shrink-0">
                  <span className="text-sm font-semibold text-primary pr-4">Personalized AI Mentor</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-dot-pulse shrink-0" />
                  <span className="text-sm font-semibold text-accent px-4">4-Year Journey</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-dot-pulse shrink-0" style={{ animationDelay: "0.3s" }} />
                  <span className="text-sm font-semibold text-primary-light px-4">Career + University Guidance</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-warm/60 animate-dot-pulse shrink-0" style={{ animationDelay: "0.6s" }} />
                  <span className="text-sm font-semibold text-accent-warm px-4">Built around you</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-dot-pulse shrink-0 mr-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
