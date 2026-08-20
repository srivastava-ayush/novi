"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Career } from "../../data/career";

type Props = {
  career: Career;
  index?: number;
};

export default function CareerCard({ career, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
    >
      <Link href={`/careers/${career.slug}`} className="block group">
        <div className="relative h-full rounded-3xl border border-black/5 dark:border-white/5 bg-background/60 dark:bg-white/[0.025] backdrop-blur-xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">

          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-6-6h12"
                  />
                </svg>
              </div>

              <svg
                className="w-5 h-5 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
              {career.category}
            </span>

            <h3
              className="text-2xl font-bold mt-2 mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {career.title}
            </h3>

            <p className="text-sm text-foreground/50 leading-relaxed mb-6">
              {career.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {career.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-foreground/5 text-xs text-foreground/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}