"use client";

import { useEffect, use, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth, homeForRole } from "@/lib/auth-context";
import { FullPageLoader } from "@/components/auth-guard";
import NoviMark from "@/components/novi-mark";

type SearchParams = Record<string, string | string[] | undefined>;

function firstString(value: string | string[] | undefined): string | null {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && typeof value[0] === "string") return value[0];
  return null;
}

function friendlyOAuthError(code: string): string {
  switch (code) {
    case "access_denied":
      return "Looks like you cancelled the Google sign-in. No worries — you can try again anytime.";
    case "state_mismatch":
    case "invalid_state":
      return "That sign-in attempt expired. Please try logging in again.";
    default:
      return "We couldn't complete your Google sign-in. Please try again.";
  }
}

export default function CallbackView({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = use(searchParams);
  const { refresh } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  // Derived during render — no setState needed for this branch.
  const oauthError = firstString(params.error);

  useEffect(() => {
    if (started.current || oauthError) return;
    started.current = true;

    // FastAPI set the session cookie during the OAuth callback —
    // ask it who we are now, then send the user to their home.
    refresh().then((user) => {
      if (user) router.replace(homeForRole(user.role));
      else setError("We couldn't complete your Google sign-in. Please try again.");
    });
  }, [oauthError, refresh, router]);

  if (oauthError || error) {
    const message = oauthError ? friendlyOAuthError(oauthError) : error;
    return (
      <div className="hero-gradient min-h-dvh grid place-items-center px-4">
        <div className="glass-card rounded-3xl p-8 sm:p-10 max-w-md w-full text-center animate-pop-in">
          <NoviMark size="lg" className="mx-auto mb-5" />
          <h1
            className="text-xl font-bold tracking-tight mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            That didn&apos;t work
          </h1>
          <p className="text-sm text-foreground/60 leading-relaxed mb-6">{message}</p>
          <Link href="/login" className="btn-primary justify-center w-full">
            Back to log in
          </Link>
        </div>
      </div>
    );
  }

  return <FullPageLoader label="Signing you in with Google…" />;
}
