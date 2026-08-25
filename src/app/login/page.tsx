import type { Metadata } from "next";
import LoginView from "./login-view";

export const metadata: Metadata = {
  title: "Log in · Novi",
  description: "Log back in to Novi and pick up where you left off.",
};

export default function LoginPage() {
  return <LoginView />;
}
