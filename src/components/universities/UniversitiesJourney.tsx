"use client";

import { motion } from "framer-motion";
import { Compass, Target, Scale, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Discover",
    description: "Explore universities, courses and countries you're interested in.",
    icon: Compass,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    btnColor: "group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  },
  {
    step: "2",
    title: "Find Your Fit",
    description: "Get personalized recommendations based on your profile and goals.",
    icon: Target,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    btnColor: "group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500",
  },
  {
    step: "3",
    title: "Compare",
    description: "See side-by-side comparisons of universities, courses and fees.",
    icon: Scale,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    btnColor: "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
  },
  {
    step: "4",
    title: "Apply",
    description: "Get step-by-step guidance on applications, deadlines and scholarships.",
    icon: FileCheck,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    btnColor: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
  },
];

export default function UniversitiesJourney() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Doodle */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-foreground leading-[1.15]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your University<br />
                Journey
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mt-3 leading-relaxed">
                Four simple steps to find, compare and apply to your dream university.
              </p>
            </div>

            {/* Doodle Annotation */}
            <div className="pt-2">
              <p className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400 italic">
                From your interests to your dream campus 🎓 ✨
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Journey Step Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 hover:border-purple-500/30 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-foreground">
                        <span className="text-purple-600 dark:text-purple-400">{item.step}.</span>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-foreground/65 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <div className={`w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 transition-all ${item.btnColor}`}>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
