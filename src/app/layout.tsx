import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subham Sabat — Software Engineer",
  description:
    "Software Engineer with 2+ years of experience building scalable web applications. Explore my projects, skills, and professional journey.",
  keywords: [
    "Subham Sabat",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next",
    "TypeScript",
    "Node",
    "Portfolio",
  ],
  authors: [{ name: "Subham Sabat" }],
  creator: "Subham Sabat",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Subham Sabat — Software Engineer",
    description:
      "Software Engineer with 2+ years of experience building scalable web applications.",
    siteName: "Subham Sabat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subham Sabat — Software Engineer",
    description:
      "Software Engineer with 2+ years of experience building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
