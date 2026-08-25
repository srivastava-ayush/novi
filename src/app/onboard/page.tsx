import type { Metadata } from "next";
import OnboardView from "./onboard-view";

export const metadata: Metadata = {
  title: "Welcome · Novi",
  description: "Tell Novi who you are so we can tailor everything to you.",
};

export default async function OnboardPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const params = await searchParams;
  return <OnboardView isGoogleSignup={params.source === "google"} />;
}
