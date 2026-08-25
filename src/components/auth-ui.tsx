"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import NoviMark from "@/components/novi-mark";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="hero-gradient min-h-dvh flex flex-col">
      <header className="px-6 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 group"
          aria-label="Novi home"
        >
          <NoviMark size="sm" className="group-hover:scale-105 transition-transform" />
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi
          </span>
        </Link>
      </header>
      <main className="flex-1 grid place-items-center px-4 pb-16">
        <div className="w-full max-w-md animate-pop-in">
          <div className="glass-card rounded-3xl p-7 sm:p-9">
            <h1
              className="text-2xl font-bold tracking-tight mb-1.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
            <p className="text-sm text-foreground/60 leading-relaxed mb-7">
              {subtitle}
            </p>
            {children}
          </div>
          {footer && (
            <p className="text-center text-sm text-foreground/60 mt-6">{footer}</p>
          )}
        </div>
      </main>
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string | null;
}

export function TextField({ label, id, error, ...inputProps }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        {...inputProps}
        className={`w-full rounded-xl border bg-surface-elevated px-4 py-3 text-sm outline-none transition-all placeholder:text-foreground/35 focus:ring-2 focus:ring-primary/40 ${
          error
            ? "border-red-400/70 focus:border-red-400"
            : "border-black/10 dark:border-white/10 focus:border-primary"
        }`}
      />
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-500/10 px-3.5 py-3 text-sm text-red-600 dark:text-red-300"
    >
      <svg
        className="w-4 h-4 mt-0.5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <span>{message}</span>
    </div>
  );
}

export function GoogleIcon() {
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function GoogleButton({
  onClick,
  loading = false,
}: {
  onClick: () => void;
  loading?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="w-full inline-flex items-center justify-center gap-3 rounded-full border-2 border-black/10 dark:border-white/15 bg-surface-elevated px-5 py-3 text-sm font-semibold transition-all hover:border-black/25 dark:hover:border-white/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer disabled:cursor-not-allowed"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <GoogleIcon />
          Continue with Google
        </>
      )}
    </button>
  );
}

export function Spinner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 animate-spin ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-5" role="separator" aria-label={label}>
      <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      <span className="text-xs uppercase tracking-wider text-foreground/40">{label}</span>
      <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
    </div>
  );
}
