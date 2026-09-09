"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Target,
} from "lucide-react";

const stats = [
  { value: "10,000+", label: "Students guided" },
  { value: "5,000+", label: "Universities explored" },
  { value: "4.9/5", label: "Average rating" },
];

export default function StudentsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Dot-grid backdrop + ambient orbs */}
      <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,black,transparent)] pointer-events-none" />
      <div className="orb top-12 left-[10%] w-[600px] h-[600px] bg-purple-500/10" />
      <div className="orb top-32 right-[5%] w-[520px] h-[520px] bg-indigo-500/10" />
      <div className="orb bottom-0 left-1/3 w-[400px] h-[400px] bg-pink-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Built for your future
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.08]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need to
              <br />
              have it all{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-gradient">figured out.</span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-purple-500/50 dark:text-purple-400/50"
                  viewBox="0 0 220 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 3 150 2 217 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed font-normal">
              Novi helps you discover what you&apos;re good at, explore
              what&apos;s possible, and build a path toward your future.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/45 hover:-translate-y-0.5 group"
              >
                <span>Meet Novi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-foreground/10 bg-surface/70 dark:bg-surface-elevated/40 backdrop-blur-sm hover:bg-surface text-foreground font-semibold text-sm transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                Explore Student Dashboard
              </Link>
            </div>

            {/* Value Checkmarks */}
            <div className="pt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm font-medium text-foreground/80">
              {[
                "Personalized AI Mentor",
                "4-Year Journey",
                "Career + University Guidance",
                "Built around you",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Trust stats strip */}
            <div className="pt-3 flex items-center divide-x divide-foreground/10 border-t border-foreground/10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0">
                  <p className="text-base sm:text-lg font-extrabold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-foreground/50 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Graphic: Student Mascot + Floating Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 relative flex items-center justify-center lg:justify-end py-8"
          >
            {/* Top Annotation */}
            <div className="absolute -top-2 right-4 lg:right-10 hidden sm:flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-xs font-bold italic tracking-wide z-30">
              <span>Big dreams. Better guidance.</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            {/* Decorative gradient ring */}
            <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-purple-500/10 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-purple-500/50 blur-[1px]" />
            </div>

            {/* Main Composition Wrapper */}
            <div className="relative w-full max-w-[660px] flex items-center justify-center lg:justify-end">

              {/* Floating Telemetry Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="relative z-10 flex-1 min-w-0 max-w-[420px] sm:max-w-[500px] rounded-[28px] gradient-border bg-white dark:bg-[#12112a] border border-black/10 dark:border-white/10 shadow-[0_25px_70px_rgba(15,15,35,0.16)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] p-5 sm:p-6 space-y-4"
              >
                {/* Glow highlight */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Profile Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5 relative">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-md flex-shrink-0 ring-1 ring-purple-500/10">
                      <Image
                        src="/riya-avatar.jpg"
                        alt="Riya"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-tight">
                        Riya Sharma
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                        Grade 11 • Target: Computer Science
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-700 dark:text-gray-300">
                    <span>This Month</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>

                {/* 3 Metric Boxes */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">
                      Career
                      <br />
                      Direction
                    </span>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        On Track
                      </span>
                      <Target className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">
                      Profile
                      <br />
                      Strength
                    </span>
                    <div className="mt-2 space-y-1">
                      <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                        78%
                      </span>
                      <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full w-[78%]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-tight">
                      University
                      <br />
                      Readiness
                    </span>
                    <div className="mt-2 space-y-1">
                      <span className="text-sm font-extrabold text-gray-900 dark:text-white">
                        71%
                      </span>
                      <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full w-[71%]" />
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
                    <div className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-full w-[68%]" />
                  </div>
                </div>

                {/* Today's Mission Checklist */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[11px] font-extrabold text-gray-800 dark:text-gray-200">
                      Today&apos;s Mission
                    </h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400">
                      3/4 done
                    </span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-gray-700 dark:text-gray-300 font-medium">
                    {[
                      { label: "Complete Career Quiz", done: true },
                      { label: "Explore 3 Universities", done: true },
                      { label: "Add Your Coding Project", done: false },
                      { label: "Finish Your Weekly Goal", done: true },
                    ].map((task) => (
                      <div key={task.label} className="flex items-center gap-1.5">
                        {task.done ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-purple-400/60 flex-shrink-0" />
                        )}
                        <span className={task.done ? "" : "opacity-60"}>
                          {task.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating 3D Avatar — Bottom Right of the Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-6 sm:-bottom-30 right-0 sm:-right-4 z-30 w-[120px] h-[120px] sm:w-[270px] sm:h-[270px] pointer-events-none animate-float-slow"
                >
                  <Image
                    src="/student-mascot-girl.png"
                    alt="Novi Student Avatar"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_12px_40px_rgba(139,92,246,0.35)]"
                  />
                </motion.div>
              </motion.div>

              {/* Floating AI Mentor Badge */}


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
