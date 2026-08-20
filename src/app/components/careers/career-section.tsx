"use client";

import { ReactNode } from "react";
import { Reveal } from "../animations/motion-wrapper";

type Props = {
  number: string;
  title: string;
  children: ReactNode;
};

export default function CareerSection({
  number,
  title,
  children,
}: Props) {
  return (
    <Reveal>
      <section className="border-t border-black/5 py-14 dark:border-white/5">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary">
              {number}
            </span>
          </div>

          <div>
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>

            <div className="mt-6">{children}</div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}