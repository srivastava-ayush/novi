"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const matches = [
  {
    num: "1",
    name: "Stanford University",
    sub: "Strong match for your Computer Science interest",
    match: 92,
  },
  {
    num: "2",
    name: "MIT",
    sub: "Matches your academic profile and goals",
    match: 89,
  },
  {
    num: "3",
    name: "Oxford University",
    sub: "Great fit for your international ambitions",
    match: 85,
  },
  {
    num: "4",
    name: "UC Berkeley",
    sub: "Aligns with your interest in innovation",
    match: 78,
  },
];

export default function UniversitiesRecommendations() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get personalized recommendations
          </h2>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* Col 1: Novi Mascot Prompt Card (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-lg flex flex-col items-center text-center space-y-3"
          >
            {/* Speech Bubble */}
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-foreground/85 leading-snug">
              <span className="font-bold text-purple-600 dark:text-purple-400 block mb-0.5">Novi AI</span>
              Based on your profile, here are your top university matches!
            </div>

            {/* Mascot Image */}
            <div className="relative w-36 h-36">
              <Image
                src="/student-mascot-girl.png"
                alt="Novi Mentor"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Col 2: Top University Matches (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-6 rounded-3xl bg-surface/80 dark:bg-surface-elevated/50 border border-foreground/10 shadow-xl space-y-4"
          >
            <h3 className="font-bold text-sm sm:text-base text-foreground">
              Your Top University Matches
            </h3>

            <div className="space-y-2.5">
              {matches.map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {item.num}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-foreground/55 truncate">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-extrabold text-purple-600 dark:text-purple-400">
                      {item.match}%
                    </span>
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all shadow-md shadow-purple-600/20 group">
                <span>View all matches</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Col 3: Why These Matches? (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-5 rounded-3xl bg-surface/50 dark:bg-surface-elevated/30 border border-foreground/5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-foreground">Why these matches?</h4>
            </div>

            <p className="text-xs text-foreground/70 leading-relaxed">
              Based on your career interests, strengths, academic performance and location preferences.
            </p>

            <div className="space-y-2.5 text-xs text-foreground/80 font-medium">
              {[
                "Career DNA & profile strength",
                "Goals & roadmap",
                "University preferences",
                "Location & budget",
                "Future opportunities",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 italic">
                Personalized just for you! ✨
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
