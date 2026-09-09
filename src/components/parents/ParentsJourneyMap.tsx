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
  ArrowRight 
} from "lucide-react";

const nodes = [
  { label: "Interests", icon: Heart, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
  { label: "Strengths", icon: Sparkles, color: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
  { label: "Academics", icon: BookOpen, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Activities", icon: Activity, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  { label: "Achievements", icon: Trophy, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { label: "Goals", icon: Target, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  { label: "Experiences", icon: Compass, color: "text-teal-500 bg-teal-500/10 border-teal-500/20" },
];

export default function ParentsJourneyMap() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Novi sees the journey, not just the grades.
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Novi understands how these pieces connect over time—giving your child guidance that becomes more personal as their journey grows.
            </p>
          </motion.div>

          {/* Right Pipeline Nodes */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl overflow-x-auto"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-max py-2">
              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm transition-transform hover:scale-110 ${node.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-foreground/75 text-center">
                        {node.label}
                      </span>
                    </div>

                    {/* Arrow connecting to next */}
                    <div className="text-foreground/30 px-0.5 mb-5">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}

              {/* End Node: Personalized Guidance */}
              <div className="flex flex-col items-center gap-2 pl-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/30 ring-4 ring-purple-500/20 animate-pulse">
                  N
                </div>
                <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 text-center whitespace-nowrap">
                  Personalized<br />Guidance
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
