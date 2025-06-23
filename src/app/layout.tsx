import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroDev Therapy",
  description:
    "Neurodev Therapy is an open-source project designed to Detect Autism Spectrum Disorder (ASD) and Dyslexia Provide module-based therapies tailored to each condition Engage users with gamified, interactive learning experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Brain className="h-6 w-6" />
              <span>NeuroDev Therapy</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/autism"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Autism
              </Link>
              <Link
                href="/dyslexia"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Dyslexia
              </Link>
              <Link
                href="/detection"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Detection Test
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                About Us
              </Link>
            </nav>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Contact Us
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </header>
        <main className="flex-1 min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
