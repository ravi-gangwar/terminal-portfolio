import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravi Gangwar - Terminal Portfolio",
  description:
    "Interactive terminal-style portfolio showcasing Ravi Gangwar's skills, projects, and experience",
  keywords: [
    "portfolio",
    "terminal",
    "developer",
    "software engineer",
    "react",
    "next.js",
  ],
  authors: [{ name: "Ravi Gangwar" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
