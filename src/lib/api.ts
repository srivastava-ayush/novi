export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export type UserRole = "student" | "parent";

export interface User {
  id: string;
  email: string;
  /** OAuth signups skip role collection — null until the user picks one. */
  role?: UserRole | null;
  is_verified?: boolean;
  onboarding_completed?: boolean;
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const STATUS_MESSAGES: Record<number, string> = {
  400: "That request didn't look quite right. Please double-check your details.",
  401: "Invalid email or password.",
  403: "You don't have access to that.",
  404: "We couldn't reach that part of Novi. Is the backend running?",
  409: "An account with this email already exists. Try logging in instead.",
  422: "Please double-check the highlighted fields and try again.",
  429: "Too many attempts. Take a short break and try again.",
};

async function extractErrorMessage(res: Response): Promise<string> {
  try {
    const data: unknown = await res.json();
    const detail = (data as { detail?: unknown } | null)?.detail;
    if (typeof detail === "string" && detail.trim()) {
      return detail.replace(/^Value error,\s*/i, "");
    }
    if (Array.isArray(detail)) {
      for (const item of detail) {
        const msg = (item as { msg?: unknown } | null)?.msg;
        if (typeof msg === "string" && msg.trim()) {
          return msg.replace(/^Value error,\s*/i, "");
        }
      }
    }
    const message = (data as { message?: unknown } | null)?.message;
    if (typeof message === "string" && message.trim()) return message;
  } catch {
    // Response had no JSON body; fall through to status-based message.
  }
  if (res.status >= 500) {
    return "Novi's servers hit a snag. Please try again in a moment.";
  }
  return STATUS_MESSAGES[res.status] ?? "Something went wrong. Please try again.";
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      credentials: "include",
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers ?? {}),
      },
    });
  } catch {
    throw new ApiError(
      0,
      "We can't reach Novi right now. Check your connection and try again."
    );
  }
  if (!res.ok) {
    throw new ApiError(res.status, await extractErrorMessage(res));
  }
  if (res.status === 204) return undefined as T;
  try {
    return (await res.json()) as T;
  } catch {
    return undefined as T;
  }
}

function asUser(data: unknown): User | null {
  const candidate =
    data && typeof data === "object"
      ? ((data as { user?: unknown }).user ?? data)
      : null;
  if (!candidate || typeof candidate !== "object") return null;
  const c = candidate as Record<string, unknown>;
  if (typeof c.id !== "string" || typeof c.email !== "string") return null;
  // A missing/null role is fine (OAuth users pick later); an unknown role
  // value means this isn't a Novi user payload.
  if (
    c.role !== undefined &&
    c.role !== null &&
    c.role !== "student" &&
    c.role !== "parent"
  ) {
    return null;
  }
  return candidate as User;
}

async function normalizeAuthResponse(data: unknown): Promise<User> {
  // Some backends return the user directly, others return tokens plus a
  // session cookie. If the payload isn't a user, ask /me who we are.
  const user = asUser(data);
  if (user) return user;
  return getCurrentUser();
}

export async function register(email: string, password: string): Promise<User> {
  const data = await request<unknown>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return normalizeAuthResponse(data);
}

export async function login(email: string, password: string): Promise<User> {
  const data = await request<unknown>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  return normalizeAuthResponse(data);
}

export async function updateRole(role: UserRole): Promise<User> {
  const data = await request<User>("/api/auth/me", {
    method: "PATCH",
    body: JSON.stringify({ role }),
  });
  return asUser(data) ?? data;
}

/** Finishes a Google signup: exchanges the pending novi_oauth_signup
 *  cookie for a real session, creating the user with the chosen role. */
export async function completeGoogleSignup(role: UserRole): Promise<User> {
  const data = await request<unknown>("/api/auth/google/complete", {
    method: "POST",
    body: JSON.stringify({ role }),
  });
  return normalizeAuthResponse(data);
}

export async function getCurrentUser(): Promise<User> {
  return request<User>("/api/auth/me");
}

export async function logout(): Promise<void> {
  try {
    await request<void>("/api/auth/logout", { method: "POST" });
  } catch {
    // Clearing local state matters more than the server call succeeding.
  }
}

export async function sendChatMessage(message: string): Promise<string> {
  const data = await request<{ message?: unknown }>("/api/chat/message", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
  const reply = data?.message;
  if (typeof reply !== "string" || !reply.trim()) {
    throw new ApiError(
      502,
      "Novi's reply got lost on the way. Please send that again."
    );
  }
  return reply;
}

export function googleOAuthUrl(nextPath?: string): string {
  const params = new URLSearchParams();
  if (nextPath) params.set("next", nextPath);
  const query = params.toString();
  return `${API_URL}/api/auth/google${query ? `?${query}` : ""}`;
}
