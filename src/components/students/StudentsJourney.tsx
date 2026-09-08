"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Compass, TrendingUp, GraduationCap, ArrowRight } from "lucide-react";

const journeyStages = [
  {
    grade: "Grade 9",
    action: "Discover Yourself",
    icon: User,
    color: "text-purple-600 bg-purple-500/10 border-purple-500/20",
  },
  {
    grade: "Grade 10",
    action: "Explore & Experiment",
    icon: Compass,
    color: "text-indigo-600 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    grade: "Grade 11",
    action: "Build Your Profile",
    icon: TrendingUp,
    color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    grade: "Grade 12",
    action: "Apply with Confidence",
    icon: GraduationCap,
    color: "text-rose-600 bg-rose-500/10 border-rose-500/20",
  },
];

export default function StudentsJourney() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
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
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your 4-Year Journey
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                From discovering your interests to building your profile and applying to your dream university, Novi is with you at every stage.
              </p>
            </div>

            <div>
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/25 group"
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
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl overflow-x-auto"
          >
            <div className="flex items-center justify-between min-w-max gap-3 sm:gap-4 py-2">
              {journeyStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.grade} className="flex items-center gap-3 sm:gap-4">
                    {/* Node Card */}
                    <div className="flex flex-col items-center text-center space-y-2.5 p-4 rounded-2xl bg-foreground/[0.02] border border-foreground/5 min-w-[130px]">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm ${stage.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{stage.grade}</h4>
                        <p className="text-[11px] text-foreground/60 font-medium">{stage.action}</p>
                      </div>
                    </div>

                    {/* Connecting Arrow */}
                    {idx < journeyStages.length - 1 && (
                      <div className="text-foreground/30">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
