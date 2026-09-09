"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth, homeForRole } from "@/lib/auth-context";
import { FullPageLoader } from "@/components/auth-guard";
import NoviMark from "@/components/novi-mark";

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

export default function CallbackView() {
  const { refresh } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oauthError = params.get("error");

    if (oauthError) {
      // URL param is only visible client-side on this statically-exported page.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError(friendlyOAuthError(oauthError));
      return;
    }

    if (started.current) return;
    started.current = true;

    // FastAPI set the session cookie during the OAuth callback —
    // ask it who we are now, then send the user to their home.
    refresh().then((user) => {
      if (user) router.replace(homeForRole(user.role));
      else setError("We couldn't complete your Google sign-in. Please try again.");
    });
  }, [refresh, router]);

  if (error) {
    const message = error;
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
