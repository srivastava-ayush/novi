"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, Sparkles } from "lucide-react";

export default function ParentsMonthlyFocus() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Know what matters right now.
          </h2>
        </motion.div>

        {/* Unified 3-Part Focus & Insight Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-foreground/10 bg-surface/80 dark:bg-surface-elevated/50 backdrop-blur-xl p-6 sm:p-8 shadow-xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Part 1: This Month's Focus Tasks & Progress Bars */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                This Month&apos;s Focus
              </h3>

              <div className="space-y-4">
                {/* Task 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>Build research experience</span>
                    </div>
                    <span className="font-bold text-foreground/80">80%</span>
                  </div>
                  <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-purple-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Task 2 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>Improve coding depth</span>
                    </div>
                    <span className="font-bold text-foreground/80">60%</span>
                  </div>
                  <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-purple-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Task 3 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>Prepare for SAT</span>
                    </div>
                    <span className="font-bold text-foreground/80">40%</span>
                  </div>
                  <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-purple-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Circular Progress Meter */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center p-4 border-y lg:border-y-0 lg:border-x border-foreground/10">
              <span className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-3">
                Progress
              </span>

              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* SVG Ring Meter */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-foreground/10"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-purple-600 dark:stroke-purple-400"
                    strokeWidth="8"
                    strokeDasharray={251.2}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 * (1 - 0.67) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    fill="transparent"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-extrabold text-foreground">67%</span>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-foreground/60 mt-3">
                2/3 completed
              </span>
            </div>

            {/* Part 3: Novi's Parent Insight */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-3">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300">
                <Lightbulb className="w-5 h-5 text-purple-500" />
                <h4 className="font-bold text-sm sm:text-base">Novi&apos;s Parent Insight</h4>
              </div>

              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                Your child is showing a growing interest in technology and entrepreneurship.
              </p>

              <p className="text-xs text-foreground/65 leading-relaxed">
                Over the next few months, we recommend focusing on meaningful technical experiences rather than simply collecting certificates.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
