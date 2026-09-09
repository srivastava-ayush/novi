"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeftRight } from "lucide-react";

export default function ParentsBalanceModel() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You stay informed.<br />
              <span className="text-purple-600 dark:text-purple-400">They stay in control.</span>
            </h2>
          </motion.div>

          {/* Right Synergy Diagram */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl"
          >
            <div className="grid sm:grid-cols-11 gap-4 items-center">
              
              {/* Parent Box */}
              <div className="sm:col-span-4 p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 space-y-3">
                <div className="flex items-center justify-between border-b border-purple-500/15 pb-2">
                  <h4 className="font-bold text-base text-purple-600 dark:text-purple-400">Parent</h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span>Clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span>Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span>Insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span>Guidance</span>
                  </div>
                </div>
              </div>

              {/* Central Shared Understanding Connector */}
              <div className="sm:col-span-3 flex flex-col items-center justify-center py-4 text-center">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600/15 to-indigo-600/15 border-2 border-dashed border-purple-500/40 flex flex-col items-center justify-center p-2 shadow-inner">
                  <span className="w-6 h-6 rounded-lg bg-purple-600 text-white font-bold text-xs flex items-center justify-center mb-1">
                    N
                  </span>
                  <span className="text-[9px] font-bold text-purple-600 dark:text-purple-300 leading-none">
                    Shared Understanding
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-purple-500/60">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Student Box */}
              <div className="sm:col-span-4 p-5 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 space-y-3">
                <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2">
                  <h4 className="font-bold text-base text-cyan-600 dark:text-cyan-400">Student</h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>Independence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>Exploration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>Decisions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span>Growth</span>
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
