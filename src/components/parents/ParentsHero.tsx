"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Check
} from "lucide-react";

export default function ParentsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Soft ambient background glow */}
      <div className="absolute top-12 left-1/3 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-purple-500/10 animate-spin-slow">
            <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-purple-500/50 blur-[1px]" />
          </div>
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              PARENT GUIDANCE WITH NOVI
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              For parents, <span className="text-purple-600 dark:text-purple-400">clarity.</span><br />
              For students,<br />
              <span className="text-foreground">independence.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed font-normal">
              Stay informed about your child&apos;s journey without taking over it.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 group"
              >
                <span>Explore Parent Dashboard</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/10 dark:border-white/15 bg-surface hover:bg-surface/80 text-foreground font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                See How Novi Works
              </Link>
            </div>

            {/* 3 Benefits Checkmarks */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-foreground/80">
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

          {/* Right Hero Graphic: Father & Daughter (Visible on Right) + Floating Dashboard Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7 relative flex items-center justify-start lg:justify-end py-6"
          >
            {/* Main Composition Container */}
            <div className="relative w-full max-w-[620px] flex items-center">

              {/* Floating White Telemetry Card (Positioned Left) */}
              <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] rounded-[28px] bg-white dark:bg-[#12112a] border border-black/10 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.14)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 sm:p-6 space-y-4">

                {/* Profile Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-purple-500/20 shadow-sm flex-shrink-0">
                      <Image
                        src="/riya-avatar.jpg"
                        alt="Riya"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-tight">Riya&apos;s Progress</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Grade 11 • Target: Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    <span>This Month</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>

                {/* 3 Metric Boxes */}
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Career Direction */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">Career<br />Direction</span>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">On Track</span>
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Strength */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">Profile<br />Strength</span>
                    <div className="mt-2 space-y-1">
                      <span className="text-sm font-extrabold text-gray-900 dark:text-white">78%</span>
                      <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-600 rounded-full w-[78%]" />
                      </div>
                    </div>
                  </div>

                  {/* University Readiness */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">University<br />Readiness</span>
                    <div className="mt-2 space-y-1">
                      <span className="text-sm font-extrabold text-gray-900 dark:text-white">71%</span>
                      <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full w-[71%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roadmap Progress */}
                <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-800 dark:text-gray-200 mb-1.5">
                    <span>Roadmap Progress</span>
                    <span className="text-gray-900 dark:text-white">68%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full w-[68%]" />
                  </div>
                </div>

                {/* Split Bottom: Focus & Novi Insight Card */}
                <div className="grid sm:grid-cols-12 gap-3 pt-1 items-stretch">

                  {/* Left: Focus List */}
                  <div className="sm:col-span-6 space-y-2 py-1">
                    <h5 className="text-[11px] font-extrabold text-gray-800 dark:text-gray-200">This Month&apos;s Focus</h5>
                    <div className="space-y-1.5 text-[11px] text-gray-700 dark:text-gray-300 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span className="truncate">Build research experience</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span className="truncate">Improve coding depth</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        <span className="truncate">Prepare for SAT</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Overlapping Novi Insight Card */}
                  <div className="sm:col-span-6 p-3 rounded-2xl bg-white dark:bg-[#1a183c] border border-purple-500/20 shadow-lg space-y-1.5 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-300 font-bold text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Novi Insight</span>
                    </div>
                    <p className="text-[10px] text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      Your child is showing a growing interest in technology and entrepreneurship.
                    </p>
                  </div>

                </div>

              </div>

              {/* Father & Daughter Cutout Image (Positioned visibly on the Right) */}
              <div className="block absolute -right-2 sm:right-2 md:-right-4 -bottom-20 lg:-right-6 top-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] h-[340px] sm:h-[420px] md:h-[460px] lg:h-[490px] z-20 pointer-events-none">
                <Image
                  src="/parents-daughter-tablet.png"
                  alt="Father and daughter using Novi"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
