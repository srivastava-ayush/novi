"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Clock, Building2, Users, Heart, Sparkles, TrendingUp } from "lucide-react";

export default function UniversitiesDeepDive() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContents: Record<string, string> = {
    Overview:
      "Stanford University is a world-renowned research university known for innovation, entrepreneurship and academic excellence. It offers a collaborative learning environment with world-class faculty and cutting-edge facilities.",
    Courses:
      "Offers top-ranked programs in Computer Science, Artificial Intelligence, Bioengineering, Economics, and Management Science with flexible dual-degree options.",
    "Campus Life":
      "Located in Silicon Valley with 8,180 acres of sunny campus, 600+ student organizations, vibrant residential colleges, and proximity to global tech giants.",
    Outcomes:
      "94% graduate employment within 6 months, $145,000 average starting salary for STEM graduates, and strong alumni venture capital network.",
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
          University Details
        </div>

        {/* Unified Detailed Showcase Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-surface/80 dark:bg-surface-elevated/50 border border-foreground/10 shadow-xl p-6 sm:p-8"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Card: University Profile Mini (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="relative w-full h-32 rounded-2xl overflow-hidden">
                <Image src="/stanford-campus.jpg" alt="Stanford" fill className="object-cover" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-base text-foreground">Stanford 🌲</h3>
                  <button className="text-gray-400 hover:text-rose-500" aria-label="Save">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  </button>
                </div>
                <p className="text-xs text-foreground/60">USA • Stanford, California</p>
              </div>

              <div className="space-y-1 text-xs text-foreground/80 font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">#3 Global Rank</span>
                  <span className="font-bold">$78,000 / year</span>
                </div>
                <p className="text-[11px] text-foreground/50">4 Years Duration</p>
              </div>

              <button className="w-full py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-colors shadow-sm">
                Compare
              </button>
            </div>

            {/* Center Card: Interactive Tabs & Information (6 cols) */}
            <div className="lg:col-span-6 space-y-4 border-y lg:border-y-0 lg:border-x border-foreground/10 py-4 lg:py-0 lg:px-6">
              
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2 border-b border-foreground/10 pb-3">
                {["Overview", "Courses", "Campus Life", "Outcomes"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                      activeTab === tab
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs sm:text-sm text-foreground/75 leading-relaxed min-h-[70px]"
                >
                  {tabContents[activeTab]}
                </motion.p>
              </AnimatePresence>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-foreground/[0.03] border border-foreground/5 text-center space-y-1">
                  <Clock className="w-3.5 h-3.5 mx-auto text-purple-600 dark:text-purple-400" />
                  <p className="text-[10px] font-bold text-foreground">4 Years</p>
                  <p className="text-[9px] text-foreground/50">Duration</p>
                </div>

                <div className="p-2.5 rounded-xl bg-foreground/[0.03] border border-foreground/5 text-center space-y-1">
                  <Building2 className="w-3.5 h-3.5 mx-auto text-purple-600 dark:text-purple-400" />
                  <p className="text-[10px] font-bold text-foreground">Private</p>
                  <p className="text-[9px] text-foreground/50">Type</p>
                </div>

                <div className="p-2.5 rounded-xl bg-foreground/[0.03] border border-foreground/5 text-center space-y-1">
                  <Users className="w-3.5 h-3.5 mx-auto text-purple-600 dark:text-purple-400" />
                  <p className="text-[10px] font-bold text-foreground">6:1</p>
                  <p className="text-[9px] text-foreground/50">Student/Faculty</p>
                </div>
              </div>

            </div>

            {/* Right Card: Admission Chances Meter (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Admission Chances</span>
              </div>

              <div className="space-y-3 text-xs">
                {/* Reach */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-rose-500">Reach</span>
                    <span className="text-foreground">15%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full w-[15%]" />
                  </div>
                  <p className="text-[9px] text-foreground/50">Higher academic profile needed</p>
                </div>

                {/* Match */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-emerald-500">Match</span>
                    <span className="text-foreground">65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
                  </div>
                  <p className="text-[9px] text-foreground/50">Good fit with your profile</p>
                </div>

                {/* Safe */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-blue-500">Safe</span>
                    <span className="text-foreground">20%</span>
                  </div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[20%]" />
                  </div>
                  <p className="text-[9px] text-foreground/50">Strong match probability</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
