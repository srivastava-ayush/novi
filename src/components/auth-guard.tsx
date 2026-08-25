"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAuth, homeForRole } from "@/lib/auth-context";
import type { UserRole } from "@/lib/api";
import NoviMark from "@/components/novi-mark";

export function FullPageLoader({ label = "Getting things ready…" }: { label?: string }) {
  return (
    <div className="min-h-dvh grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <NoviMark size="lg" className="animate-pulse-glow" />
        <p className="text-sm text-foreground/50">{label}</p>
      </div>
    </div>
  );
}

/**
 * Client-side route protection. This is UX only — the FastAPI backend
 * remains the source of truth for authorization on every request.
 */
export function RequireRole({
  role,
  children,
}: {
  role?: UserRole;
  children: ReactNode;
}) {
  const { status, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    } else if (status === "authenticated" && role && user && user.role !== role) {
      router.replace(homeForRole(user.role));
    }
  }, [status, user, role, router]);

  const allowed =
    status === "authenticated" && user !== null && (!role || user.role === role);

  if (!allowed) return <FullPageLoader />;
  return <>{children}</>;
}

/** For /login and /signup: bounce already-authenticated users to their home. */
export function GuestOnly({ children }: { children: ReactNode }) {
  const { status, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && user) {
      router.replace(homeForRole(user.role));
    }
  }, [status, user, router]);

  if (status !== "unauthenticated") return <FullPageLoader />;
  return <>{children}</>;
}
