"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Compass, 
  ChevronDown,
  ShieldCheck,
  Check
} from "lucide-react";

export default function ParentsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              PARENT GUIDANCE WITH NOVI
            </div>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              For parents, <span className="text-purple-600 dark:text-purple-400">clarity.</span><br />
              For students,<br />
              <span className="text-foreground">independence.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-foreground/70 max-w-lg leading-relaxed font-normal">
              Stay informed about your child&apos;s journey without taking over it.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/signin"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 group"
              >
                Explore Parent Dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-foreground/15 hover:border-foreground/30 bg-surface/50 hover:bg-surface/80 text-foreground font-semibold text-sm transition-all duration-300 backdrop-blur-md"
              >
                See How Novi Works
              </Link>
            </div>

            {/* 3 Benefits Checkmarks */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Stay informed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Understand progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>Support without pressure</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic & Interactive Telemetry Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Background Family Photo Backdrop */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-foreground/10 bg-surface/40 backdrop-blur-xl">
              <div className="relative w-full h-[480px] sm:h-[520px]">
                <Image
                  src="/parents-hero.jpg"
                  alt="Parents and student exploring educational roadmap"
                  fill
                  priority
                  className="object-cover object-top opacity-30 dark:opacity-20 transition-opacity"
                />
                
                {/* Gradient overlay on top of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Floating Telemetry Card on Top */}
                <div className="absolute inset-x-4 top-6 bottom-6 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-surface/90 dark:bg-[#11102b]/95 backdrop-blur-2xl border border-foreground/10 shadow-2xl overflow-y-auto">
                  
                  {/* Card Header: Student Profile */}
                  <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-purple-500/30">
                        <span>R</span>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm sm:text-base text-foreground">Riya&apos;s Progress</h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-foreground/60 font-medium">Grade 11 • Target: Computer Science</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-foreground/5 border border-foreground/10 text-xs font-semibold text-foreground/80 cursor-pointer hover:bg-foreground/10 transition-colors">
                      <span>This Month</span>
                      <ChevronDown className="w-3.5 h-3.5 text-foreground/50" />
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-4">
                    {/* Career Direction */}
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.08] flex flex-col justify-between">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-foreground/60 leading-tight">Career Direction</span>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">On Track</span>
                        <Target className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                    </div>

                    {/* Profile Strength */}
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.08] flex flex-col justify-between">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-foreground/60 leading-tight">Profile Strength</span>
                      <div className="mt-2">
                        <span className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400">78%</span>
                        <div className="mt-1 h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600 rounded-full w-[78%]" />
                        </div>
                      </div>
                    </div>

                    {/* University Readiness */}
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-foreground/[0.08] flex flex-col justify-between">
                      <span className="text-[10px] sm:text-[11px] font-semibold text-foreground/60 leading-tight">University Readiness</span>
                      <div className="mt-2">
                        <span className="text-sm sm:text-base font-bold text-cyan-600 dark:text-cyan-400">71%</span>
                        <div className="mt-1 h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 rounded-full w-[71%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roadmap Progress Bar */}
                  <div className="p-3.5 rounded-xl bg-foreground/[0.03] border border-foreground/[0.08] mb-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-foreground/80 mb-2">
                      <span>Roadmap Progress</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">68%</span>
                    </div>
                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full w-[68%]" />
                    </div>
                  </div>

                  {/* Bottom Split: Focus & Novi Insight */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {/* Left: Focus items */}
                    <div className="p-3 rounded-xl bg-foreground/[0.02] border border-foreground/[0.06] space-y-2">
                      <h5 className="text-[11px] font-bold text-foreground/70 uppercase tracking-wider">This Month&apos;s Focus</h5>
                      <div className="space-y-1.5 text-xs text-foreground/80">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="truncate">Build research experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="truncate">Improve coding depth</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                          <span className="truncate">Prepare for SAT</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Novi Insight Card */}
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs space-y-1.5 flex flex-col justify-center">
                      <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-300 font-bold text-[11px]">
                        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                        <span>Novi Insight</span>
                      </div>
                      <p className="text-foreground/75 leading-relaxed text-[11px]">
                        Your child is showing a growing interest in technology and entrepreneurship.
                      </p>
                    </div>
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
