"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Compass,
  Heart,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

const factors = [
  {
    label: "Interests",
    icon: Compass,
  },
  {
    label: "Strengths",
    icon: Sparkles,
  },
  {
    label: "Personality",
    icon: UserRound,
  },
  {
    label: "Subjects",
    icon: Brain,
  },
  {
    label: "Skills",
    icon: Target,
  },
  {
    label: "Goals",
    icon: Heart,
  },
];

export default function CareerMatch() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 sm:p-12 lg:p-16">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              AI Career Matching
            </span>
          </div>

          <h2
            className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Don't know what career you want?
            <span className="gradient-text"> That's okay.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/50">
            Novi looks beyond a single test. It brings together different
            parts of who you are to discover careers that could genuinely
            fit you.
          </p>

          <button className="btn-primary group mt-8">
            <span>Discover My Careers</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative mx-auto max-w-md">
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-background/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                <Sparkles className="h-7 w-7" />
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {factors.map((factor, index) => {
                const Icon = factor.icon;

                return (
                  <motion.div
                    key={factor.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-black/5 bg-background/60 px-4 py-3 backdrop-blur-sm dark:border-white/5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="text-xs font-medium text-foreground/50">
                      {factor.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 flex justify-center">
              <div className="rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                ↓
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Career matches
              </span>

              <div className="mt-2 text-sm font-medium text-foreground/70">
                Built around you
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}