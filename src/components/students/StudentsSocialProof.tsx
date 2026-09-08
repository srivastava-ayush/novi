"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const studentTestimonials = [
  {
    quote: "Novi helped me discover my passion for AI and gave me a clear roadmap for the future. It feels like having a mentor who always understands me.",
    author: "Aarav",
    grade: "Grade 10",
  },
  {
    quote: "I was confused about which subjects to choose, but Novi made it so simple. Now I feel confident about my path.",
    author: "Riya",
    grade: "Grade 11",
  },
  {
    quote: "The career recommendations are spot on! I found internships and universities I never knew existed.",
    author: "Kabir",
    grade: "Grade 12",
  },
];

const partnerSchools = [
  { name: "DPS", subtitle: "Delhi Public School", badge: "DPS" },
  { name: "Oakridge", subtitle: "International School", badge: "OIS" },
  { name: "Pathways", subtitle: "World School", badge: "PWS" },
  { name: "Inventure", subtitle: "Academy", badge: "IA" },
  { name: "The Doon School", subtitle: "Dehradun", badge: "DS" },
];

export default function StudentsSocialProof() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real students. Real journeys.
          </motion.h2>
          <p className="text-sm text-foreground/60">
            Here&apos;s what students like you have to say about Novi.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {studentTestimonials.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-lg flex flex-col justify-between space-y-6 relative group hover:border-purple-500/30 transition-all"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-purple-600/40 dark:text-purple-400/40 transform -scale-x-100" />
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-foreground/5">
                <p className="font-bold text-sm text-foreground">
                  — {item.author}, <span className="font-normal text-foreground/60 text-xs">{item.grade}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ratings & Partner Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-foreground/10 grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Rating Metric */}
          <div className="lg:col-span-3 flex items-center gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">4.9/5</span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-foreground/60 font-medium">
                Average Rating <br />
                <span className="text-foreground/80 font-bold">From 10,000+ students</span>
              </p>
            </div>
          </div>

          {/* School Logos */}
          <div className="lg:col-span-9 flex flex-wrap items-center justify-between gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerSchools.map((school) => (
              <div key={school.name} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center font-bold text-xs text-foreground/80">
                  {school.badge}
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-foreground leading-tight">{school.name}</h4>
                  <p className="text-[10px] text-foreground/50">{school.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
