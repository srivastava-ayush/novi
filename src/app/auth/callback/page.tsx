import type { Metadata } from "next";
import CallbackView from "./callback-view";

export const metadata: Metadata = {
  title: "Signing you in · Novi",
};

export default function AuthCallbackPage() {
  return <CallbackView />;
}
