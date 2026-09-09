"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";

export default function CareersCTAFooter() {
  return (
    <section className="relative pt-8 pb-12 px-6 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Dark Sleek CTA Banner Matching Homepage */}
        <div className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-[#0c0a1f] text-white shadow-2xl">
          {/* Ambient Purple Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-12 relative z-10">
            {/* Left Column: 3D Characters */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[380px]">
                <Image
                  src="/3dboy.png"
                  alt="Novi Career Discovery"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Heading, Subtitle, Action Buttons & Checklist */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                There&apos;s a career that fits
                <br className="hidden sm:block" />
                <span className="text-gradient">the person you already are.</span>
              </h2>

              <p className="text-sm sm:text-base text-purple-300 font-medium">
                Let Novi find it. Explore thousands of careers and unlock the ones
                that truly match your interests, strengths and goals.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-purple-600/30 hover:scale-[1.02] group"
                >
                  <span>Discover My Careers</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md"
                >
                  <Compass className="w-4 h-4 text-purple-300" />
                  Explore Career Explorer
                </Link>
              </div>

              {/* 3 Checkmarks */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/70 pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Free to get started</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Built around your personality</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>Career matches you&apos;ll actually love</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mt-12 pt-8 border-t border-black/10 dark:border-foreground/10 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Col 1-2: Logo, Tagline & Social Links */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-base">
                  N
                </div>
                <span
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Novi
                </span>
              </div>

              <p className="text-sm text-foreground/50 leading-relaxed max-w-xs">
                The AI mentor and operating system for students from Grade 9 to
                their dream university.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-black/10 dark:border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-purple-500 hover:text-purple-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full border border-black/10 dark:border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-purple-500 hover:text-purple-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-black/10 dark:border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-purple-500 hover:text-purple-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full border border-black/10 dark:border-foreground/10 flex items-center justify-center text-foreground/70 hover:border-purple-500 hover:text-purple-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 3: For Students */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                For Students
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/for-students"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Career Discovery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-students"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    University Explorer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    AI Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Career Passport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: For Parents */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                For Parents
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/for-parents"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Parent Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-parents"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    How We Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-parents"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-parents"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/#about-us"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 6: Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Stay updated with Novi */}
          <div className="mt-8 pt-6 border-t border-black/10 dark:border-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="w-full max-w-xs space-y-2">
              <h4 className="text-xs font-semibold text-foreground">
                Stay updated with Novi
              </h4>
              <div className="flex items-center rounded-full border border-black/10 dark:border-foreground/10 bg-background/50 focus-within:border-purple-500 transition-colors overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-2 text-xs outline-none placeholder:text-foreground/40 text-foreground"
                />
              </div>
            </div>

            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} Novi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}