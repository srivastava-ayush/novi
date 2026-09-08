"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  ArrowUpRight,
  X,
  Compass,
  TrendingUp,
} from "lucide-react";

interface Career {
  title: string;
  tags: string[];
  match: number;
  color: string;
  bar: string;
  initial: string;
}

const careerDatabase: Career[] = [
  {
    title: "Artificial Intelligence Engineer",
    tags: ["AI", "Code", "Math"],
    match: 96,
    color: "from-purple-500 to-indigo-600",
    bar: "from-purple-600 to-indigo-500",
    initial: "A",
  },
  {
    title: "Biomedical Researcher",
    tags: ["Medicine", "Science", "Lab"],
    match: 91,
    color: "from-emerald-500 to-teal-600",
    bar: "from-emerald-500 to-teal-500",
    initial: "B",
  },
  {
    title: "UX/UI Designer",
    tags: ["Design", "Creative", "User"],
    match: 89,
    color: "from-pink-500 to-rose-600",
    bar: "from-pink-500 to-rose-500",
    initial: "U",
  },
  {
    title: "Data Scientist",
    tags: ["Analytics", "Code", "Math"],
    match: 88,
    color: "from-cyan-500 to-blue-600",
    bar: "from-cyan-500 to-blue-500",
    initial: "D",
  },
  {
    title: "Entrepreneur",
    tags: ["Entrepreneurship", "Business", "Ideas"],
    match: 87,
    color: "from-amber-500 to-orange-600",
    bar: "from-amber-500 to-orange-500",
    initial: "E",
  },
  {
    title: "Robotics Engineer",
    tags: ["Robotics", "Engineering", "AI"],
    match: 85,
    color: "from-blue-500 to-indigo-600",
    bar: "from-blue-500 to-indigo-500",
    initial: "R",
  },
  {
    title: "Financial Analyst",
    tags: ["Finance", "Strategy", "Numbers"],
    match: 84,
    color: "from-cyan-500 to-blue-600",
    bar: "from-cyan-500 to-blue-500",
    initial: "F",
  },
  {
    title: "Clinical Psychologist",
    tags: ["Psychology", "Human", "Therapy"],
    match: 83,
    color: "from-violet-500 to-purple-600",
    bar: "from-violet-500 to-purple-500",
    initial: "P",
  },
  {
    title: "Ethical Hacker",
    tags: ["Cyber", "Security", "Code"],
    match: 78,
    color: "from-slate-500 to-gray-700",
    bar: "from-slate-500 to-gray-600",
    initial: "H",
  },
  {
    title: "Marine Biologist",
    tags: ["Ocean", "Biology", "Research"],
    match: 75,
    color: "from-blue-500 to-cyan-600",
    bar: "from-blue-500 to-cyan-500",
    initial: "M",
  },
  {
    title: "Acoustics Engineer",
    tags: ["Sound", "Physics", "Engineering"],
    match: 74,
    color: "from-sky-500 to-cyan-600",
    bar: "from-sky-500 to-cyan-500",
    initial: "A",
  },
  {
    title: "Urban Planner",
    tags: ["Cities", "Design", "Strategy"],
    match: 73,
    color: "from-lime-500 to-green-600",
    bar: "from-lime-500 to-green-500",
    initial: "U",
  },
  {
    title: "Genetic Counsellor",
    tags: ["Biology", "Medicine", "Communication"],
    match: 72,
    color: "from-teal-500 to-emerald-600",
    bar: "from-teal-500 to-emerald-500",
    initial: "G",
  },
  {
    title: "Food Scientist",
    tags: ["Science", "Food", "Lab"],
    match: 70,
    color: "from-orange-500 to-amber-600",
    bar: "from-orange-500 to-amber-500",
    initial: "F",
  },
];

const examples = [
  "Artificial Intelligence",
  "Medicine",
  "Design",
  "Entrepreneurship",
  "Finance",
  "Psychology",
];

