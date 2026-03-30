import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Jost, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

// Jost = Google Fonts fallback for Museo (headings) & Futura (body)
// TODO: self-host Museo (.woff2) via next/font/local when font files available
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vincent Dolez — Référent IA externalisé",
    template: "%s — Vincent Dolez",
  },
  description:
    "J'aide les dirigeants de PME à débloquer l'exécution et tirer parti de l'IA.",
  metadataBase: new URL("https://vincentdolez.fr"),
  alternates: { canonical: "https://vincentdolez.fr" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vincent Dolez",
    images: [
      {
        url: "/og?title=Vincent+Dolez&description=Référent+IA+externalisé",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${jetbrainsMono.variable}`}
    >
      <body className="pb-20 font-sans antialiased md:pb-0" suppressHydrationWarning>
        <Header />
        <ViewTransition>
          <main>{children}</main>
        </ViewTransition>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
