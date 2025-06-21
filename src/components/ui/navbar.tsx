"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b relative">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Brain className="h-6 w-6" />
          <span>NeuroDev Therapy</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/autism" className="text-sm font-medium hover:underline underline-offset-4">
            Autism
          </Link>
          <Link href="/dyslexia" className="text-sm font-medium hover:underline underline-offset-4">
            Dyslexia
          </Link>
          <Link href="/detection" className="text-sm font-medium hover:underline underline-offset-4">
            Detection Test
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About Us
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Contact Us
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
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
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-4 p-4 md:hidden bg-white shadow absolute w-full z-50">
          <Link href="/autism" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>
            Autism
          </Link>
          <Link href="/dyslexia" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>
            Dyslexia
          </Link>
          <Link href="/detection" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>
            Detection Test
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Button variant="outline" size="sm" className="w-full" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Button>
        </nav>
      )}
    </header>
  );
}