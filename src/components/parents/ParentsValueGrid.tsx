"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Sparkles, 
  HelpCircle,
  Compass,
  Star,
  GraduationCap,
  Layers,
  Calendar,
  Award,
  Zap
} from "lucide-react";

export default function ParentsValueGrid() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Parent Desires & Questions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You want to help.<br />
              <span className="text-foreground/90">But you don&apos;t want</span><br />
              to take over.
            </h2>

            <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
              As a parent, you want to know:
            </p>

            <div className="space-y-4">
              {[
                "Is my child on the right path?",
                "Are they making progress?",
                "What should they focus on next?",
                "How can I help without creating pressure?",
              ].map((question, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground/80">
                    {question}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                Novi gives you clarity. <span>💜</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <h3 
              className="text-2xl sm:text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything you need to understand their journey.
            </h3>

            <div className="grid sm:grid-cols-3 gap-5">
              
              {/* Card 1: Progress */}
              <div className="p-6 rounded-2xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground">Progress</h4>
                </div>

                <p className="text-xs text-foreground/60 leading-relaxed min-h-[36px]">
                  See how your child is progressing towards their goals.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-foreground/80 border-t border-foreground/5">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span>Career Direction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span>Profile Strength</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span>University Readiness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span>Roadmap Progress</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Goals */}
              <div className="p-6 rounded-2xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground">Goals</h4>
                </div>

                <p className="text-xs text-foreground/60 leading-relaxed min-h-[36px]">
                  Understand what your child is working towards.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-foreground/80 border-t border-foreground/5">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[10px]">
                      ★
                    </div>
                    <span>Career Goals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[10px]">
                      ★
                    </div>
                    <span>University Goals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[10px]">
                      ★
                    </div>
                    <span>Current Priorities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[10px]">
                      ★
                    </div>
                    <span>Monthly Focus</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Novi's Recommendations */}
              <div className="p-6 rounded-2xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground">Novi&apos;s Recommendations</h4>
                </div>

                <p className="text-xs text-foreground/60 leading-relaxed min-h-[36px]">
                  Understand what Novi recommends and why.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-foreground/80 border-t border-foreground/5">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px]">
                      ❖
                    </div>
                    <span>Next Steps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px]">
                      ❖
                    </div>
                    <span>Development Areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px]">
                      ❖
                    </div>
                    <span>Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px]">
                      ❖
                    </div>
                    <span>Important Milestones</span>
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
