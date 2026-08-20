"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-glow pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function CheckIcon() {
  return (
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
        d="M9 12.75L11.25 15 15 9.75"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
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
  );
}

export default function Hero() {
  const [showChat, setShowChat] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const chatTimer = setTimeout(() => {
      setShowChat(true);
    }, 1200);

    const typingTimer = setTimeout(() => {
      setShowTyping(false);
    }, 2400);

    return () => {
      clearTimeout(chatTimer);
      clearTimeout(typingTimer);
    };
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        setMousePosition({
          x: x * 4,
          y: y * 4,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <FloatingOrb className="w-[600px] h-[600px] bg-primary top-[-200px] left-[-200px]"/>
      <FloatingOrb className="w-[400px] h-[400px] bg-accent top-[30%] right-[-100px]"/>
      <FloatingOrb className="w-[300px] h-[300px] bg-accent-warm bottom-[-100px] left-[30%]"/>

      <section className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 hero-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 self-start animate-slide-in-left opacity-0">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary/15 hover:border-primary/30 hover:-translate-y-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>

                  <span className="text-xs font-semibold text-primary tracking-wide uppercase">
                    AI-Powered Mentorship
                  </span>
                </div>
              </div>

              
              <div className="space-y-2 sm:space-y-3">
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="block animate-slide-in-left opacity-0">
                    Your AI mentor.
                  </span>

                  <span className="block animate-slide-in-left opacity-0 delay-100">
                    Your journey.
                  </span>

                  <span
                    className="block gradient-text animate-slide-in-left opacity-0 delay-200"
                    style={{
                      filter:
                        "drop-shadow(0 0 18px rgba(108, 92, 231, 0.18))",
                    }}
                  >
                    Your future.
                  </span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-foreground/60 max-w-xl leading-relaxed animate-slide-in-left opacity-0 delay-300">
                Novi is the AI-powered Operating System for Student Success
                that guides you from Grade 9 to your dream university—and
                beyond.
              </p>

              <p className="text-base text-foreground/40 max-w-lg leading-relaxed animate-slide-in-left opacity-0 delay-400">
                Discover who you are. Explore what&apos;s possible. Build your
                path. Become who you want to be.
              </p>


              <div className="flex flex-wrap gap-4 animate-slide-in-left opacity-0 delay-500">
                <Link
                  href="/careers"
                  className="btn-primary group"
                >
                  <span>Discover Careers</span>
                  <ArrowIcon />
                </Link>
                            
                <Link
                  href="#for-students"
                  className="btn-secondary group"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
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
                            
                  <span>Explore Your Journey</span>
                </Link>
              </div>

              
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 animate-slide-in-left opacity-0 delay-600">
                {[
                  "Personalized",
                  "4-Year Journey",
                  "Career + University",
                  "Built around you",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-foreground/45 transition-colors duration-300 hover:text-foreground/70"
                  >
                    <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <CheckIcon />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>


            <div className="relative order-1 lg:order-2 animate-slide-in-right opacity-0 delay-200">

              <div className="relative w-full aspect-square max-w-[620px] mx-auto">
                <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-accent-warm/10 blur-3xl animate-pulse-glow" />
                <div className="absolute inset-[8%] rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-[18%] rounded-full border border-accent/10 animate-[spin_24s_linear_infinite_reverse]" />
                <div className="absolute inset-[28%] rounded-full border border-accent-warm/10 animate-[spin_18s_linear_infinite]" />
                <div className="absolute top-[8%] left-1/2 w-2 h-2 rounded-full bg-primary/50 shadow-[0_0_15px_rgba(108,92,231,0.5)] animate-dot-pulse" />


                <div
                  className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-accent/60 shadow-[0_0_15px_rgba(0,206,201,0.5)] animate-dot-pulse"
                  style={{ animationDelay: "0.7s" }}
                />

                <div
                  className="absolute top-[35%] left-[7%] w-1.5 h-1.5 rounded-full bg-accent-warm/60 animate-dot-pulse"
                  style={{ animationDelay: "1.2s" }}
                />

                <div
                  className="relative w-full h-full transition-transform duration-700 ease-out"
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  }}
                >
                  <div className="animate-float w-full h-full group">
                    <Image
                      src="/3dboy.png"
                      alt="Novi — AI Mentor"
                      width={600}
                      height={600}
                      priority
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>


                {showChat && (
                  <div className="absolute -top-1 right-0 sm:-top-5 sm:right-0 z-20 animate-bounce-in">
                    <div className="chat-bubble max-w-[290px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">

                      <div className="flex items-start gap-3">

                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg">
                          <span className="text-white text-lg">👋</span>

                          <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white dark:border-[#1a1a3e]" />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-sm text-foreground">
                              Hi! I&apos;m Novi
                            </p>

                            <span className="text-[10px] text-green-500 font-medium">
                              Online
                            </span>
                          </div>

                          {showTyping ? (
                            <div className="flex items-center gap-1 py-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce" />
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:150ms]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce [animation-delay:300ms]" />
                            </div>
                          ) : (
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              I&apos;m here to help you discover your best
                              future.
                            </p>
                          )}
                        </div>
                      </div>

                      {!showTyping && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          <button
                            type="button"
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/10 transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                          >Explore careers</button>

                          <button
                            type="button"
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-accent/10 text-accent border border-accent/10 transition-all duration-200 hover:bg-accent/20 hover:scale-105"
                          >Find strengths
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}


                <div className="absolute top-[18%] left-[-5px] sm:left-[-20px] animate-float delay-600">
                  <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl">

                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
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
                        Interest discovered
                      </p>

                      <p className="text-[11px] text-foreground/50">
                        Technology + Problem Solving
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[10%] right-[-5px] sm:right-[-15px] animate-float delay-700">
                  <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-2xl">

                    <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center">
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
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground">
                        Goal updated
                      </p>

                      <p className="text-[11px] text-foreground/50">
                        Explore AI careers
                      </p>
                    </div>
                  </div>
                </div>


                <div className="absolute bottom-[12%] left-[2%] sm:left-[-10px] animate-float delay-500">
                  <div className="glass-card rounded-2xl px-4 py-3 shadow-xl transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1">

                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <span className="text-[10px] text-accent font-bold">
                          4Y
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-foreground">
                        Your journey
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {["9", "10", "11", "12"].map((grade, index) => (
                        <div
                          key={grade}
                          className="flex items-center"
                        >
                          <div
                            style={{
                              animationDelay: `${index * 150}ms`,
                            }}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold animate-bounce-in ${
                              index === 0
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {grade}
                          </div>

                          {index < 3 && (
                            <div className="w-3 h-px bg-primary/20" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[25%] right-[4%] hidden sm:block">
                  <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg animate-float delay-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-medium text-foreground/60">
                      Growing with you
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-y border-primary/20 py-3.5 overflow-hidden">
          <div className="absolute inset-0 marquee-shimmer pointer-events-none" />
          <div className="marquee relative z-10">

            <div className="marquee-track items-center">
              {[0, 1].map((set) => (
                <div key={set}
                  className="flex items-center shrink-0">
                  <span className="text-sm font-semibold text-primary pr-4">Personalized AI Mentor </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-dot-pulse shrink-0" />
                  <span className="text-sm font-semibold text-accent px-4">4-Year Journey</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-dot-pulse shrink-0" style={{ animationDelay: "0.3s" }}/>
                  <span className="text-sm font-semibold text-primary-light px-4">Career + University Guidance</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-warm/60 animate-dot-pulse shrink-0" style={{ animationDelay: "0.6s" }}/>
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
