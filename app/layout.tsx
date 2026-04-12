import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    "Next.js",
    "TypeScript",
    "Node.js",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
