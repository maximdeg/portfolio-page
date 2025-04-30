import "./globals.css";
import { Oxanium } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const oxaniumFont = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maxim Degtiarev | Portfolio",
  description: "Software Developer | Web Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Maxim Degtiarev | Portfolio</title>
        <meta name="robots" content="all" />
        <meta name="description" content="" key="desc" />
      </Head>
      <body className={oxaniumFont.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
