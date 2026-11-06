import "./globals.css";
import { Oxanium } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/LanguageContext";

const oxaniumFont = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maxim Degtiarev | Full-Stack Web Developer",
  description:
    "Full-stack web developer with 4+ years building production apps with Next.js, React, TypeScript and Node.js — booking platforms, online stores, subscription products, Shopify and WordPress.",
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxaniumFont.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
