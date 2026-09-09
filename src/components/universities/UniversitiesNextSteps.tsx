"use client";

import { motion } from "framer-motion";
import { FolderGit2, Sparkles, Building, ArrowRight } from "lucide-react";

export default function UniversitiesNextSteps() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* Section Heading */}
        <div>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your next steps
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Build a project */}
          <div className="p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Build a project</h4>
              <p className="text-xs text-foreground/60 mt-1">Showcase your interest in CS or related fields.</p>
            </div>
          </div>

          {/* Card 2: Learn a skill */}
          <div className="p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Learn a skill</h4>
              <p className="text-xs text-foreground/60 mt-1">Improve your coding or problem-solving skills.</p>
            </div>
          </div>

          {/* Card 3: Explore a university */}
          <div className="p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">Explore a university</h4>
              <p className="text-xs text-foreground/60 mt-1">Attend virtual tours and info sessions.</p>
            </div>
          </div>

          {/* Card 4: Compare Banner (Purple) */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg flex flex-col justify-between space-y-3 group cursor-pointer">
            <div>
              <h4 className="font-bold text-sm leading-snug">Compare with other universities</h4>
              <p className="text-xs text-white/80 mt-1">Make informed choices with side-by-side metrics.</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold pt-1">
              <span>See side-by-side comparison</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
