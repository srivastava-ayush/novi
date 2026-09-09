"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scale, ArrowRight, Trash2, Plus, CheckCircle2 } from "lucide-react";

interface SlotItem {
  id: string;
  name: string;
  detail: string;
  badge: string;
  color: string;
}

const initialSlots: SlotItem[] = [
  {
    id: "1",
    name: "Stanford University",
    detail: "USA • #3",
    badge: "S",
    color: "bg-rose-600 text-white",
  },
  {
    id: "2",
    name: "MIT",
    detail: "USA • #1",
    badge: "M",
    color: "bg-red-700 text-white",
  },
  {
    id: "3",
    name: "Oxford University",
    detail: "UK • #5",
    badge: "O",
    color: "bg-blue-800 text-white",
  },
];

export default function UniversitiesCompareTool() {
  const [slots, setSlots] = useState<SlotItem[]>(initialSlots);

  const removeSlot = (id: string) => {
    setSlots((prev) => prev.filter((s) => s.id !== id));
  };

  const addSlot = () => {
    if (slots.length >= 4) return;
    const newId = String(Date.now());
    setSlots((prev) => [
      ...prev,
      {
        id: newId,
        name: "UC Berkeley",
        detail: "USA • #4",
        badge: "B",
        color: "bg-amber-600 text-white",
      },
    ]);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-surface/70 dark:bg-surface-elevated/40 border border-foreground/10 shadow-xl">
          
          {/* Left Column: Heading & CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>

            <div>
              <h3 className="font-extrabold text-xl text-foreground">Compare Universities</h3>
              <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
                Shortlist and compare 2-4 universities to make the best decision.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-all shadow-md shadow-purple-600/20 group">
              <span>Start Comparing</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center Column: Comparison Slots (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            {slots.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-surface dark:bg-surface-elevated border border-foreground/10 flex items-center justify-between gap-2 shadow-sm"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-7 h-7 rounded-lg ${item.color} font-bold text-xs flex items-center justify-center flex-shrink-0`}>
                    {item.badge}
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-xs text-foreground truncate">{item.name}</h5>
                    <p className="text-[10px] text-foreground/50">{item.detail}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeSlot(item.id)}
                  className="text-foreground/40 hover:text-rose-500 p-1 transition-colors"
                  aria-label="Remove university"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {/* Add Slot Button */}
            {slots.length < 4 && (
              <button
                onClick={addSlot}
                className="p-3.5 rounded-2xl border-2 border-dashed border-foreground/15 hover:border-purple-500/40 text-foreground/60 hover:text-purple-600 flex items-center justify-center gap-2 text-xs font-bold transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add University</span>
              </button>
            )}
          </div>

          {/* Right Column: Compare by Checklist (3 cols) */}
          <div className="lg:col-span-3 space-y-3 lg:border-l border-foreground/10 lg:pl-6">
            <h4 className="font-bold text-xs text-foreground uppercase tracking-wider">Compare by:</h4>
            
            <div className="space-y-2 text-xs text-foreground/75 font-medium">
              {[
                "Rankings & reputation",
                "Fees & scholarships",
                "Courses & specializations",
                "Campus life & location",
                "Career outcomes",
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
