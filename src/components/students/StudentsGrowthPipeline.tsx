"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  BookOpen,
  Activity,
  Trophy,
  Target,
  Compass,
} from "lucide-react";

const nodes = [
  { label: "Interests", icon: Heart, color: "from-purple-500 to-indigo-500", chip: "bg-purple-500/10" },
  { label: "Strengths", icon: Sparkles, color: "from-rose-500 to-pink-500", chip: "bg-rose-500/10" },
  { label: "Academics", icon: BookOpen, color: "from-emerald-500 to-teal-500", chip: "bg-emerald-500/10" },
  { label: "Activities", icon: Activity, color: "from-blue-500 to-cyan-500", chip: "bg-blue-500/10" },
  { label: "Achievements", icon: Trophy, color: "from-amber-500 to-orange-500", chip: "bg-amber-500/10" },
  { label: "Goals", icon: Target, color: "from-indigo-500 to-purple-500", chip: "bg-indigo-500/10" },
  { label: "Experiences", icon: Compass, color: "from-teal-500 to-emerald-500", chip: "bg-teal-500/10" },
];

export default function StudentsGrowthPipeline() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      <div className="orb -bottom-20 left-1/3 w-[480px] h-[480px] bg-purple-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Your Growth Engine
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi understands you<br className="sm:hidden" /> better{" "}
            <span className="text-gradient">over time.</span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Your interests, strengths, experiences and goals come together to
            create a profile that grows with you — and gets smarter over time.
          </p>
        </motion.div>

        {/* Pipeline Nodes Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl overflow-x-auto relative"
        >
          {/* Ambient inner glow */}
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          <div className="min-w-max px-2 sm:px-4 py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              {nodes.map((node, idx) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="flex items-center gap-2 sm:gap-4">
                    {/* Node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      className="flex flex-col items-center gap-2.5 group"
                    >
                      <div
                        className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${node.chip} border border-foreground/10 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-foreground/75 group-hover:text-foreground transition-colors" />
                        {/* color dot */}
                        <span
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-surface bg-gradient-to-tr ${node.color}`}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-foreground/75 text-center group-hover:text-foreground transition-colors">
                        {node.label}
                      </span>
                    </motion.div>

                    {/* Connector */}
                    {idx < nodes.length - 1 && (
                      <div className="flex items-center w-8 sm:w-14">
                        <div className="relative w-full h-[3px] rounded-full bg-foreground/10 overflow-hidden">
                          <div className="flow-line absolute inset-0" />
                        </div>
                        <span className="ml-1 hidden sm:block w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* End Node: Personalized Guidance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-2 sm:gap-4"
              >
                <div className="relative flex flex-col items-center gap-2 pl-1">
                  <div className="relative">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 blur-md opacity-50 animate-pulse" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-purple-500/20">
                      N
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-surface flex items-center justify-center">
                      <Sparkles className="w-2 h-2 text-white" />
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-gradient text-center whitespace-nowrap">
                    Personalized
                    <br />
                    Guidance
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}