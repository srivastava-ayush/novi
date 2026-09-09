"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Novi helped me discover my passion for AI and gave me a clear roadmap for the future. It feels like having a mentor who always understands me.",
    author: "Aarav",
    grade: "Grade 10",
    initials: "A",
    color: "from-purple-500 to-indigo-600",
  },
  {
    quote:
      "I was confused about which subjects to choose, but Novi made it so simple. Now I feel confident about my path.",
    author: "Riya",
    grade: "Grade 11",
    initials: "R",
    color: "from-pink-500 to-rose-600",
  },
  {
    quote:
      "The career recommendations are spot on! I found internships and universities I never knew existed.",
    author: "Kabir",
    grade: "Grade 12",
    initials: "K",
    color: "from-emerald-500 to-teal-600",
  },
];

const partnerSchools = [
  { name: "DPS", subtitle: "Delhi Public School", badge: "DPS" },
  { name: "Oakridge", subtitle: "International School", badge: "OIS" },
  { name: "Pathways", subtitle: "World School", badge: "PWS" },
  { name: "Inventure", subtitle: "Academy", badge: "IA" },
  { name: "The Doon School", subtitle: "Dehradun", badge: "DS" },
  { name: "St. Xavier's", subtitle: "Mumbai", badge: "SX" },
  { name: "Vasant Valley", subtitle: "New Delhi", badge: "VV" },
];

export default function StudentsSocialProof() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="orb top-0 left-1/4 w-[480px] h-[480px] bg-purple-500/[0.07]" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase"
          >
            <Star className="w-3.5 h-3.5" />
            Student Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real students. <span className="text-gradient">Real journeys.</span>
          </motion.h2>
          <p className="text-sm text-foreground/60">
            Here&apos;s what students like you have to say about Novi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
            >
              {/* Gradient wash on hover */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 pointer-events-none`}
              />

              <div className="space-y-4 relative">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-purple-600/40 dark:text-purple-400/40 transform -scale-x-100" />
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-foreground/5 flex items-center gap-3 relative">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.color} text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">
                    {item.author}
                    <span className="text-foreground/40 font-normal">
                      {" "}
                      · {item.grade}
                    </span>
                  </p>
                  <p className="text-[11px] text-foreground/50 flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-purple-500" />
                    Verified Novi student
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ratings & Partner Schools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-foreground/10 grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Rating Metric */}
          <div className="lg:col-span-3 flex items-center gap-4">
            <div className="space-y-1.5 p-4 rounded-2xl bg-surface/60 dark:bg-surface-elevated/30 border border-foreground/5">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  4.9<span className="text-foreground/50 text-lg">/5</span>
                </span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-foreground/60 font-medium">
                Average rating from{" "}
                <span className="text-foreground/80 font-bold">
                  10,000+ students
                </span>
              </p>
            </div>
          </div>

          {/* School Logos Marquee */}
          <div className="lg:col-span-9">
            <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider mb-4">
              Trusted by leading schools
            </p>
            <div className="marquee [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee-track">
                {[...partnerSchools, ...partnerSchools].map((school, idx) => (
                  <div
                    key={`${school.name}-${idx}`}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-surface/60 dark:bg-surface-elevated/30 border border-foreground/5 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 mr-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/15 flex items-center justify-center font-bold text-xs text-purple-600 dark:text-purple-400">
                      {school.badge}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground leading-tight">
                        {school.name}
                      </h4>
                      <p className="text-[10px] text-foreground/50">
                        {school.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}