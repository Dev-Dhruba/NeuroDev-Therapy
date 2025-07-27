"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";

export default function CompleteProfilePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: "",
  });

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/AuthPage");
        return;
      }

      setUserEmail(user.email || "");

      // Check if profile already exists
      const { data: profile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      // Only redirect if profile exists AND has all required fields
      if (profile && profile.first_name && profile.last_name) {
        // Profile already exists and is complete, redirect to dashboard
        router.replace("/dashboard");
      }
      // If no profile exists or profile is incomplete, let user fill the form
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      // SECURITY IMPROVEMENT: Input validation and sanitization
      const sanitizedForm = {
        firstName: form.firstName.trim().replace(/[<>]/g, ''), // Basic XSS prevention
        lastName: form.lastName.trim().replace(/[<>]/g, ''),
        age: parseInt(form.age),
        location: form.location.trim().replace(/[<>]/g, '')
      };

      // Additional validation
      if (sanitizedForm.firstName.length < 1 || sanitizedForm.firstName.length > 50) {
        throw new Error("First name must be between 1-50 characters");
      }
      if (sanitizedForm.lastName.length < 1 || sanitizedForm.lastName.length > 50) {
        throw new Error("Last name must be between 1-50 characters");
      }
      if (sanitizedForm.age < 1 || sanitizedForm.age > 120) {
        throw new Error("Age must be between 1-120");
      }
      if (sanitizedForm.location.length < 1 || sanitizedForm.location.length > 100) {
        throw new Error("Location must be between 1-100 characters");
      }

      // Create user profile with sanitized data
      const { error: insertError } = await supabase
        .from("user_profiles")
        .insert({
          id: user.id,
          first_name: sanitizedForm.firstName,
          last_name: sanitizedForm.lastName,
          age: sanitizedForm.age,
          location: sanitizedForm.location,
        });

      if (insertError) throw insertError;

      setSuccess("Profile completed successfully! Redirecting to dashboard...");

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.replace("/dashboard");
      }, 2000);
    } catch (err: any) {
      // SECURITY IMPROVEMENT: Sanitize error messages
      const sanitizedError = err.message?.includes('duplicate')
        ? "Profile already exists. Redirecting to dashboard..."
        : err.message || "Profile creation failed";
      setError(sanitizedError);

      // If profile already exists, redirect anyway
      if (err.message?.includes('duplicate')) {
        setTimeout(() => {
          router.replace("/dashboard");
        }, 2000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Decorative */}
                <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 p-6 lg:p-12">
                  <div className="h-full flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
                      Complete Your Profile
                    </h2>
                    <p className="text-sm lg:text-base text-white/90 mb-6 lg:mb-8">
                      Help us personalize your therapy experience by completing your profile information.
                    </p>
                    <div className="relative h-48 lg:h-64 w-full">
                      <Image
                        src="/images/emotion_match.jpg"
                        alt="Profile Setup Illustration"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8">
                  <motion.div
                    className="text-center mb-6 lg:mb-8"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                  >
                    <h2 className="text-2xl lg:text-3xl font-bold text-green-600">
                      Welcome to NeuroDev Therapy!
                    </h2>
                    <p className="text-sm lg:text-base text-gray-600 mt-2">
                      Please complete your profile to get started
                    </p>
                    {userEmail && (
                      <p className="text-xs lg:text-sm text-gray-500 mt-1">
                        Signed in as: {userEmail}
                      </p>
                    )}
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input
                          type="number"
                          required
                          min="1"
                          max="120"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={form.age}
                          onChange={(e) => setForm({ ...form, age: e.target.value })}
                          placeholder="Enter your age"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          type="text"
                          required
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          placeholder="Enter your location"
                        />
                      </div>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-red-50 text-red-500 p-3 rounded-lg text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    {success && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-green-50 text-green-500 p-3 rounded-lg text-sm"
                      >
                        {success}
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm lg:text-base"
                    >
                      {loading ? "Creating Profile..." : "Complete Profile"}
                    </motion.button>

                    <p className="text-center mt-4">
                      <button
                        type="button"
                        onClick={async () => {
                          await supabase.auth.signOut();
                          router.replace("/AuthPage");
                        }}
                        className="text-gray-600 hover:text-gray-700 font-medium text-sm lg:text-base"
                      >
                        Sign out and use different account
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Brain className="h-6 w-6" />
              <span>NeuroDev Therapy</span>
            </Link>
            <p className="text-sm text-gray-500 md:text-base">
              Providing specialized therapy for individuals with autism and dyslexia.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Resources</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Blog
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Research
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Testimonials
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Support</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  FAQ
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Community
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm hover:underline">
                  Privacy
                </Link>
                <Link href="#" className="text-sm hover:underline">
                  Terms
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} NeuroDev Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
