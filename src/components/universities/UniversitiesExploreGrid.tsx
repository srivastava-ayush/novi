"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Heart, ChevronDown, SlidersHorizontal, ArrowRight } from "lucide-react";

interface UniversityItem {
  id: string;
  name: string;
  location: string;
  country: string;
  rank: number;
  fees: string;
  course: string;
  image: string;
  emoji: string;
}

const universitiesData: UniversityItem[] = [
  {
    id: "stanford",
    name: "Stanford University",
    location: "USA • California",
    country: "USA",
    rank: 3,
    fees: "$78,000 / year",
    course: "Computer Science",
    image: "/stanford-campus.jpg",
    emoji: "🌲",
  },
  {
    id: "mit",
    name: "MIT",
    location: "USA • Cambridge",
    country: "USA",
    rank: 1,
    fees: "$82,000 / year",
    course: "Computer Science",
    image: "/mit-campus.jpg",
    emoji: "⚡",
  },
  {
    id: "oxford",
    name: "Oxford University",
    location: "UK • Oxford",
    country: "UK",
    rank: 5,
    fees: "$68,000 / year",
    course: "Computer Science",
    image: "/stanford-campus.jpg",
    emoji: "🏛️",
  },
];

const popularSearches = ["USA", "UK", "Canada", "Australia", "Computer Science", "Business"];

export default function UniversitiesExploreGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({ stanford: true });
  const [compared, setCompared] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id: string) => {
    setCompared((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = universitiesData.filter((u) => {
    const query = (searchTerm || activeChip || "").toLowerCase();
    if (!query) return true;
    return (
      u.name.toLowerCase().includes(query) ||
      u.country.toLowerCase().includes(query) ||
      u.course.toLowerCase().includes(query) ||
      u.location.toLowerCase().includes(query)
    );
  });

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Search & Filters */}
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
                Explore Universities<br />Worldwide
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Search, filter and find the best universities for your future.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveChip(null);
                }}
                placeholder="Search universities, courses or countries..."
                className="w-full px-4 py-3 pl-10 pr-10 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/15 focus:border-purple-600 outline-none text-xs sm:text-sm text-foreground placeholder:text-foreground/40 shadow-sm"
              />
              <Search className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Popular Searches */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">Popular searches:</p>
              <div className="flex flex-wrap gap-1.5">
                {popularSearches.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      if (activeChip === chip) {
                        setActiveChip(null);
                        setSearchTerm("");
                      } else {
                        setActiveChip(chip);
                        setSearchTerm(chip);
                      }
                    }}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                      activeChip === chip
                        ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                        : "bg-surface dark:bg-surface-elevated border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05]"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">Filter by:</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Country", "Course", "Ranking", "Fees"].map((f) => (
                  <button
                    key={f}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface dark:bg-surface-elevated border border-foreground/10 text-foreground/75 hover:border-foreground/25"
                  >
                    <span>{f}</span>
                    <ChevronDown className="w-3 h-3 text-foreground/40" />
                  </button>
                ))}
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold">
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>More Filters</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Top Universities Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-foreground">Top Universities</h3>
              <button className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 University Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl overflow-hidden bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Campus Image Header */}
                    <div className="relative w-full h-36 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Heart Button */}
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Save university"
                      >
                        <Heart className={`w-4 h-4 ${favorites[item.id] ? "fill-rose-500 text-rose-500" : ""}`} />
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-2.5">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm text-foreground leading-snug truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs">{item.emoji}</span>
                        </div>
                        <p className="text-[11px] text-foreground/55">{item.location}</p>
                      </div>

                      <div className="space-y-1 text-[11px] pt-1 border-t border-foreground/5">
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">#{item.rank} Global Rank</span>
                          <span className="text-foreground/80 font-bold">{item.fees}</span>
                        </div>
                        <p className="text-foreground/60">{item.course}</p>
                      </div>
                    </div>
                  </div>

                  {/* Compare Action Checkbox */}
                  <div className="p-4 pt-0">
                    <label 
                      onClick={() => toggleCompare(item.id)}
                      className="flex items-center gap-2 text-xs font-semibold text-foreground/75 cursor-pointer hover:text-purple-600 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={!!compared[item.id]}
                        onChange={() => {}}
                        className="rounded accent-purple-600"
                      />
                      <span>Compare</span>
                    </label>
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
