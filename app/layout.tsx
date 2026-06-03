import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vincent Dolez — Partenaire IA · Tech leader / CTO détaché — legacy rescue",
    template: "%s — Vincent Dolez",
  },
  description:
    "Partenaire IA et tech leader, 20 ans CTO. Je fais livrer l'IA dans le code et le métier : legacy rescue pour éditeurs logiciel, outillage métier pour PME.",
  metadataBase: new URL("https://vincentdolez.fr"),
  alternates: { canonical: "https://vincentdolez.fr" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vincent Dolez",
    images: [
      {
        url: "/og?title=Vincent+Dolez&description=Partenaire+IA+%C2%B7+Tech+leader+%2F+CTO+d%C3%A9tach%C3%A9",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vincentdolez",
    creator: "@vincentdolez",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfcf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${jetbrainsMono.variable}`}
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
