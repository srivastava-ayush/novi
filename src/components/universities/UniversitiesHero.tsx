"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Search, 
  ArrowRight, 
  Globe, 
  Sparkles, 
  GraduationCap, 
  DollarSign, 
  ChevronDown, 
  Heart,
  SlidersHorizontal
} from "lucide-react";

export default function UniversitiesHero() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Ambient glow */}
      <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-36 right-10 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              UNIVERSITY EXPLORER
            </div>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Don&apos;t just find<br />
              a university.<br />
              <span className="text-purple-600 dark:text-purple-400">Find your university.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed font-normal">
              Explore universities, courses and countries based on what matters to you.
            </p>

            {/* Search Input Bar */}
            <div className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search universities, courses or countries..."
                  className="w-full px-4 py-3.5 pl-10 pr-12 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/15 focus:border-purple-600 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/40 shadow-sm"
                />
                <Search className="w-4 h-4 text-foreground/40 absolute left-3.5" />
                <button 
                  className="absolute right-2 w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-sm"
                  aria-label="Search"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-2 text-xs">
                {["Country", "Course", "Ranking", "Fees"].map((filter) => (
                  <button
                    key={filter}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface dark:bg-surface-elevated border border-foreground/10 text-foreground/75 hover:border-foreground/25 transition-colors"
                  >
                    <span>{filter}</span>
                    <ChevronDown className="w-3 h-3 text-foreground/40" />
                  </button>
                ))}
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold">
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>

            {/* 4 Feature Checkmarks */}
            <div className="pt-2 grid grid-cols-2 gap-x-4 gap-y-3 text-xs font-medium text-foreground/75">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Global Universities</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Personalized Matches</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Curated by Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Scholarships & Funding</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic: University Search Card + 3D Mascot Girl */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end py-6"
          >
            {/* Top Right Doodle Annotation */}
            <div className="absolute -top-6 right-8 hidden sm:flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-xs font-bold italic tracking-wide">
              <span>Big dreams. Better guidance.</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            {/* Main Composition Wrapper */}
            <div className="relative w-full max-w-[620px] flex items-center">
              
              {/* Floating Live Results Card (Positioned Left) */}
              <div className="relative z-10 w-full max-w-[390px] sm:max-w-[430px] rounded-[28px] bg-white dark:bg-[#12112a] border border-black/10 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.14)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-5 space-y-3.5">
                
                {/* Search Bar inside card */}
                <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[11px]">Search universities, courses or countries...</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span>Results: <strong className="text-gray-900 dark:text-white">1,248 universities</strong></span>
                </div>

                {/* University Results List */}
                <div className="space-y-2.5">
                  
                  {/* Stanford */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/stanford-campus.jpg" alt="Stanford" fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs text-gray-900 dark:text-white truncate">Stanford University</h4>
                        <p className="text-[10px] text-gray-500">USA • Stanford, California</p>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                          <span className="text-purple-600 font-bold">#3 Global Rank</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">$78,000 / year</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button className="px-2.5 py-1 rounded-lg bg-purple-600 text-white text-[10px] font-bold hover:bg-purple-700 transition-colors">
                        Compare
                      </button>
                      <button className="p-1 rounded-lg text-gray-400 hover:text-rose-500" aria-label="Favorite">
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* MIT */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src="/mit-campus.jpg" alt="MIT" fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs text-gray-900 dark:text-white truncate">MIT</h4>
                        <p className="text-[10px] text-gray-500">USA • Cambridge, Massachusetts</p>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                          <span className="text-purple-600 font-bold">#1 Global Rank</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">$82,000 / year</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button className="px-2.5 py-1 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-[10px] font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        Compare
                      </button>
                    </div>
                  </div>

                  {/* Oxford */}
                  <div className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-purple-500/30 transition-all">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-800 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                        OX
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-xs text-gray-900 dark:text-white truncate">Oxford University</h4>
                        <p className="text-[10px] text-gray-500">UK • Oxford</p>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                          <span className="text-purple-600 font-bold">#5 Global Rank</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">$68,000 / year</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button className="px-2.5 py-1 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-[10px] font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        Compare
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* 3D Student Mascot Girl (Positioned on the Right) */}
              <div className="block absolute -right-4 sm:right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[330px] h-[340px] sm:h-[400px] md:h-[440px] lg:h-[480px] z-20 pointer-events-none">
                <Image
                  src="/student-mascot-girl.png"
                  alt="Novi Student Mascot"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Speech Bubble on Mascot */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-6 -right-2 z-30 p-2.5 rounded-2xl bg-white dark:bg-[#1a183c] border border-purple-500/20 shadow-xl text-[10px] font-medium text-gray-800 dark:text-gray-200 max-w-[160px]"
              >
                <p className="font-bold text-purple-600 dark:text-purple-400">Hi! I&apos;m Novi 👋</p>
                <p>Let&apos;s find the right university for you!</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
