"use client";

import { motion } from "framer-motion";
import { Compass, Target, Box, Globe, ArrowRight } from "lucide-react";

const possibilities = [
  {
    title: "Discover",
    description: "Find careers and possibilities you didn't know existed.",
    icon: Compass,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/40",
    btnColor: "text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400",
  },
  {
    title: "Plan",
    description: "Understand which subjects, skills and experiences can move you towards your goals.",
    icon: Target,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
    btnColor: "text-purple-500 hover:text-purple-600 dark:hover:text-purple-400",
  },
  {
    title: "Build",
    description: "Turn your interests into projects, achievements and experiences that matter.",
    icon: Box,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40",
    btnColor: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    title: "Explore",
    description: "Discover universities, courses and opportunities around the world.",
    icon: Globe,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/40",
    btnColor: "text-amber-500 hover:text-amber-600 dark:hover:text-amber-400",
  },
];

export default function StudentsChallengeGrid() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The Student Challenge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              THE STUDENT CHALLENGE
            </div>

            {/* Heading */}
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              You don&apos;t need<br />
              all the answers.
            </h2>

            {/* Pain Points */}
            <div className="space-y-3.5 text-sm sm:text-base text-foreground/75 font-normal">
              <p>Not sure what career you want?</p>
              <p>Don&apos;t know which subjects to choose?</p>
              <p>Wondering which university is right for you?</p>
              <p>Don&apos;t know how to build a strong profile?</p>
            </div>

            {/* Handwritten Style Highlight */}
            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 italic">
                That&apos;s exactly why Novi exists. ✨
              </p>
            </div>
          </motion.div>

          {/* Right Column: Possibilities 4 Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <h3 
              className="text-2xl sm:text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore your possibilities
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              {possibilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105 ${item.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5">
                        <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="pt-2">
                      <div className={`w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 ${item.btnColor}`}>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
