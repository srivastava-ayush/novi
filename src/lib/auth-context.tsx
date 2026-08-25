"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import * as api from "@/lib/api";

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthContextValue {
  user: api.User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<api.User>;
  signup: (email: string, password: string) => Promise<api.User>;
  logout: () => Promise<void>;
  refresh: () => Promise<api.User | null>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function homeForRole(role: api.UserRole | null | undefined): string {
  if (role === "parent") return "/parent";
  if (role === "student") return "/chat";
  // No role yet — send them through onboarding to pick one.
  return "/onboard";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<api.User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  const applyUser = useCallback((next: api.User | null) => {
    setUser(next);
    setStatus(next ? "authenticated" : "unauthenticated");
  }, []);

  useEffect(() => {
    let cancelled = false;
    api
      .getCurrentUser()
      .then((u) => {
        if (!cancelled) applyUser(u);
      })
      .catch(() => {
        if (!cancelled) applyUser(null);
      });
    return () => {
      cancelled = true;
    };
  }, [applyUser]);

  const login = useCallback(
    async (email: string, password: string) => {
      const u = await api.login(email, password);
      applyUser(u);
      return u;
    },
    [applyUser]
  );

  const signup = useCallback(
    async (email: string, password: string) => {
      const u = await api.register(email, password);
      applyUser(u);
      return u;
    },
    [applyUser]
  );

  const logout = useCallback(async () => {
    await api.logout();
    applyUser(null);
  }, [applyUser]);

  const refresh = useCallback(async () => {
    try {
      const u = await api.getCurrentUser();
      applyUser(u);
      return u;
    } catch {
      applyUser(null);
      return null;
    }
  }, [applyUser]);

  const value = useMemo(
    () => ({ user, status, login, signup, logout, refresh }),
    [user, status, login, signup, logout, refresh]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
