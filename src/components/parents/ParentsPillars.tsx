"use client";

import { motion } from "framer-motion";
import { Eye, MessageSquare, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "See",
    description: "Understand your child's journey.",
  },
  {
    icon: MessageSquare,
    title: "Ask",
    description: "Ask Novi questions whenever you need clarity.",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Help your child take the next step—without taking control.",
  },
];

export default function ParentsPillars() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Stay involved. Without micromanaging.
        </motion.h2>

        {/* 3 Pillars Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/50 dark:bg-surface-elevated/30 border border-foreground/5 hover:border-purple-500/20 transition-all duration-300"
              >
                {/* Purple Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>

                <p className="text-sm text-foreground/70 max-w-xs leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
