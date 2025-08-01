"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Brain } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";
import Image from "next/image";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  // Password strength state
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: "",
    checks: {
      length: false,
      lowercase: false,
      uppercase: false,
      number: false,
      special: false,
    }
  });

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.replace("/dashboard");
      }
    };
    checkAuth();
  }, [router]);

  // SECURITY IMPROVEMENT: Email validation utility
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // SECURITY IMPROVEMENT: Input sanitization
  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  // Password strength checker
  const checkPasswordStrength = (password: string) => {
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };

    const score = Object.values(checks).filter(Boolean).length;

    let feedback = "";
    let strengthColor = "";

    if (password.length === 0) {
      feedback = "";
      strengthColor = "";
    } else if (score < 3) {
      feedback = "Weak";
      strengthColor = "text-red-600";
    } else if (score < 4) {
      feedback = "Fair";
      strengthColor = "text-yellow-600";
    } else if (score < 5) {
      feedback = "Good";
      strengthColor = "text-blue-600";
    } else {
      feedback = "Strong";
      strengthColor = "text-green-600";
    }

    return { score, feedback, checks, strengthColor };
  };

  // Update password strength when password changes
  useEffect(() => {
    if (!isLogin && password) {
      const strength = checkPasswordStrength(password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength({
        score: 0,
        feedback: "",
        checks: {
          length: false,
          lowercase: false,
          uppercase: false,
          number: false,
          special: false,
        }
      });
    }
  }, [password, isLogin]);

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // SECURITY IMPROVEMENT: Validate and sanitize inputs
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedPassword = password; // Don't sanitize password, just validate length

      if (!isValidEmail(sanitizedEmail)) {
        throw new Error("Please enter a valid email address");
      }
      if (sanitizedPassword.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      if (error) throw error;

      if (data.user) {
        router.replace("/dashboard");
      }
    } catch (error: any) {
      // SECURITY IMPROVEMENT: Sanitize error messages
      const sanitizedError = error.message?.includes('Invalid login credentials')
        ? "Invalid email or password. Please try again."
        : error.message || "Login failed";
      setError(sanitizedError);
    } finally {
      setLoading(false);
    }
  };

  // Handle signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // SECURITY IMPROVEMENT: Validate and sanitize inputs
      const sanitizedEmail = sanitizeInput(email);
      const sanitizedPassword = password;

      if (!isValidEmail(sanitizedEmail)) {
        throw new Error("Please enter a valid email address");
      }
      if (sanitizedPassword.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }
      if (sanitizedPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const { data, error } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      if (error) {
        throw error;
      }

      // Simplified signup logic - check if signup was successful
      if (data.user) {
        // If user was created successfully (either new or existing unconfirmed)
        if (!data.user.email_confirmed_at) {
          // User needs email confirmation - this is normal for new signups
          setSuccess("Account created successfully! Please check your email to verify your account.");
          setTimeout(() => {
            router.replace("/complete-profile");
          }, 2000);
          return;
        } else {
          // User already exists and is confirmed
          setError("An account with this email already exists. Please sign in instead.");
          setLoading(false);
          return;
        }
      } else {
        setError("Failed to create account. Please try again.");
      }

    } catch (error: any) {
      // SECURITY IMPROVEMENT: Sanitize error messages
      const sanitizedError = error.message?.includes('already registered')
        ? "An account with this email already exists. Please sign in instead."
        : error.message || "Signup failed";
      setError(sanitizedError);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) throw error;
    } catch (error: any) {
      setError(error.message || "Google sign-in failed");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
                {/* Left side - Decorative (matching complete-profile style) */}
                <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 p-6 lg:p-12">
                  <div className="h-full flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-center mb-6"
                    >
                      <Brain className="w-16 h-16 mr-4 text-white drop-shadow-lg" />
                      <h1 className="text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">NeuroDev</h1>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl xl:text-2xl text-white/95 max-w-md mx-auto mb-6 lg:mb-8 text-center"
                    >
                      Specialized therapy for autism and dyslexia through engaging, interactive experiences
                    </motion.p>
                    <div className="relative h-48 lg:h-64 w-full">
                      <Image
                        src="/images/social_situation.jpg"
                        alt="Therapy Session Illustration"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Auth form */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center mb-8"
                  >
                    <div className="flex items-center justify-center mb-4 lg:hidden">
                      <Brain className="w-12 h-12 text-green-600 mr-3" />
                      <h1 className="text-3xl font-bold text-gray-900">NeuroDev</h1>
                    </div>
                    <motion.h2
                      key={isLogin ? "login" : "signup"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl xl:text-3xl font-bold text-gray-900 mb-2"
                    >
                      {isLogin ? "Welcome back" : "Get started"}
                    </motion.h2>
                    <motion.p
                      key={isLogin ? "login-desc" : "signup-desc"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-gray-600"
                    >
                      {isLogin ? "Sign in to your account" : "Create your account"}
                    </motion.p>
                  </motion.div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  {success && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-4 p-4 bg-green-50 text-green-600 rounded-lg text-sm"
                    >
                      {success}
                    </motion.div>
                  )}

                  <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: !isLogin ? 1 : 0,
                        height: !isLogin ? "auto" : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      {!isLogin && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="pt-6"
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                              placeholder="••••••••"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            >
                              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Password Strength Indicator - Only show during signup */}
                    {!isLogin && password && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3"
                      >
                        {/* Strength Bar */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-600">Strength:</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                passwordStrength.score < 3 ? 'bg-red-500' :
                                passwordStrength.score < 4 ? 'bg-yellow-500' :
                                passwordStrength.score < 5 ? 'bg-blue-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                            />
                          </div>
                          <span className={`text-sm font-medium ${passwordStrength.strengthColor}`}>
                            {passwordStrength.feedback}
                          </span>
                        </div>

                        {/* Requirements Checklist */}
                        <div className="grid grid-cols-1 gap-1 text-xs">
                          <div className={`flex items-center gap-2 ${passwordStrength.checks.length ? 'text-green-600' : 'text-gray-500'}`}>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordStrength.checks.length ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {passwordStrength.checks.length ? '✓' : '○'}
                            </div>
                            At least 8 characters
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className={`flex items-center gap-2 ${passwordStrength.checks.lowercase ? 'text-green-600' : 'text-gray-500'}`}>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordStrength.checks.lowercase ? 'bg-green-100' : 'bg-gray-100'}`}>
                                {passwordStrength.checks.lowercase ? '✓' : '○'}
                              </div>
                              Lowercase (a-z)
                            </div>
                            <div className={`flex items-center gap-2 ${passwordStrength.checks.uppercase ? 'text-green-600' : 'text-gray-500'}`}>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordStrength.checks.uppercase ? 'bg-green-100' : 'bg-gray-100'}`}>
                                {passwordStrength.checks.uppercase ? '✓' : '○'}
                              </div>
                              Uppercase (A-Z)
                            </div>
                            <div className={`flex items-center gap-2 ${passwordStrength.checks.number ? 'text-green-600' : 'text-gray-500'}`}>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordStrength.checks.number ? 'bg-green-100' : 'bg-gray-100'}`}>
                                {passwordStrength.checks.number ? '✓' : '○'}
                              </div>
                              Number (0-9)
                            </div>
                            <div className={`flex items-center gap-2 ${passwordStrength.checks.special ? 'text-green-600' : 'text-gray-500'}`}>
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${passwordStrength.checks.special ? 'bg-green-100' : 'bg-gray-100'}`}>
                                {passwordStrength.checks.special ? '✓' : '○'}
                              </div>
                              Special (!@#$...)
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.button
                      key={isLogin ? "login-btn" : "signup-btn"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      type="submit"
                      disabled={loading}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          {isLogin ? "Sign In" : "Create Account"}
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Divider */}
                  <div className="my-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Sign-in Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    onClick={handleGoogleSignIn}
                    disabled={googleLoading}
                    className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    {googleLoading ? (
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                      </>
                    )}
                  </motion.button>

                  <div className="mt-6 text-center">
                    <motion.button
                      key={isLogin ? "switch-to-signup" : "switch-to-login"}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError("");
                        setSuccess("");
                      }}
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                    >
                      {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </motion.button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isLogin ? 1 : 0,
                      height: isLogin ? "auto" : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    {isLogin && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-center pt-4"
                      >
                        <button
                          onClick={() => router.push("/auth/reset-password")}
                          className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          Forgot your password?
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
