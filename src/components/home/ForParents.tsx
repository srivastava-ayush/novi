"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowUpRight, TrendingUp, Sparkles, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Novi helped my son discover high-impact CS research tracks we had no idea existed. His confidence skyrocketed.",
    author: "Aarav Sharma",
    role: "Parent of Grade 11 Student",
    metric: "Stanford Applicant",
  },
  {
    quote: "I used to constantly check up on deadlines. Now I just open Novi once a week to see green checkmarks. Complete peace of mind.",
    author: "Priya Menon",
    role: "Parent of Grade 12 Student",
    metric: "100% On-Track",
  },
  {
    quote: "The clarity Novi provides to families makes our counseling sessions 10x more productive and goal-oriented.",
    author: "Dr. Marcus Vance",
    role: "Director of College Counseling",
    metric: "Partner School",
  },
];

const focusGoals = [
  { title: "AI Research Paper Draft", status: "In Progress", category: "Academic" },
  { title: "Competitive Algorithmic Training", status: "Completed", category: "Skills" },
  { title: "SAT Mathematics Refinement", status: "Scheduled", category: "Testing" },
];

function ParentHubCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-3xl border border-foreground/10 bg-surface/40 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl transition-shadow duration-500"
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

export default function ForParents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  const [activeFocus, setActiveFocus] = useState<number | null>(0);
  
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const handleNext = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="for-parents" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10 space-y-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" /> Parent Guidance System
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              For parents, <span className="text-cyan-400">absolute clarity.</span>
              <br />
              For students, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">total independence.</span>
            </h2>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
              Stay fully informed without micromanaging. Novi provides real-time telemetry into your child&apos;s growth, university alignment, and key milestones.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/parent-dashboard"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-xl shadow-indigo-600/20 group"
              >
                Explore Parent Dashboard
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5"
          >
            <ParentHubCard>
              <div className="flex items-center justify-between pb-6 border-b border-foreground/10 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/25">
                    R
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">Riya&apos;s Profile Hub</h3>
                    <p className="text-xs text-foreground/50 font-medium">Grade 11 • Target CS 2027</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <TrendingUp className="w-3.5 h-3.5" /> On Track
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-background/30 border border-white/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Profile Strength</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-indigo-400">78%</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">+4% this wk</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "78%" } : {}}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      className="h-full bg-indigo-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-background/30 border border-white/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Uni Readiness</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-cyan-400">71%</span>
                    <span className="text-[10px] text-cyan-400 font-semibold">On Schedule</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "71%" } : {}}
                      transition={{ duration: 1.2, delay: 0.6 }}
                      className="h-full bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Active Monthly Objectives</p>
                {focusGoals.map((goal, idx) => (
                  <div
                    key={goal.title}
                    onClick={() => setActiveFocus(idx)}
                    className={`cursor-pointer flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                      activeFocus === idx
                        ? "bg-indigo-500/10 border-indigo-500/40"
                        : "bg-background/20 border-white/5 hover:border-foreground/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          goal.status === "Completed" ? "text-emerald-400" : "text-indigo-400"
                        }`}
                      />
                      <span className="text-xs font-medium">{goal.title}</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-foreground/60 px-2 py-0.5 rounded bg-white/5">
                      {goal.category}
                    </span>
                  </div>
                ))}
              </div>
            </ParentHubCard>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by students, loved by parents, preferred by schools.
          </motion.h3>

          <div className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[280px] flex items-center justify-center perspective-1000">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, idx) => {
                  const offset = (idx - testimonialIndex + testimonials.length) % testimonials.length;
                  const position = offset === 0 ? 0 : offset === 1 ? 1 : -1;
                  const isActive = position === 0;

                  return (
                    <motion.div
                      key={idx}
                      className="absolute w-full max-w-md"
                      initial={{ opacity: 0, x: position * 200, scale: 0.8, zIndex: 0 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4, 
                        x: position * 250, 
                        scale: isActive ? 1 : 0.85,
                        zIndex: isActive ? 10 : 0,
                        rotateY: position * -15,
                      }}
                      exit={{ opacity: 0, x: position * -200, scale: 0.8, zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative rounded-3xl border border-black/5 dark:border-foreground/10 bg-background/80 backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-b ${isActive ? 'from-indigo-500/20' : 'from-indigo-500/5'} to-transparent blur-2xl pointer-events-none transition-all duration-700`} />
                        
                        <span className="text-6xl font-serif text-indigo-400/30 leading-none mb-4 block">“</span>
                        <p className="text-foreground/80 leading-relaxed mb-8 h-24 overflow-hidden">
                          {testimonial.quote}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <p className="font-bold text-foreground/90 text-sm">
                              - {testimonial.author}
                            </p>
                            <p className="text-xs text-foreground/50 mt-1">{testimonial.role}</p>
                          </div>
                          <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                            {testimonial.metric}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="group w-12 h-12 rounded-full border border-indigo-500/20 text-indigo-400 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === testimonialIndex ? 'w-8 bg-indigo-400' : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group w-12 h-12 rounded-full border border-indigo-500/20 text-indigo-400 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}