import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Kumar Singh — Software Developer",
  description:
    "Software Developer with 7+ years of experience building scalable enterprise and consumer-facing web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Manish Kumar Singh",
  ],
  openGraph: {
    title: "Manish Kumar Singh — Software Developer",
    description:
      "Software Developer | React · Next.js · TypeScript · 7+ Years Experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
