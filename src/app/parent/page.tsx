import type { Metadata } from "next";
import ParentView from "./parent-view";

export const metadata: Metadata = {
  title: "Parents · Novi",
  description: "The Novi parent experience is coming soon.",
};

export default function ParentPage() {
  return <ParentView />;
}
