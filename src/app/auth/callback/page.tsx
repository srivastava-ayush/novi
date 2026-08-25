import type { Metadata } from "next";
import CallbackView from "./callback-view";

export const metadata: Metadata = {
  title: "Signing you in · Novi",
};

type SearchParams = Record<string, string | string[] | undefined>;

export default async function AuthCallbackPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return <CallbackView searchParams={searchParams} />;
}
