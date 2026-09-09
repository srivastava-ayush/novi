"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageSquare, ArrowRight, Sparkles, User } from "lucide-react";

interface QAPair {
  question: string;
  response: string;
}

const qaData: QAPair[] = [
  {
    question: "Is my child on track for their target universities?",
    response: "Yes, Riya is on track for her target universities. Her academics, activities and profile strength align well with Computer Science programs she's aiming for.",
  },
  {
    question: "What should we focus on this summer?",
    response: "For summer, we recommend completing her open-source machine learning project and leading the robotics workshop. This will boost her profile strength to ~85%.",
  },
  {
    question: "Should my daughter choose Economics or Business?",
    response: "Based on Riya's aptitude tests and mathematical strengths, an Economics track with Data Analytics offers greater flexibility and alignment with top-tier university programs.",
  },
  {
    question: "How can we help without putting pressure on her?",
    response: "Novi breaks milestones into weekly micro-goals. Your role is simply to celebrate completed checkpoints and provide encouragement during testing phases.",
  },
  {
    question: "Is her profile strong enough for scholarships?",
    response: "Her leadership roles and technical research draft place her in the top 12% for merit-based STEM scholarships across top global universities.",
  },
];

export const promptChips = [
  "What should we focus on this summer?",
  "Should my daughter choose Economics or Business?",
  "How can we help without putting pressure on her?",
  "Is her profile strong enough for scholarships?",
];

export default function ParentsQADemo() {
  const [selectedQA, setSelectedQA] = useState<QAPair>(qaData[0]);

  const handleSelectChip = (chipQuestion: string) => {
    const found = qaData.find((item) => item.question === chipQuestion);
    if (found) {
      setSelectedQA(found);
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D Mascot Character & Greeting Bubble */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center relative"
          >
            {/* Speech Bubble Above Mascot */}
            <div className="relative mb-2 p-4 rounded-2xl bg-surface dark:bg-surface-elevated border border-purple-500/20 shadow-lg text-xs sm:text-sm font-medium text-foreground max-w-[260px] text-center">
              <p className="font-bold text-purple-600 dark:text-purple-400 mb-0.5">Hi! I&apos;m Novi 👋</p>
              <p className="text-foreground/75 leading-snug">I&apos;m here to help you support your child&apos;s best future.</p>
              
              {/* Bubble Triangle pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-elevated border-b border-r border-purple-500/20 transform rotate-45" />
            </div>

            {/* 3D Character Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 animate-float-slow">
              <Image
                src="/3dboy.png"
                alt="Novi AI Companion"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Q&A Context Box & Interactive Chat */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You have questions.<br />
                <span className="text-purple-600 dark:text-purple-400">Novi has context.</span>
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-2">
                Ask Novi about your child&apos;s journey, goals and future.
              </p>
            </div>

            {/* Interactive Chat Canvas */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface/80 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl space-y-6">
              
              {/* Question & Answer Exchange */}
              <div className="grid md:grid-cols-2 gap-4 items-center relative">
                
                {/* Parent Question Box */}
                <div className="p-4 rounded-2xl bg-foreground/[0.03] border border-foreground/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center text-xs font-bold">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground/70 uppercase">Parent</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                    {selectedQA.question}
                  </p>
                </div>

                {/* Connecting Dotted Line / Indicator on desktop */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="w-8 border-t-2 border-dashed border-purple-500/40" />
                </div>

                {/* Novi AI Response Box */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selectedQA.response}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                        N
                      </div>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Novi</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {selectedQA.response}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Clickable Preset Prompt Chips */}
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
                  Select a sample question:
                </p>
                <div className="flex flex-wrap gap-2">
                  {promptChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectChip(chip)}
                      className={`text-xs px-3.5 py-2 rounded-xl border transition-all text-left flex items-center gap-1.5 ${
                        selectedQA.question === chip
                          ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/20"
                          : "bg-foreground/[0.02] border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05] hover:border-foreground/20"
                      }`}
                    >
                      <MessageSquare className="w-3 h-3 flex-shrink-0" />
                      <span>{chip}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-center sm:justify-start">
                <button
                  onClick={() => {
                    // Cycle to next QA
                    const currentIndex = qaData.findIndex((item) => item.question === selectedQA.question);
                    const nextIndex = (currentIndex + 1) % qaData.length;
                    setSelectedQA(qaData[nextIndex]);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/20 group cursor-pointer"
                >
                  <span>Ask Novi</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
