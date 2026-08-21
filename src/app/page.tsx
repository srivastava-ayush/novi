"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./landing_section/hero";
import HowItWorks from "./landing_section/how-it-works";
import ForStudents from "./landing_section/for-students";
import AboutUs from "./landing_section/about-us";
import { useTheme } from "./components/theme-provider";
import Link from "next/link";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-black/10 dark:border-white/10"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-xl flex items-center justify-center border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-sm">N</span>
          </div>

          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/#for-students"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            For Students
          </Link>

          <Link
            href="/#for-parents"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            For Parents
          </Link>

          <Link
            href="/#universities"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Universities
          </Link>

          <Link
            href="/#about-us"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/signin"
            className="hidden sm:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
          >
            Sign In
          </Link>

          <Link
            href="/careers"
            className="btn-primary !py-2.5 !px-5 !text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

function LandingCurtain() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="landing-curtain" aria-hidden="true">
      <div className="landing-curtain-logo flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <span className="text-white font-bold text-2xl" style={{ fontFamily: "var(--font-display)" }}>N</span>
        </div>
        <span className="text-white/80 text-sm font-medium tracking-widest uppercase">Novi</span>
      </div>
    </div>
  );
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = el.querySelectorAll(".scroll-reveal, .scroll-reveal-scale, .stagger-reveal");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LandingCurtain />
      <div className="mesh-gradient-bg" />
      <NavBar />
      <main className="relative z-10" ref={revealRef}>
        <Hero />
        <HowItWorks />
        <ForStudents />
        <AboutUs />
      </main>
    </div>
  );
}
