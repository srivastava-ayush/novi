"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { ApiError, sendModule1Message, getOnboardingProfile, type Module1ChatResponse } from "@/lib/api";
import { useAuth } from "@/lib/auth-context";
import { RequireRole } from "@/components/auth-guard";
import NoviMark from "@/components/novi-mark";

interface ChatMessage {
  id: string;
  author: "novi" | "student";
  content: string;
}

const OPENING_MESSAGE =
  "Hey! I'm Novi.\n\nI'd like to get to know you — there are no right or wrong answers here.\n\nWhat do you enjoy doing in your free time?";

let nextId = 1;
function makeId(): string {
  return `m${nextId++}`;
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 animate-fade-up" aria-label="Novi is typing">
      <NoviMark size="sm" />
      <div className="chat-bubble !rounded-2xl rounded-tl-md flex items-center gap-1.5 px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-primary/60 animate-dot-pulse"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  if (message.author === "student") {
    return (
      <div className="flex justify-end animate-fade-up">
        <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-br-md bg-gradient-to-br from-primary to-primary-light text-white px-4.5 py-3 shadow-[0_4px_16px_rgba(108,92,231,0.25)]">
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2.5 animate-fade-up">
      <NoviMark size="sm" />
      <div className="chat-bubble rounded-tl-md max-w-[85%] sm:max-w-[75%]">
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
}

function OnboardingProgress({ completionPercentage, missingCategories }: { completionPercentage: number; missingCategories: string[] }) {
  return (
    <div className="mb-4 p-4 rounded-xl bg-surface-elevated border border-black/5 dark:border-white/10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Onboarding Progress</span>
        <span className="text-sm font-bold text-primary">{completionPercentage}%</span>
      </div>
      <div className="h-2 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      {missingCategories.length > 0 && (
        <div className="mt-3">
          <p className="text-xs text-foreground/60 mb-1">Still exploring:</p>
          <div className="flex flex-wrap gap-1.5">
            {missingCategories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary/80"
              >
                {cat.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function OnboardingChatScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: makeId(), author: "novi", content: OPENING_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [awaitingReply, setAwaitingReply] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSent, setLastSent] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [onboardingStatus, setOnboardingStatus] = useState("in_progress");
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [missingCategories, setMissingCategories] = useState<string[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, awaitingReply, error]);

  const loadOnboardingProfile = useCallback(async () => {
    try {
      const profile = await getOnboardingProfile();
      setCompletionPercentage(profile.completion_percentage);
      setMissingCategories(profile.missing_categories);
      setOnboardingStatus(profile.onboarding_complete ? "completed" : "in_progress");
    } catch {
      // Silently fail on profile load
    }
  }, []);

  useEffect(() => {
    loadOnboardingProfile();
  }, [loadOnboardingProfile]);

  const deliver = useCallback(
    async (text: string) => {
      setError(null);
      setAwaitingReply(true);
      try {
        const response = await sendModule1Message(text, conversationId ?? undefined);
        setMessages((prev) => [...prev, { id: makeId(), author: "novi", content: response.response }]);
        setConversationId(response.conversation_id);
        setOnboardingStatus(response.onboarding_status);
        setCompletionPercentage(response.completion_percentage);
        setMissingCategories(response.missing_categories);
        setLastSent(null);
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          router.replace("/login");
          return;
        }
        setLastSent(text);
        setError(
          err instanceof ApiError
            ? err.message
            : "Something went wrong sending that message. Please try again."
        );
      } finally {
        setAwaitingReply(false);
      }
    },
    [router, conversationId]
  );

  function handleSend(e?: FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || awaitingReply) return;
    setMessages((prev) => [...prev, { id: makeId(), author: "student", content: text }]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    void deliver(text);
  }

  function handleRetry() {
    if (!lastSent || awaitingReply) return;
    setError(null);
    void deliver(lastSent);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function autoGrow(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
  }

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  const canSend = input.trim().length > 0 && !awaitingReply;

  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="border-b border-black/5 dark:border-white/10 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-3xl flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <NoviMark />
            <div className="min-w-0">
              <p
                className="font-bold leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Novi Onboarding
              </p>
              <p className="flex items-center gap-1.5 text-xs text-foreground/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Your AI mentor — getting to know you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="hidden sm:flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 py-1 pl-1 pr-3"
              title={user?.email}
            >
              <span className="w-6 h-6 rounded-full bg-accent/20 text-accent grid place-items-center text-xs font-bold uppercase">
                {user?.email.charAt(0)}
              </span>
              <span className="text-xs text-foreground/60 max-w-[140px] truncate">
                {user?.email}
              </span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              aria-label="Log out"
              title="Log out"
              className="w-9 h-9 rounded-xl grid place-items-center border border-black/10 dark:border-white/10 text-foreground/60 hover:text-foreground hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m16 17 5-5-5-5M21 12H9" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto scroll-smooth" aria-live="polite">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 space-y-4">
          <OnboardingProgress
            completionPercentage={completionPercentage}
            missingCategories={missingCategories}
          />
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {awaitingReply && <TypingIndicator />}
          <div ref={bottomRef} className="h-px" />
        </div>
      </main>

      {error && (
        <div className="mx-auto w-full max-w-3xl px-4 pb-2 animate-fade-up">
          <div role="alert" className="flex items-center justify-between gap-3 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-600 dark:text-red-300">
            <span className="leading-snug">{error}</span>
            {lastSent && (
              <button
                type="button"
                onClick={handleRetry}
                disabled={awaitingReply}
                className="shrink-0 font-semibold underline underline-offset-2 hover:opacity-80 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                Try again
              </button>
            )}
          </div>
        </div>
      )}

      <footer className="border-t border-black/5 dark:border-white/10 bg-surface/80 backdrop-blur-xl">
        <form onSubmit={handleSend} className="mx-auto w-full max-w-3xl flex items-end gap-2 px-4 pt-4 pb-2">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={autoGrow}
            onKeyDown={handleKeyDown}
            placeholder="Type your message…"
            aria-label="Message Novi"
            className="flex-1 resize-none rounded-2xl border border-black/10 dark:border-white/10 bg-surface-elevated px-4 py-3 text-sm leading-relaxed outline-none transition-all placeholder:text-foreground/35 focus:border-primary focus:ring-2 focus:ring-primary/40 max-h-[140px]"
          />
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send message"
            className="btn-primary !p-0 w-11 h-11 justify-center shrink-0 disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
            </svg>
          </button>
        </form>
        <p className="text-center text-xs text-foreground/40 pb-3">
          Novi learns about you through your conversations — every answer shapes your path.
        </p>
      </footer>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <RequireRole role="student">
      <OnboardingChatScreen />
    </RequireRole>
  );
}