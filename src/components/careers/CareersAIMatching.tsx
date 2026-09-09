"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Target,
  User,
  BookOpen,
  Zap,
  Flag,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const attributes = [
  { label: "Interests", icon: Heart, accent: "text-pink-500", chip: "border-pink-500/30 bg-pink-500/10" },
  { label: "Strengths", icon: Zap, accent: "text-amber-500", chip: "border-amber-500/30 bg-amber-500/10" },
  { label: "Personality", icon: User, accent: "text-purple-500", chip: "border-purple-500/30 bg-purple-500/10" },
  { label: "Subjects", icon: BookOpen, accent: "text-blue-500", chip: "border-blue-500/30 bg-blue-500/10" },
  { label: "Skills", icon: Target, accent: "text-emerald-500", chip: "border-emerald-500/30 bg-emerald-500/10" },
  { label: "Goals", icon: Flag, accent: "text-cyan-500", chip: "border-cyan-500/30 bg-cyan-500/10" },
  { label: "Experiences", icon: Briefcase, accent: "text-indigo-500", chip: "border-indigo-500/30 bg-indigo-500/10" },
];

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const MATCH = 94;

export default function CareersAIMatching() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      <div className="orb bottom-10 -left-40 w-[480px] h-[480px] bg-purple-500/[0.07]" />
      <div className="orb top-16 right-[-10%] w-[420px] h-[420px] bg-indigo-500/[0.06]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Left Column: Heading, attributes, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-5">
              {/* Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                AI Career Matching
              </div>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-foreground leading-[1.12] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Don&apos;t know what career you want?
                <br />
                <span className="text-gradient">That&apos;s okay.</span>
              </h2>

              <p className="text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed">
                Novi looks at who you are and finds careers that may actually
                fit you — not a generic list.
              </p>
            </div>

            {/* Attribute chips */}
            <div className="flex flex-wrap gap-2.5">
              {attributes.map((attr, idx) => {
                const Icon = attr.icon;
                return (
                  <motion.span
                    key={attr.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border ${attr.chip} font-semibold text-sm text-foreground/80`}
                  >
                    <Icon className={`w-4 h-4 ${attr.accent}`} />
                    {attr.label}
                  </motion.span>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/45 hover:-translate-y-0.5 group"
              >
                <span>Discover My Careers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-foreground/10 bg-surface/70 dark:bg-surface-elevated/40 backdrop-blur-sm hover:bg-surface text-foreground font-semibold text-sm transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Take the Career DNA Quiz
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Career DNA match visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative flex items-center justify-center py-6"
          >
            {/* Decorative ring */}
            <div className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-purple-500/10 animate-spin-slow hidden sm:block">
              <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-pink-500/50 blur-[1px]" />
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-[520px] rounded-[28px] gradient-border bg-white dark:bg-[#12112a] border border-black/10 dark:border-white/10 shadow-[0_25px_70px_rgba(15,15,35,0.16)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] p-6 sm:p-8 space-y-6">
              {/* Glow highlight */}
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between relative">
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                    Your Career DNA
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                    A match built around you, not a template.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Analysing
                </span>
              </div>

              {/* Pipeline steps */}
              <div className="flex items-center gap-2 relative">
                {["Your Inputs", "Novi AI", "Your Match"].map((step, idx) => (
                  <div key={step} className="flex items-center gap-2 flex-1">
                    <div
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border whitespace-nowrap ${
                        idx === 1
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-md shadow-purple-600/25"
                          : "bg-gray-50 dark:bg-white/[0.03] border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {step}
                    </div>
                    {idx < 2 && (
                      <div className="hidden sm:block flex-1 h-[2px] rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 flow-line" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Gauge + match summary */}
              <div className="grid sm:grid-cols-2 gap-5 items-center">
                {/* Gauge */}
                <div className="flex flex-col items-center gap-2.5">
                  <div className="relative w-36 h-36">
                    <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                      <circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        strokeWidth="10"
                        className="stroke-gray-100 dark:stroke-white/10"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r={RADIUS}
                        fill="none"
                        strokeWidth="10"
                        strokeLinecap="round"
                        stroke="url(#matchGradient)"
                        strokeDasharray={CIRCUMFERENCE}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        whileInView={{ strokeDashoffset: CIRCUMFERENCE * (1 - MATCH / 100) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6c5ce7" />
                          <stop offset="50%" stopColor="#00cec9" />
                          <stop offset="100%" stopColor="#fd79a8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                        {MATCH}%
                      </span>
                      <span className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wider">
                        Match
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-foreground/50 font-medium text-center">
                    Match confidence built from your profile
                  </p>
                </div>

                {/* Matched career card */}
                <div className="p-4 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-bold flex items-center justify-center shadow-md">
                      A
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                        AI Product Designer
                      </p>
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        You&apos;d love this
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["#Creative", "#Technical", "#Human-centered"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] border border-foreground/5 text-foreground/70 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${MATCH}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/50">
                      Explore career
                      <span className="w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}