"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, User } from "lucide-react";
import { usePathname } from 'next/navigation';
import { supabase } from "@/lib/supabaseClient";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const pathname = usePathname();
  const isAuthPage = pathname === '/AuthPage';

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsSignedIn(!!session);
    };
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsSignedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
        
        <div className="hidden md:flex gap-4">
          {!isAuthPage && (
            <Button variant="default" size="sm" className="flex items-center gap-2">
              {isSignedIn ? (
                <Link href="/dashboard" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
              ) : (
                <Link href="/AuthPage" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Login/Signup
                </Link>
              )}
            </Button>
          )}
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
        </div>

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
          {!isAuthPage && (
            isSignedIn ? (
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/AuthPage" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Login/Signup
                </Button>
              </Link>
            )
          )}
          <Button variant="outline" size="sm" className="w-full">
            Contact Us
          </Button>
        </nav>
      )}
    </header>
  );
}