"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Home,
  Compass,
  GraduationCap,
  Route,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  Lock,
} from "lucide-react";

export default function StudentsDashboardPreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      <div className="orb -top-10 left-[10%] w-[420px] h-[420px] bg-purple-500/[0.08]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive High-Fidelity Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              {/* Halo glow behind mockup */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/15 via-transparent to-pink-500/10 rounded-[36px] blur-2xl" />

              <div className="relative rounded-3xl bg-surface dark:bg-[#100e28] border border-foreground/10 shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-foreground/10 bg-foreground/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 max-w-[260px] mx-auto rounded-lg bg-foreground/[0.05] border border-foreground/10 px-3 py-1.5">
                    <Lock className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    <span className="text-[10px] text-foreground/60 font-medium truncate">
                      app.novi.ai/dashboard
                    </span>
                  </div>
                  <span className="w-0 sm:w-6" />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Mini Sidebar */}
                    <div className="col-span-3 border-r border-foreground/10 pr-3 space-y-4 hidden sm:block">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-foreground/10">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold flex items-center justify-center text-[10px]">
                          N
                        </div>
                        <span className="font-bold text-xs text-foreground">
                          Novi
                        </span>
                      </div>

                      <div className="space-y-1 text-[11px] font-medium text-foreground/70">
                        {[
                          { icon: Home, label: "Home", active: true },
                          { icon: Compass, label: "Careers" },
                          { icon: GraduationCap, label: "Universities" },
                          { icon: Route, label: "Roadmap" },
                          { icon: MessageSquare, label: "Chat" },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.label}
                              className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors ${
                                item.active
                                  ? "bg-gradient-to-r from-purple-500/15 to-pink-500/10 text-purple-600 dark:text-purple-400 font-bold"
                                  : "hover:bg-foreground/5"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              <span>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-4 border-t border-foreground/10 flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/30">
                          <Image
                            src="/riya-avatar.jpg"
                            alt="Riya"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[10px] truncate text-foreground">
                            Riya
                          </p>
                          <p className="text-[9px] text-foreground/50 truncate">
                            Grade 11
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Dashboard Area */}
                    <div className="col-span-12 sm:col-span-9 space-y-4">
                      {/* Greeting */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-foreground leading-snug">
                            Good morning, Riya! 👋
                          </h4>
                          <p className="text-[11px] text-foreground/60">
                            Here&apos;s what&apos;s next for your journey.
                          </p>
                        </div>
                      </div>

                      {/* Missions & Strength Row */}
                      <div className="grid sm:grid-cols-12 gap-3">
                        {/* Today's Mission */}
                        <div className="sm:col-span-7 p-3.5 rounded-2xl bg-foreground/[0.03] border border-foreground/10 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-foreground/80">
                              Today&apos;s Mission
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400">
                              3/4 completed
                            </span>
                          </div>

                          <div className="space-y-1.5 text-[11px] text-foreground/75 font-medium">
                            {[
                              { label: "Complete Career Quiz", done: true },
                              { label: "Explore 3 Universities", done: true },
                              { label: "Add Your Coding Project", done: false },
                              { label: "Finish Your Weekly Goal", done: true },
                            ].map((task) => (
                              <div
                                key={task.label}
                                className="flex items-center gap-2"
                              >
                                {task.done ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <div className="w-3.5 h-3.5 rounded border-2 border-dashed border-purple-400/60 flex items-center justify-center" />
                                )}
                                <span className={task.done ? "" : "opacity-55"}>
                                  {task.label}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden mt-2">
                            <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full w-3/4" />
                          </div>
                        </div>

                        {/* Profile Strength Circle */}
                        <div className="sm:col-span-5 p-3.5 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex flex-col items-center justify-center text-center space-y-2">
                          <span className="text-[10px] font-bold text-foreground/60 uppercase">
                            Your Profile
                          </span>

                          <div className="relative w-16 h-16 flex items-center justify-center">
                            <svg
                              className="w-full h-full transform -rotate-90"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                className="stroke-foreground/10"
                                strokeWidth="10"
                                fill="transparent"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                className="stroke-purple-600"
                                strokeWidth="10"
                                strokeDasharray={251.2}
                                strokeDashoffset={251.2 * 0.22}
                                strokeLinecap="round"
                                fill="transparent"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-sm font-extrabold text-foreground">
                                78%
                              </span>
                              <span className="text-[7px] text-emerald-500 font-bold">
                                +5% this wk
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap justify-center gap-1">
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 font-bold">
                              #Analytical
                            </span>
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 font-bold">
                              #Leader
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Next Up Card */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-600/15 to-indigo-500/10 border border-purple-500/25 flex items-center justify-between gap-3 group-hover:border-purple-500/40">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-purple-600 dark:text-purple-300 uppercase tracking-wider">
                            Next Up
                          </span>
                          <p className="text-xs font-semibold text-foreground">
                            University Match: Find programs that fit your goals
                          </p>
                        </div>
                        <button className="px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-[11px] hover:bg-purple-700 transition-colors flex-shrink-0">
                          Explore →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 left-6 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-[#1a183c] border border-purple-500/20 shadow-xl animate-float"
              >
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-[11px] font-bold text-gray-800 dark:text-white">
                  Personalized AI Playbook
                </span>
              </motion.div>

          
            </div>
          </motion.div>

          {/* Right Column: Dashboard Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase mb-4">
                Product Tour
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your personalized
                <br />
                <span className="text-gradient">dashboard.</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Get clear next steps, track your progress, and stay on top of
                your goals — all in one place.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                {
                  label: "Career DNA & profile strength",
                  sub: "Know where you stand",
                },
                {
                  label: "Goals & roadmap",
                  sub: "Always know the next step",
                },
                {
                  label: "Upcoming activities",
                  sub: "Never miss a milestone",
                },
                {
                  label: "AI chat with Novi",
                  sub: "Personalized answers, anytime",
                },
                {
                  label: "Notifications & more",
                  sub: "Progress without pressure",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-surface/50 dark:bg-surface-elevated/30 border border-foreground/5 hover:border-purple-500/25 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-foreground/55">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold text-gradient italic">
                Your journey, all in one place. ✨
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}