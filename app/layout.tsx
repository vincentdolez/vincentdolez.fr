import type { Metadata } from "next";
import { ViewTransition } from "react";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vincent Dolez — AI Operating Partner",
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
        url: "/og?title=Vincent+Dolez&description=AI+Operating+Partner",
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
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Header />
        <ViewTransition>
          <main>{children}</main>
        </ViewTransition>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
