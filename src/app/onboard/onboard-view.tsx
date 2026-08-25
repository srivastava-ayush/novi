"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ApiError,
  completeGoogleSignup,
  updateRole,
  type UserRole,
} from "@/lib/api";
import { useAuth, homeForRole } from "@/lib/auth-context";
import { FullPageLoader } from "@/components/auth-guard";
import { ROLE_OPTIONS } from "@/components/role-options";
import NoviMark from "@/components/novi-mark";

function isUserRole(value: unknown): value is UserRole {
  return value === "student" || value === "parent";
}

export default function OnboardView({
  isGoogleSignup = false,
}: {
  isGoogleSignup?: boolean;
}) {
  const { status, user, refresh } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<UserRole | null>(null);

  // Password-flow users already have a session and may have picked a role
  // earlier. Google signups arrive WITHOUT a session — the pending signup
  // cookie is exchanged for one once a role is chosen below.
  const settled =
    !isGoogleSignup &&
    status === "authenticated" &&
    user !== null &&
    isUserRole(user.role);

  // Google signups are unauthenticated by design until onboarding completes.
  useEffect(() => {
    if (isGoogleSignup) return;
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (settled && user) {
      router.replace(homeForRole(user.role));
    }
  }, [isGoogleSignup, status, settled, user, router]);

  async function handleSelect(role: UserRole) {
    if (submitting) return;
    setError(null);
    setSubmitting(role);
    try {
      if (isGoogleSignup && !user) {
        await completeGoogleSignup(role);
      } else {
        await updateRole(role);
      }
      await refresh();
      router.replace(homeForRole(role));
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "We couldn't save your choice. Please try again."
      );
      setSubmitting(null);
    }
  }

  if (!isGoogleSignup && (status !== "authenticated" || !user || settled)) {
    return <FullPageLoader />;
  }

  return (
    <div className="hero-gradient min-h-dvh flex flex-col">
      <header className="px-6 py-5 flex justify-center">
        <NoviMark size="md" />
      </header>
      <main className="flex-1 grid place-items-center px-4 pb-16">
        <div className="w-full max-w-lg animate-pop-in">
          <div className="text-center mb-8">
            <h1
              className="text-3xl font-bold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Welcome to Novi
            </h1>
            <p className="text-sm text-foreground/60">
              {user ? (
                <>
                  Signed in as {user.email} — tell us who you are so we can
                  tailor everything to you.
                </>
              ) : (
                <>Tell us who you are so we can tailor everything to you.</>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROLE_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                disabled={submitting !== null}
                onClick={() => handleSelect(option.value)}
                className={`glass-card rounded-3xl p-8 text-left transition-all cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,92,231,0.2)] disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0 ${
                  submitting && submitting !== option.value ? "opacity-50" : ""
                }`}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-5">
                  {option.icon}
                </span>
                <span className="block text-lg font-semibold mb-1">
                  {submitting === option.value ? (
                    <span className="inline-flex items-center gap-2">
                      Setting things up…
                    </span>
                  ) : (
                    `You are a ${option.label.toLowerCase()}`
                  )}
                </span>
                <span className="block text-sm text-foreground/50 leading-snug">
                  {option.blurb}.
                </span>
              </button>
            ))}
          </div>

          {error && (
            <p className="mt-6 text-center text-sm text-red-500 dark:text-red-300">
              {error}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
