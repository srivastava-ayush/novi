"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { RequireRole } from "@/components/auth-guard";
import NoviMark from "@/components/novi-mark";

function ParentScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <div className="hero-gradient min-h-dvh flex flex-col">
      <header className="px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NoviMark size="sm" />
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi
          </span>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
        >
          Log out
        </button>
      </header>
      <main className="flex-1 grid place-items-center px-4 pb-16">
        <div className="glass-card rounded-3xl p-10 sm:p-14 max-w-md w-full text-center animate-pop-in">
          <NoviMark size="lg" className="mx-auto mb-6" />
          <h1
            className="text-2xl font-bold tracking-tight mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Parent experience coming soon.
          </h1>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We&apos;re building something thoughtful for parents and guardians — insights into
            your student&apos;s journey, without the pressure. In the meantime, your student can
            explore Novi on their own account.
          </p>
          <p className="mt-6 text-xs text-foreground/40">Signed in as {user?.email}</p>
        </div>
      </main>
    </div>
  );
}

export default function ParentView() {
  return (
    <RequireRole role="parent">
      <ParentScreen />
    </RequireRole>
  );
}
