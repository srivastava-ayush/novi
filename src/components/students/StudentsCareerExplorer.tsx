"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";

interface CareerItem {
  id: string;
  title: string;
  match: number;
  tags: string[];
  initial: string;
  color: string;
}

const careersData: CareerItem[] = [
  {
    id: "pm",
    title: "Product Manager",
    match: 91,
    tags: ["Strategy", "Leadership", "Problem Solving"],
    initial: "P",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "ux",
    title: "UX Designer",
    match: 87,
    tags: ["Creativity", "Design", "Problem Solving"],
    initial: "U",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "ent",
    title: "Entrepreneur",
    match: 85,
    tags: ["Leadership", "Business"],
    initial: "E",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "ds",
    title: "Data Scientist",
    match: 82,
    tags: ["Analytics", "Building", "Technical"],
    initial: "D",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "med",
    title: "Biomedical Researcher",
    match: 79,
    tags: ["Medicine", "Research", "Science"],
    initial: "B",
    color: "from-emerald-500 to-teal-600",
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

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Search & Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What could you become?
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Explore careers that match your interests, strengths and future goals. Find the ones that truly fit you.
              </p>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveChip(null);
                }}
                placeholder="Search careers, interests or skills..."
                className="w-full px-4 py-3 pl-10 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/15 focus:border-purple-600 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/40 shadow-sm transition-all"
              />
              <Search className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Popular Searches Chips */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
                Popular searches:
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleChipClick(item)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                      activeChip === item
                        ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                        : "bg-surface dark:bg-surface-elevated border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
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
                Showing {filteredCareers.length} matches
              </span>
            </div>

            {/* Career Cards List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCareers.map((career) => (
                <div
                  key={career.id}
                  className="p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Career Header: Avatar & Title */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${career.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0`}>
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

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {career.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] text-foreground/70 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Action */}
                  <div className="pt-2 flex justify-end">
                    <div className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
