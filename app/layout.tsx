import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./Helvetica.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Core",
  description: "Open Core Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
