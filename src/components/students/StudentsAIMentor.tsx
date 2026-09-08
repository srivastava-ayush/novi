"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Send,
  Bot,
} from "lucide-react";

interface QAPair {
  question: string;
  response: string;
}

const qaOptions: QAPair[] = [
  {
    question: "I'm interested in technology. What are my options?",
    response:
      "Great question, Riya! Based on your interests, strengths and your profile, I've found exciting career paths in Product Management, AI Engineering, and UX Architecture. Would you like to explore them?",
  },
  {
    question: "Yes, show me options.",
    response:
      "Awesome! We've lined up 3 target tech internships and a hackathon project this term that directly strengthen your Computer Science applications.",
  },
  {
    question: "What about universities?",
    response:
      "Your current profile strength of 78% makes you competitive for top-tier CS programs at CMU, Waterloo, and UCL. Let's aim for 85% by Grade 12!",
  },
  {
    question: "Tell me more about this",
    response:
      "We can break down your next 4 weeks into 2 hours of weekly algorithmic practice and drafting your research proposal with your mentor.",
  },
];

const capabilities = [
  "Career recommendations",
  "University suggestions",
  "Subject & skill guidance",
  "Profile building",
  "Goal tracking",
  "Answer your questions",
];

export default function StudentsAIMentor() {
  const [selectedQA, setSelectedQA] = useState<QAPair>(qaOptions[0]);
  const [typing, setTyping] = useState(false);

  const handleSelect = (item: QAPair) => {
    if (item === selectedQA) return;
    setTyping(true);
    window.setTimeout(() => {
      setSelectedQA(item);
      setTyping(false);
    }, 650);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="orb top-1/4 -left-32 w-[420px] h-[420px] bg-pink-500/[0.07]" />
      <div className="orb bottom-0 right-[10%] w-[380px] h-[380px] bg-purple-500/[0.08]" />

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
              <Sparkles className="w-3.5 h-3.5" />
              AI Mentor
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Have questions?
              <br />
              <span className="text-gradient">Novi has context.</span>
            </h2>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed font-normal">
              Ask Novi anything — from career advice to university options. She
              remembers your journey and gives personalized answers.
            </p>

            {/* Mini capabilities preview */}
            <div className="flex flex-wrap gap-1.5">
              {capabilities.slice(0, 3).map((cap) => (
                <span
                  key={cap}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-foreground/[0.04] border border-foreground/10 text-foreground/70 font-medium"
                >
                  {cap}
                </span>
              ))}
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 font-bold">
                +3 more
              </span>
            </div>

            <div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-600/25 hover:-translate-y-0.5 group">
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
            className="lg:col-span-5 p-5 sm:p-6 rounded-3xl gradient-border bg-surface/80 dark:bg-surface-elevated/50 border border-foreground/10 shadow-xl space-y-4"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 pb-3 border-b border-foreground/10">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-surface" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Novi</p>
                <p className="text-[10px] text-emerald-500 font-semibold">
                  Online · knows Riya&apos;s journey
                </p>
              </div>
            </div>

            {/* Chat area */}
            <div className="space-y-4 min-h-[220px]">
              {/* Student Question Bubble */}
              <div className="flex items-start gap-3 justify-end">
                <div className="p-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs sm:text-sm leading-relaxed shadow-lg shadow-purple-600/20 max-w-[85%]">
                  {selectedQA.question}
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
                  <Image
                    src="/riya-avatar.jpg"
                    alt="Riya"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Novi AI Response Bubble */}
              <AnimatePresence mode="wait">
                {typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                      N
                    </div>
                    <div className="px-4 py-3.5 rounded-2xl rounded-tl-sm bg-foreground/[0.04] border border-foreground/10 flex items-center gap-1.5">
                      <span className="typing-dot w-2 h-2 rounded-full bg-purple-500" />
                      <span className="typing-dot w-2 h-2 rounded-full bg-purple-500" />
                      <span className="typing-dot w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedQA.response}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                      N
                    </div>
                    <div className="p-3.5 rounded-2xl rounded-tl-sm bg-foreground/[0.04] border border-foreground/10 text-foreground/90 text-xs sm:text-sm leading-relaxed shadow-sm max-w-[85%]">
                      {selectedQA.response}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Suggested responses */}
            <div className="pt-3 border-t border-foreground/10 space-y-2">
              <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">
                Suggested responses:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {qaOptions.slice(1).map((item) => (
                  <button
                    key={item.question}
                    onClick={() => handleSelect(item)}
                    disabled={typing}
                    className={`text-[11px] px-3 py-1.5 rounded-xl border transition-all font-medium ${
                      selectedQA.question === item.question && !typing
                        ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                        : "bg-foreground/[0.02] border-foreground/10 text-foreground/75 hover:bg-foreground/[0.05] hover:border-purple-500/30"
                    }`}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 rounded-2xl bg-foreground/[0.03] border border-foreground/10 focus-within:border-purple-500/50 px-3 py-2 transition-colors">
              <input
                type="text"
                placeholder="Ask Novi anything..."
                className="flex-1 bg-transparent text-xs sm:text-sm outline-none placeholder:text-foreground/40 text-foreground"
              />
              <button
                aria-label="Send message"
                className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
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
            <h4 className="font-bold text-sm text-foreground">
              Novi can help you with:
            </h4>

            <div className="space-y-3 text-xs sm:text-sm font-medium text-foreground/80">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{cap}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-3 border-t border-foreground/10">
              <div className="flex items-center gap-2 text-[11px] font-bold text-purple-600 dark:text-purple-400">
                <MessageSquare className="w-3.5 h-3.5" />
                Always remembers your story
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}