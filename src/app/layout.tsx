import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://phronesis-framework.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Phronesis — Practical wisdom for AI agent systems",
    template: "%s — Phronesis",
  },
  description:
    "Phronesis is an open source Python framework for building AI agent systems with typed contracts, composable execution patterns, and observability built in.",
  applicationName: "Phronesis",
  authors: [{ name: "Eduardo Marrero González" }],
  keywords: [
    "AI agents",
    "LLM framework",
    "Python",
    "agent orchestration",
    "MCP",
    "Anthropic",
    "OpenTelemetry",
    "Pydantic",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Phronesis",
    title: "Phronesis — Practical wisdom for AI agent systems",
    description:
      "Open source Python framework for AI agent systems. Typed contracts, composable pipelines, observability built in.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phronesis — Practical wisdom for AI agent systems",
    description:
      "Open source Python framework for AI agent systems. Typed contracts, composable pipelines, observability built in.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1a17" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
