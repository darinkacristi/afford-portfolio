import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

// Ambas tipografías se sirven desde /public/fonts (sin depender de Google Fonts)
const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/poppins-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-Regular.woff2",
  variable: "--font-cal",
  display: "swap",
  fallback: ["Poppins", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.tagline}`,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/afford-iso-green.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${calSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
