"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { Eye, EyeOff, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import zxcvbn from "zxcvbn";
import { Navbar } from "@/components/ui/navbar";

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordScore, setPasswordScore] = useState(0);

  const router = useRouter();

  // Password strength calculation
  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setPasswordScore(result.score);
    } else {
      setPasswordScore(0);
    }
  }, [password]);

  // Clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const getPasswordStrengthColor = () => {
    const colors = ['#ff4444', '#ffbb33', '#ffbb33', '#00C851', '#007E33'];
    return colors[passwordScore];
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (!password || !confirmPassword) {
        throw new Error("Please fill in all fields");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
      if (passwordScore < 3) {
        throw new Error("Please choose a stronger password");
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password: password
      });

      if (updateError) throw updateError;

      setSuccess("Password updated successfully! Redirecting to login...");
      setPassword("");
      setConfirmPassword("");

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/AuthPage");
      }, 3000);
    } catch (err: any) {
      setError(err.message);
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
                      Reset Your Password
                    </h2>
                    <p className="text-sm lg:text-base text-white/90 mb-6 lg:mb-8">
                      Choose a strong new password to secure your NeuroDev Therapy account.
                    </p>
                    <div className="relative h-48 lg:h-64 w-full">
                      <Image
                        src="/images/emotion_match.jpg"
                        alt="Security and Therapy Illustration"
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
                      Create New Password
                    </h2>
                    <p className="text-sm lg:text-base text-gray-600 mt-2">
                      Enter your new password below
                    </p>
                  </motion.div>

                  <form onSubmit={handleResetPassword} className="space-y-4 lg:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>

                      {password && (
                        <div className="mt-2">
                          <div className="h-2 rounded-full bg-gray-200 mt-2">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                width: `${(passwordScore + 1) * 20}%`,
                                backgroundColor: getPasswordStrengthColor(),
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${(passwordScore + 1) * 20}%` }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          <p className="text-xs lg:text-sm mt-1 text-gray-600">
                            Password strength: {["Very Weak", "Weak", "Fair", "Strong", "Very Strong"][passwordScore]}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm your new password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
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
                      {loading ? "Updating Password..." : "Update Password"}
                    </motion.button>

                    <p className="text-center mt-4">
                      <Link
                        href="/AuthPage"
                        className="text-green-600 hover:text-green-700 font-medium text-sm lg:text-base"
                      >
                        Back to Sign In
                      </Link>
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
