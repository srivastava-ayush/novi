"use client";

import { useMemo, useState } from "react";
import type { Career } from "../../data/career";
import CareerCard from "./career-card";

type Props = {
  careers: Career[];
};

export default function CareerSearch({ careers }: Props) {
  const [query, setQuery] = useState("");

  const filteredCareers = useMemo(() => {
    const value = query.toLowerCase().trim();

    if (!value) return careers;

    return careers.filter((career) => {
      const searchableText = [
        career.title,
        career.category,
        career.shortDescription,
        ...career.skills,
        ...career.interests,
        ...career.subjects,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(value);
    });
  }, [query, careers]);

  const suggestions = [
    "Artificial Intelligence",
    "Medicine",
    "Design",
    "Entrepreneurship",
    "Finance",
    "Psychology",
  ];

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />

          <div className="relative flex items-center rounded-2xl border border-black/10 dark:border-white/10 bg-background/80 dark:bg-white/[0.04] backdrop-blur-xl px-5 py-4 shadow-xl">
            <svg
              className="w-5 h-5 text-foreground/30 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search careers, interests or skills..."
              className="w-full bg-transparent outline-none px-4 text-base text-foreground placeholder:text-foreground/30"
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                className="w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:text-foreground transition-colors"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setQuery(suggestion)}
              className="px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-background/50 text-xs text-foreground/40 hover:text-primary hover:border-primary/20 transition-all"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {filteredCareers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCareers.map((career, index) => (
            <CareerCard
              key={career.slug}
              career={career}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We couldn't find that career
          </h3>

          <p className="text-sm text-foreground/40">
            Try searching for another interest, subject or skill.
          </p>
        </div>
      )}
    </div>
  );
}