"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { careers } from "../data/career";
import CareerSearch from "../components/careers/career-search";
import AICareerMatch from "../components/careers/career-match";

export default function CareersPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute top-[30%] right-[-200px] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] rounded-full bg-accent-warm/10 blur-3xl" />
      </div>

      
      <nav className="relative z-30 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-white font-bold">N</span>
          </div>

          <span
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          ← Back home
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-16 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Career Discovery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What could
            <br />
            <span className="gradient-text">you become?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-2xl mx-auto mt-7 text-lg sm:text-xl text-foreground/50 leading-relaxed"
          >
            There are thousands of careers you've probably never heard of.
            Novi helps you discover the ones that could be right for you.
          </motion.p>
        </div>
      </section>

      
      <section
        id="career-search"
        className="relative z-10 max-w-7xl mx-auto px-6 pb-24"
      >
        <CareerSearch careers={careers} />
      </section>

      
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <AICareerMatch />
      </section>

      
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="rounded-3xl border border-black/5 dark:border-white/5 bg-background/50 p-10 sm:p-14">
          <p className="text-sm text-primary font-semibold uppercase tracking-widest mb-4">
            Your future isn't one fixed path
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start exploring what could be possible.
          </h2>

          <p className="text-foreground/40 mb-7">
            The best career isn't always the one you've heard about before.
          </p>

          <Link href="/" className="btn-secondary">
            Back to Novi
          </Link>
        </div>
      </section>
    </main>
  );
}