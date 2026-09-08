"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, User } from "lucide-react";

interface QAPair {
  question: string;
  response: string;
}

const qaOptions: QAPair[] = [
  {
    question: "I'm interested in technology. What are my options?",
    response: "Great question, Riya! Based on your interests, strengths and your profile, I've found exciting career paths in Product Management, AI Engineering, and UX Architecture. Would you like to explore them?",
  },
  {
    question: "Yes, show me options.",
    response: "Awesome! We've lined up 3 target tech internships and a hackathon project this term that directly strengthen your Computer Science applications.",
  },
  {
    question: "What about universities?",
    response: "Your current profile strength of 78% makes you competitive for top-tier CS programs at CMU, Waterloo, and UCL. Let's aim for 85% by Grade 12!",
  },
  {
    question: "Tell me more about this",
    response: "We can break down your next 4 weeks into 2 hours of weekly algorithmic practice and drafting your research proposal with your mentor.",
  },
];

export default function StudentsAIMentor() {
  const [selectedQA, setSelectedQA] = useState<QAPair>(qaOptions[0]);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              AI MENTOR
            </div>

            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have questions?<br />
              <span className="text-purple-600 dark:text-purple-400">Novi has context.</span>
            </h2>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-normal">
              Ask Novi anything — from career advice to university options. She remembers your journey and gives personalized answers.
            </p>

            <div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/25 group">
                <span>Chat with Novi</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Center Column: Interactive Chat Canvas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 rounded-3xl bg-surface/80 dark:bg-surface-elevated/50 border border-foreground/10 shadow-xl space-y-4"
          >
            {/* Student Question Bubble */}
            <div className="flex items-start gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/20 flex-shrink-0">
                <Image src="/riya-avatar.jpg" alt="Riya" fill className="object-cover" />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-sm bg-purple-600 text-white text-xs sm:text-sm leading-relaxed shadow-sm max-w-[85%]">
                {selectedQA.question}
              </div>
            </div>

            {/* Novi AI Response Bubble */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedQA.response}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-3 pt-2"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                  N
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-foreground/[0.04] border border-foreground/10 text-foreground/90 text-xs sm:text-sm leading-relaxed shadow-sm max-w-[85%]">
                  {selectedQA.response}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Clickable Quick Prompts */}
            <div className="pt-3 border-t border-foreground/10 space-y-2">
              <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Suggested responses:</p>
              <div className="flex flex-wrap gap-1.5">
                {qaOptions.slice(1).map((item) => (
                  <button
                    key={item.question}
                    onClick={() => setSelectedQA(item)}
                    className={`text-[11px] px-3 py-1.5 rounded-xl border transition-all ${
                      selectedQA.question === item.question
                        ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                        : "bg-foreground/[0.02] border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05]"
                    }`}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Capabilities Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 p-6 rounded-3xl bg-surface/50 dark:bg-surface-elevated/30 border border-foreground/5 space-y-4"
          >
            <h4 className="font-bold text-sm text-foreground">Novi can help you with:</h4>
            
            <div className="space-y-3 text-xs sm:text-sm font-medium text-foreground/80">
              {[
                "Career recommendations",
                "University suggestions",
                "Subject & skill guidance",
                "Profile building",
                "Goal tracking",
                "Answer your questions",
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
