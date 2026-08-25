import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novi — Your AI Mentor for Student Success",
  description:
    "Novi is the AI-powered Operating System for Student Success that guides you from Grade 9 to your dream university—and beyond.",
  openGraph: {
    title: "Novi — Your AI Mentor for Student Success",
    description:
      "Discover who you are. Explore what's possible. Build your path. Become who you want to be.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
