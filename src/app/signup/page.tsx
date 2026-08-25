import type { Metadata } from "next";
import SignupView from "./signup-view";

export const metadata: Metadata = {
  title: "Create your account · Novi",
  description: "Join Novi and start discovering what makes you, you.",
};

export default function SignupPage() {
  return <SignupView />;
}
