import "./globals.css";
import { Oxanium } from "next/font/google";

const oxaniumFont = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxaniumFont.className}>{children}</body>
    </html>
  );
}
