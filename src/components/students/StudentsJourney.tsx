"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Compass,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCheck,
} from "lucide-react";

const journeyStages = [
  {
    grade: "Grade 9",
    action: "Discover Yourself",
    description: "Find your interests and build a Career DNA.",
    icon: User,
    color: "from-purple-500 to-indigo-600",
    ring: "ring-purple-500/30",
    dot: "bg-purple-500",
  },
  {
    grade: "Grade 10",
    action: "Explore & Experiment",
    description: "Try subjects, activities and possible paths.",
    icon: Compass,
    color: "from-indigo-500 to-blue-600",
    ring: "ring-indigo-500/30",
    dot: "bg-indigo-500",
  },
  {
    grade: "Grade 11",
    action: "Build Your Profile",
    description: "Ship projects, achievements and experience.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-500/30",
    dot: "bg-emerald-500",
  },
  {
    grade: "Grade 12",
    action: "Apply with Confidence",
    description: "Target universities and craft strong applications.",
    icon: GraduationCap,
    color: "from-rose-500 to-pink-600",
    ring: "ring-rose-500/30",
    dot: "bg-rose-500",
  },
];

export default function StudentsJourney() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="orb -top-20 right-[15%] w-[420px] h-[420px] bg-purple-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase mb-4">
                The Path
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your 4-Year<br />
                <span className="text-gradient">journey.</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                From discovering your interests to building your profile and
                applying to your dream university, Novi is with you at every
                stage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/15 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                <CheckCheck className="w-4 h-4" />
                <span>Milestones unlocked</span>
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Every stage has clear milestones so you always know what&apos;s
                next — no guesswork.
              </p>
            </div>

            <div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/25 hover:-translate-y-0.5 group"
              >
                <span>See the Full Journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 4 Journey Nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 overflow-x-hidden p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl overflow-x-auto"
          >
            <div className="min-w-max px-2 sm:px-4 py-4 relative overflow-x-hidden">
              {/* Gradient connector line */}
              <div className="flow-line absolute left-10 right-10 top-[52px] h-[3px] rounded-full opacity-40" />

              <div className="relative flex items-start justify-between gap-3 sm:gap-6 overflow-x-hidden">
                {journeyStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.grade}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.12 }}
                      className="group flex flex-col items-center text-center w-[150px] sm:w-[170px]"
                    >
                      {/* Node icon */}
                      <div className="relative z-10">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${stage.color} text-white flex items-center justify-center shadow-lg ring-4 ${stage.ring} group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface border border-foreground/10 text-foreground text-[10px] font-extrabold flex items-center justify-center shadow-sm">
                          {idx + 1}
                        </span>
                      </div>

                      {/* Label card */}
                      <div className="mt-4 w-full p-3 rounded-2xl bg-foreground/[0.02] border border-foreground/5 group-hover:border-foreground/15 group-hover:bg-surface dark:group-hover:bg-surface-elevated transition-colors">
                        <h4 className="font-bold text-sm text-foreground">
                          {stage.grade}
                        </h4>
                        <p className="text-[11px] text-foreground/60 font-medium mt-0.5">
                          {stage.action}
                        </p>
                        <p className="text-[10px] text-foreground/45 mt-1 leading-snug">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Outcome pill */}
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-purple-600/25">
                  <GraduationCap className="w-4 h-4" />
                  Dream University, unlocked
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
