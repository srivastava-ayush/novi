"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Sparkles, 
  Home, 
  Compass, 
  GraduationCap, 
  User, 
  Route, 
  MessageSquare,
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function StudentsDashboardPreview() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive High-Fidelity Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl bg-surface dark:bg-[#100e28] border border-foreground/10 shadow-2xl overflow-hidden p-4 sm:p-6"
          >
            <div className="grid grid-cols-12 gap-4">
              
              {/* Mini Sidebar */}
              <div className="col-span-3 border-r border-foreground/10 pr-3 space-y-4 hidden sm:block">
                {/* Logo */}
                <div className="flex items-center gap-1.5 pb-2 border-b border-foreground/10">
                  <div className="w-6 h-6 rounded-md bg-purple-600 text-white font-bold flex items-center justify-center text-[10px]">
                    N
                  </div>
                  <span className="font-bold text-xs text-foreground">Novi</span>
                </div>

                {/* Nav items */}
                <div className="space-y-1 text-[11px] font-medium text-foreground/70">
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-foreground/5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Careers</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-foreground/5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Universities</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-foreground/5">
                    <User className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-foreground/5">
                    <Route className="w-3.5 h-3.5" />
                    <span>Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-foreground/5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat</span>
                  </div>
                </div>

                {/* Bottom User Profile */}
                <div className="pt-4 border-t border-foreground/10 flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="/riya-avatar.jpg" alt="Riya" fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[10px] truncate text-foreground">Riya</p>
                    <p className="text-[9px] text-foreground/50 truncate">Grade 11</p>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="col-span-12 sm:col-span-9 space-y-4">
                
                {/* Greeting */}
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-foreground leading-snug">
                    Good morning, Riya! 👋
                  </h4>
                  <p className="text-[11px] text-foreground/60">
                    Here&apos;s what&apos;s next for your journey.
                  </p>
                </div>

                {/* Missions & Strength Row */}
                <div className="grid sm:grid-cols-12 gap-3">
                  
                  {/* Today's Mission (8 cols) */}
                  <div className="sm:col-span-7 p-3.5 rounded-2xl bg-foreground/[0.03] border border-foreground/10 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-foreground/80">Today&apos;s Mission</span>
                      <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">3/4 completed</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-foreground/75 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Complete Career Quiz</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Explore 3 Universities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded border border-foreground/30 flex items-center justify-center" />
                        <span>Add Your Coding Project</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Finish Your Weekly Goal</span>
                      </div>
                    </div>

                    <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-purple-600 rounded-full w-3/4" />
                    </div>
                  </div>

                  {/* Profile Strength Circle (5 cols) */}
                  <div className="sm:col-span-5 p-3.5 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex flex-col items-center justify-center text-center space-y-2">
                    <span className="text-[10px] font-bold text-foreground/60 uppercase">Your Profile</span>
                    
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" className="stroke-foreground/10" strokeWidth="10" fill="transparent" />
                        <circle cx="50" cy="50" r="40" className="stroke-purple-600" strokeWidth="10" strokeDasharray={251.2} strokeDashoffset={251.2 * 0.22} strokeLinecap="round" fill="transparent" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-extrabold text-foreground">78%</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1">
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-600 font-bold">#Analytical</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 font-bold">#Leader</span>
                    </div>
                  </div>

                </div>

                {/* Next Up Card */}
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-300 uppercase tracking-wider">Next Up</span>
                    <p className="text-xs font-semibold text-foreground">University Match: Find programs that fit your goals</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-[11px] hover:bg-purple-700 transition-colors flex-shrink-0">
                    Explore →
                  </button>
                </div>

              </div>

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
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your personalized<br />
                <span className="text-purple-600 dark:text-purple-400">dashboard.</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Get clear next steps, track your progress, and stay on top of your goals — all in one place.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Career DNA & profile strength",
                "Goals & roadmap",
                "Upcoming activities",
                "AI chat with Novi",
                "Notifications & more",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-sm font-bold text-purple-600 dark:text-purple-400 italic">
                Your journey, all in one place. ✨
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
