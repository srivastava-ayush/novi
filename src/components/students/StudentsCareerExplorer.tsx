"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  Sparkles,
  X,
  TrendingUp,
} from "lucide-react";

interface CareerItem {
  id: string;
  title: string;
  match: number;
  level: string;
  tags: string[];
  initial: string;
  color: string;
  bar: string;
}

const careersData: CareerItem[] = [
  {
    id: "pm",
    title: "Product Manager",
    match: 91,
    level: "Top Match",
    tags: ["Strategy", "Leadership", "Problem Solving"],
    initial: "P",
    color: "from-purple-500 to-indigo-600",
    bar: "from-purple-600 to-indigo-500",
  },
  {
    id: "ux",
    title: "UX Designer",
    match: 87,
    level: "Strong fit",
    tags: ["Creativity", "Design", "Problem Solving"],
    initial: "U",
    color: "from-pink-500 to-rose-600",
    bar: "from-pink-500 to-rose-500",
  },
  {
    id: "ent",
    title: "Entrepreneur",
    match: 85,
    level: "Strong fit",
    tags: ["Leadership", "Business"],
    initial: "E",
    color: "from-amber-500 to-orange-600",
    bar: "from-amber-500 to-orange-500",
  },
  {
    id: "ds",
    title: "Data Scientist",
    match: 82,
    level: "Great fit",
    tags: ["Analytics", "Building", "Technical"],
    initial: "D",
    color: "from-cyan-500 to-blue-600",
    bar: "from-cyan-500 to-blue-500",
  },
  {
    id: "med",
    title: "Biomedical Researcher",
    match: 79,
    level: "Great fit",
    tags: ["Medicine", "Research", "Science"],
    initial: "B",
    color: "from-emerald-500 to-teal-600",
    bar: "from-emerald-500 to-teal-500",
  },
];

const popularSearches = [
  "Product Manager",
  "UX Designer",
  "Medicine",
  "Engineering",
  "Psychology",
];

export default function StudentsCareerExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const filteredCareers = careersData.filter((c) => {
    const term = (searchTerm || activeChip || "").toLowerCase();
    if (!term) return true;
    return (
      c.title.toLowerCase().includes(term) ||
      c.tags.some((t) => t.toLowerCase().includes(term))
    );
  });

  const handleChipClick = (chip: string) => {
    if (activeChip === chip) {
      setActiveChip(null);
      setSearchTerm("");
    } else {
      setActiveChip(chip);
      setSearchTerm(chip);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setActiveChip(null);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-background">
      <div className="orb bottom-10 -right-40 w-[480px] h-[480px] bg-indigo-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Search & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-28"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Career Explorer
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What could you
                <br />
                <span className="text-gradient">become?</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Explore careers that match your interests, strengths and future
                goals. Find the ones that truly fit you.
              </p>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveChip(null);
                }}
                placeholder="Search careers, interests or skills..."
                className="w-full px-4 py-3.5 pl-11 pr-10 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/15 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/40 shadow-sm transition-all"
              />
              <Search className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-foreground/10 hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Popular Searches Chips */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleChipClick(item)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all font-medium ${
                      activeChip === item
                        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/25 scale-[1.02]"
                        : "bg-surface dark:bg-surface-elevated border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05] hover:border-purple-500/30"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Hint card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/15">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Tip: matches update as your profile grows. Complete your
                  Career DNA quiz to unlock sharper suggestions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Top Matches Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Top Matches</span>
              </div>
              <span className="text-xs text-foreground/50 font-medium">
                Showing {filteredCareers.length}{" "}
                {filteredCareers.length === 1 ? "match" : "matches"}
              </span>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredCareers.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-dashed border-foreground/20 text-center space-y-3"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-foreground">
                    No careers match &ldquo;{searchTerm}&rdquo;
                  </h4>
                  <p className="text-sm text-foreground/60 max-w-sm mx-auto">
                    Try a different keyword or clear the search to see all top
                    matches.
                  </p>
                  <button
                    onClick={clearSearch}
                    className="inline-flex items-center gap-1.5 px-4 py-2 mt-1 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition-colors"
                  >
                    Clear search
                  </button>
                </motion.div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredCareers.map((career) => (
                    <motion.div
                      layout
                      key={career.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35 }}
                      className="relative p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                    >
                      {career.level === "Top Match" && (
                        <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[9px] font-bold uppercase tracking-wide shadow-md shadow-purple-600/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          {career.level}
                        </span>
                      )}

                      <div className="space-y-3 pt-1">
                        {/* Career Header */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${career.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            {career.initial}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm text-foreground leading-tight truncate">
                              {career.title}
                            </h4>
                            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                              {career.match}% Match
                            </span>
                          </div>
                        </div>

                        {/* Match bar */}
                        <div>
                          <div className="h-1.5 w-full bg-foreground/[0.08] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${career.match}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: "easeOut",
                              }}
                              className={`h-full bg-gradient-to-r ${career.bar} rounded-full`}
                            />
                          </div>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {career.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] border border-foreground/5 text-foreground/70 font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow Action */}
                      <div className="pt-2 flex justify-end">
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          View
                          <span className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent">
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}