export default function CareersHero() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return careerDatabase
      .filter(
        (c) =>
          c.title.toLowerCase().includes(term) ||
          c.tags.some((t) => t.toLowerCase().includes(term))
      )
      .sort((a, b) => b.match - a.match);
  }, [query]);

  const previewCareers = useMemo(() => {
    const source = results.length > 0 ? results : careerDatabase;
    return [...source].sort((a, b) => b.match - a.match).slice(0, 3);
  }, [results]);

  const selectCareer = (title: string) => {
    setQuery(title);
    setFocused(false);
  };

  const applyExample = (example: string) => {
    setQuery(example === query ? "" : example);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-background">
      {/* Dot-grid backdrop + ambient orbs */}
      <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)] pointer-events-none" />
      <div className="orb top-16 left-[12%] w-[560px] h-[560px] bg-purple-500/10" />
      <div className="orb top-40 right-[6%] w-[480px] h-[480px] bg-indigo-500/10" />
      <div className="orb bottom-0 left-1/3 w-[420px] h-[420px] bg-pink-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Hero content + search */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5" />
              Career Discovery
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-foreground leading-[1.06]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What could you
              <br />
              <span className="relative whitespace-nowrap">
                <span className="text-gradient">become?</span>
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

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed font-normal">
              There are thousands of careers you&apos;ve probably never heard
              of. Novi helps you discover the ones that could be right for you.
            </p>

            {/* Search */}
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Search careers, interests or skills..."
                className="w-full px-5 py-4 pl-12 pr-11 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/15 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none text-sm sm:text-base text-foreground placeholder:text-foreground/40 shadow-lg shadow-purple-500/5 transition-all"
              />
              <Search className="w-5 h-5 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-foreground/10 hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Search results dropdown */}
              <AnimatePresence>
                {focused && query.trim() && results.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 z-40 p-2 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/10 shadow-2xl space-y-1"
                  >
                    {results.slice(0, 5).map((career) => (
                      <li key={career.title}>
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => selectCareer(career.title)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-purple-500/10 transition-colors text-left"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${career.color} text-white font-bold flex items-center justify-center text-xs flex-shrink-0`}
                          >
                            {career.initial}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-foreground truncate">
                              {career.title}
                            </p>
                            <p className="text-[11px] text-foreground/50 font-medium">
                              {career.tags.join(" · ")}
                            </p>
                          </div>
                          <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                            {career.match}%
                          </span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Examples */}
            <div>
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-3">
                Try exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {examples.map((example, idx) => (
                  <motion.button
                    key={example}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => applyExample(example)}
                    className={`text-xs px-3.5 py-2 rounded-xl border transition-all font-medium flex items-center gap-1.5 ${
                      query === example
                        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/25 scale-[1.02]"
                        : "bg-surface dark:bg-surface-elevated border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05] hover:border-purple-500/30 hover:-translate-y-0.5"
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block" />
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Trust strip */}
            <div className="pt-2 flex items-center divide-x divide-foreground/10 border-t border-foreground/10 max-w-xl">
              {[
                { value: "1,200+", label: "Careers mapped" },
                { value: "400+", label: "Rare careers" },
                { value: "96%", label: "Match accuracy" },
              ].map((stat) => (
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

          {/* Right: Live match preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 relative flex items-center justify-center py-8"
          >
            {/* Decorative gradient ring */}
            <div className="absolute right-10 lg:right-16 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-purple-500/10 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-purple-500/50 blur-[1px]" />
            </div>

            {/* Main Match Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="relative z-10 w-full max-w-[420px] rounded-[28px] gradient-border bg-white dark:bg-[#12112a] border border-black/10 dark:border-white/10 shadow-[0_25px_70px_rgba(15,15,35,0.16)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.6)] p-5 sm:p-6 space-y-4"
            >
              {/* Glow highlight */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5 relative">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                      Your Top Matches
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                      {query.trim() ? `for "${query}"` : "based on who you are"}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                  </span>
                  Live matching
                </span>
              </div>

              {/* Match list */}
              <div className="space-y-3">
                {previewCareers.map((career, idx) => (
                  <motion.div
                    key={career.title}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.12 }}
                    className="p-3 rounded-2xl bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 flex items-center gap-3 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${career.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0`}
                    >
                      {career.initial}
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                          {career.title}
                        </p>
                        <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                          {career.match}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${career.match}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.5 + idx * 0.12,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${career.bar} rounded-full`}
                          />
                        </div>
                        <span className="text-[10px] text-foreground/40 font-medium whitespace-nowrap">
                          Top fit
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer link */}
              <div className="flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-foreground/50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Explore all {careerDatabase.length}+ careers
                  <span className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Floating AI badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-2 top-8 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white dark:bg-[#1a183c] border border-emerald-500/30 shadow-xl animate-float"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold text-gray-800 dark:text-white">
                Novi AI · Matching
              </span>
            </motion.div>

            {/* Floating trend badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-4 right-4 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl gradient-border bg-white dark:bg-[#1a183c] shadow-xl animate-float-slow"
            >
              <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-[11px] font-bold text-gray-800 dark:text-white">
                Careers you&apos;ve never heard of
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}