import type { Metadata } from "next";
import ChatView from "./chat-view";

export const metadata: Metadata = {
  title: "Novi",
  description: "Chat with Novi — your AI mentor getting to know you.",
};

export default function ChatPage() {
  return <ChatView />;
}
