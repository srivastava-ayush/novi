"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError, getModule1Memories, type Module1Memory } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";
import { RequireRole } from "@/components/auth-guard";
import NoviMark from "@/components/novi-mark";

const MEMORY_TYPE_COLORS: Record<string, string> = {
  interest: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  strength: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  weakness: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  goal: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  career_goal: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  skill: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  preference: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  education: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  experience: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  personality: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  learning_style: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

function formatMemoryType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function MemoryCard({ memory }: { memory: Module1Memory }) {
  const colorClass = MEMORY_TYPE_COLORS[memory.memory_type] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";

  return (
    <div className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${colorClass}`}>
              {formatMemoryType(memory.memory_type)}
            </span>
            <span className="text-xs text-foreground/50">v{memory.version}</span>
            <span className="text-xs text-foreground/50">
              Confidence: {Math.round(memory.confidence * 100)}%
            </span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">
            {memory.value}
          </p>
          {memory.normalized_value && (
            <p className="mt-1 text-xs text-foreground/50">
              Normalized: {memory.normalized_value}
            </p>
          )}
        </div>
        <span className="shrink-0 text-xs text-foreground/40">
          {memory.memory_key}
        </span>
      </div>
    </div>
  );
}

function MemoriesPage() {
  const { status, user } = useAuth();
  const router = useRouter();
  const [memories, setMemories] = useState<Module1Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchMemories() {
      try {
        const data = await getModule1Memories();
        setMemories(data);
      } catch (err) {
        setError(
          err instanceof ApiError
            ? err.message
            : "Failed to load memories"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMemories();
  }, []);

  const groupedMemories = memories.reduce((acc, memory) => {
    const type = memory.memory_type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(memory);
    return acc;
  }, {} as Record<string, Module1Memory[]>);

  if (loading) {
    return (
      <div className="hero-gradient min-h-dvh flex flex-col">
        <header className="px-6 py-5 flex justify-center">
          <NoviMark size="md" />
        </header>
        <main className="flex-1 grid place-items-center">
          <div className="animate-pulse flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/30" />
            <div className="w-8 h-8 rounded-full bg-primary/30" />
            <div className="w-8 h-8 rounded-full bg-primary/30" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="hero-gradient min-h-dvh flex flex-col">
      <header className="px-6 py-5 flex justify-center">
        <NoviMark size="md" />
      </header>
      <main className="flex-1 px-4 pb-16">
        <div className="mx-auto w-full max-w-4xl py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Your Memories
            </h1>
            <p className="text-sm text-foreground/60">
              Everything Novi has learned about you so far
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl border border-red-400/30 bg-red-500/10 text-red-600 dark:text-red-300 text-sm">
              {error}
            </div>
          )}

          {memories.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <NoviMark size="lg" className="mx-auto mb-4 opacity-50" />
              <h2 className="text-lg font-semibold mb-2">No memories yet</h2>
              <p className="text-foreground/60 max-w-md mx-auto">
                Start chatting with Novi to build your profile. Novi will remember your interests, goals, and preferences over time.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedMemories).map(([type, typeMemories]) => (
                <div key={type} className="animate-fade-up">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${MEMORY_TYPE_COLORS[type] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"}`}>
                      {formatMemoryType(type)}
                    </span>
                    <span className="text-sm text-foreground/50">({typeMemories.length})</span>
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {typeMemories.map((memory) => (
                      <MemoryCard key={memory.id} memory={memory} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function MemoriesView() {
  return (
    <RequireRole role="student">
      <MemoriesPage />
    </RequireRole>
  );
}

export default MemoriesView;