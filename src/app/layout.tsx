import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utkarsh Jaiswal — AI & Data Science",
  description:
    "Building AI-powered systems at IIT Jodhpur. Available for internships and freelance.",
  openGraph: {
    title: "Utkarsh Jaiswal",
    description: "AI & Data Science | IIT Jodhpur",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  keywords: [
    "AI",
    "Data Science",
    "IIT Jodhpur",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable}`}>
        <div className="grain-overlay" />
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="ambient-blob blob-1" />
          <div className="ambient-blob blob-2" />
        </div>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
