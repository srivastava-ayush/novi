"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ApiError, googleOAuthUrl } from "@/lib/api";
import { useAuth, homeForRole } from "@/lib/auth-context";
import { GuestOnly } from "@/components/auth-guard";
import {
  AuthShell,
  TextField,
  FormError,
  Divider,
  GoogleButton,
  Spinner,
} from "@/components/auth-ui";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginView() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const errors: typeof fieldErrors = {};
    if (!email.trim()) errors.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "That email doesn't look right.";
    if (!password) errors.password = "Please enter your password.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    try {
      const user = await login(email.trim(), password);
      router.replace(homeForRole(user.role));
    } catch (err) {
      setFormError(
        err instanceof ApiError
          ? err.message
          : "We couldn't log you in. Please try again."
      );
      setSubmitting(false);
    }
  }

  return (
    <GuestOnly>
      <AuthShell
        title="Welcome back"
        subtitle="Novi's been looking forward to seeing you again."
        footer={
          <>
            New to Novi?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <TextField
            label="Email"
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            error={fieldErrors.email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />

          <TextField
            label="Password"
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="Your password"
            value={password}
            error={fieldErrors.password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {formError && <FormError message={formError} />}

          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
            {submitting ? <Spinner /> : "Log in"}
          </button>

          <Divider label="or" />
          <GoogleButton onClick={() => (window.location.href = googleOAuthUrl())} />
        </form>
      </AuthShell>
    </GuestOnly>
  );
}
