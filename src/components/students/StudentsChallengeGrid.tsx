"use client";

import { motion } from "framer-motion";
import { Compass, Target, Box, Globe, ArrowRight, ArrowUpRight } from "lucide-react";

const possibilities = [
  {
    title: "Discover",
    description: "Find careers and possibilities you didn't know existed.",
    icon: Compass,
    accent: "text-emerald-600 dark:text-emerald-400",
    chip: "bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20",
    bar: "from-emerald-500 to-teal-500",
  },
  {
    title: "Plan",
    description: "Understand which subjects, skills and experiences can move you towards your goals.",
    icon: Target,
    accent: "text-purple-600 dark:text-purple-400",
    chip: "bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/20",
    bar: "from-purple-600 to-indigo-500",
  },
  {
    title: "Build",
    description: "Turn your interests into projects, achievements and experiences that matter.",
    icon: Box,
    accent: "text-blue-600 dark:text-blue-400",
    chip: "bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20",
    bar: "from-blue-500 to-cyan-500",
  },
  {
    title: "Explore",
    description: "Discover universities, courses and opportunities around the world.",
    icon: Globe,
    accent: "text-amber-600 dark:text-amber-400",
    chip: "bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50",
    glow: "group-hover:shadow-amber-500/20",
    bar: "from-amber-500 to-orange-500",
  },
];

export default function StudentsChallengeGrid() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="orb top-1/3 -left-40 w-[420px] h-[420px] bg-purple-500/[0.06]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Left Column: The Student Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-28"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              <SparkleDot />
              The Student Challenge
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need
              <br />
              all the answers.
            </h2>

            {/* Pain Points */}
            <div className="space-y-3 text-sm sm:text-base text-foreground/75 font-normal">
              {[
                "Not sure what career you want?",
                "Don't know which subjects to choose?",
                "Wondering which university is right for you?",
                "Don't know how to build a strong profile?",
              ].map((point, idx) => (
                <motion.p
                  key={point}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                  {point}
                </motion.p>
              ))}
            </div>

            {/* Handwritten Style Highlight */}
            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-gradient italic">
                That&apos;s exactly why Novi exists. ✨
              </p>
            </div>
          </motion.div>

          {/* Right Column: Possibilities 4 Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="flex items-end justify-between gap-4">
              <h3
                className="text-2xl sm:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore your possibilities
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50">
                4 pillars
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {possibilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className={`group relative p-6 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${item.glow}`}
                  >
                    {/* Top accent bar on hover */}
                    <div
                      className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r ${item.bar}`}
                    />
                    {/* Corner number */}
                    <span className="absolute top-5 right-6 text-2xl font-extrabold text-foreground/[0.07] group-hover:text-foreground/[0.14] transition-colors">
                      0{idx + 1}
                    </span>

                    <div className="space-y-4 relative">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-foreground/[0.02] ${item.chip}`}
                      >
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[-6deg]" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h4 className={`font-bold text-lg ${item.accent}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="pt-4 relative">
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 group-hover:text-foreground/90 transition-colors">
                        Learn more
                        <span className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SparkleDot() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9L12 2z" />
    </svg>
  );
}