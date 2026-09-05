"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Send } from "lucide-react";

export default function ParentsCTAFooter() {
  return (
    <section className="relative pt-12 pb-16 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Banner CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 p-8 sm:p-12 shadow-2xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* 3D Mascot */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <Image
                  src="/3dboy.png"
                  alt="Novi AI Companion"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Middle Message & Checklist */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your child&apos;s future is too important to navigate without clarity.
              </h2>
              
              <p className="text-sm sm:text-base text-purple-600 dark:text-purple-300 font-medium">
                Meet Novi—the AI mentor that helps students find direction while keeping parents informed.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-foreground/75 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span>Free to get started</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span>Built around your child</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span>Stay informed without pressure</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <Link
                href="/signin"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 text-center group"
              >
                <span>Get Started with Novi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/signin"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-foreground/15 bg-surface/70 hover:bg-surface text-foreground font-semibold text-sm transition-all text-center shadow-sm"
              >
                Explore Parent Dashboard
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Global Page Footer */}
        <footer className="pt-12 border-t border-foreground/10 text-xs text-foreground/60 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            
            {/* Col 1-2: Brand Intro */}
            <div className="col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-purple-500/25">
                  N
                </div>
                <span className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Novi
                </span>
              </div>
              <p className="text-foreground/50 max-w-xs leading-relaxed text-xs">
                The AI mentor and operating system for student success from Grade 9 to dream university.
              </p>
            </div>

            {/* Col 3: For Students */}
            <div className="space-y-2.5">
              <h5 className="font-bold text-foreground text-xs">For Students</h5>
              <ul className="space-y-2">
                <li><Link href="/#how-it-works" className="hover:text-foreground transition-colors">How it Works</Link></li>
                <li><Link href="/#for-students" className="hover:text-foreground transition-colors">Career Guidance</Link></li>
                <li><Link href="/#universities" className="hover:text-foreground transition-colors">University Match</Link></li>
                <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">Roadmap Builder</Link></li>
              </ul>
            </div>

            {/* Col 4: For Parents */}
            <div className="space-y-2.5">
              <h5 className="font-bold text-foreground text-xs">For Parents</h5>
              <ul className="space-y-2">
                <li><Link href="/for-parents" className="hover:text-foreground transition-colors font-semibold text-purple-600 dark:text-purple-400">Parent Dashboard</Link></li>
                <li><Link href="/for-parents" className="hover:text-foreground transition-colors">Progress Insights</Link></li>
                <li><Link href="/for-parents" className="hover:text-foreground transition-colors">Mentor AI</Link></li>
                <li><Link href="/for-parents" className="hover:text-foreground transition-colors">School Partnerships</Link></li>
              </ul>
            </div>

            {/* Col 5: Company & Legal */}
            <div className="space-y-2.5">
              <h5 className="font-bold text-foreground text-xs">Company</h5>
              <ul className="space-y-2">
                <li><Link href="/#about-us" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/coming-soon" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Col 6: Stay Updated / Newsletter */}
            <div className="col-span-2 md:col-span-1 space-y-2.5">
              <h5 className="font-bold text-foreground text-xs">Stay updated with Novi</h5>
              <div className="flex items-center gap-1.5 p-1 rounded-xl border border-foreground/15 bg-surface/50">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-xs px-2.5 py-1 text-foreground placeholder:text-foreground/40 outline-none w-full"
                />
                <button 
                  className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center flex-shrink-0 hover:bg-purple-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-foreground/40">
            <p>© {new Date().getFullYear()} Novi Education Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/coming-soon" className="hover:text-foreground">Privacy</Link>
              <Link href="/coming-soon" className="hover:text-foreground">Terms</Link>
              <Link href="/coming-soon" className="hover:text-foreground">Security</Link>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}
