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

export default function SignupView() {
  const { signup } = useAuth();
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
    if (password.length < 8) errors.password = "Your password needs at least 8 characters.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    try {
      const user = await signup(email.trim(), password);
      router.replace(homeForRole(user.role));
    } catch (err) {
      setFormError(
        err instanceof ApiError
          ? err.message
          : "We couldn't create your account. Please try again."
      );
      setSubmitting(false);
    }
  }

  return (
    <GuestOnly>
      <AuthShell
        title="Create your account"
        subtitle="Novi gets to know you through real conversations — and helps you figure out what's next."
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Log in
            </Link>
          </>
        }
      >
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <TextField
            label="Email"
            id="signup-email"
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
            id="signup-password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            error={fieldErrors.password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {formError && <FormError message={formError} />}

          <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
            {submitting ? <Spinner /> : "Create account"}
          </button>

          <Divider label="or" />
          <GoogleButton onClick={() => (window.location.href = googleOAuthUrl())} />
        </form>
      </AuthShell>
    </GuestOnly>
  );
}
