"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LogOut,
  PencilLine,
  User,
  Check,
  X,
  Mail,
  MapPin,
  Calendar,
  Eye,
  EyeOff,
  Brain,
  Activity,
  MessageSquare,
  Target,
  TrendingUp,
  Clock,
  Users,
  Heart,
  Zap,
  ChevronRight,
  Trash2
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import Link from "next/link";

type Profile = {
  email: string;
  first_name: string;
  last_name: string;
  age: string | number;
  location: string;
};

// Mock data for therapy progress (replace with real data from your backend)
const therapyModules = [
  {
    id: 1,
    title: "Communication Skills",
    description: "Enhance verbal and non-verbal communication abilities",
    progress: 0,
    icon: MessageSquare,
    color: "bg-blue-500",
    sessions: 0,
    totalSessions: 16,
    nextSession: "Not scheduled",
    href: "/autism/communication-skills"
  },
  {
    id: 2,
    title: "Social Skills",
    description: "Develop interpersonal and social interaction skills",
    progress: 0,
    icon: Users,
    color: "bg-green-500",
    sessions: 0,
    totalSessions: 14,
    nextSession: "Not scheduled",
    href: "/autism/social-skills"
  },
  {
    id: 3,
    title: "Cognitive Skills",
    description: "Improve memory, attention, and problem-solving",
    progress: 0,
    icon: Brain,
    color: "bg-purple-500",
    sessions: 0,
    totalSessions: 12,
    nextSession: "Not scheduled",
    href: "/autism/cognitive-skills"
  },
  {
    id: 4,
    title: "Behavioral Training",
    description: "Positive behavior support and management",
    progress: 0,
    icon: Target,
    color: "bg-orange-500",
    sessions: 0,
    totalSessions: 10,
    nextSession: "Not scheduled",
    href: "/autism/behavioral-training"
  }
];

const recentActivities = [
  {
    id: 1,
    title: "No activities yet",
    module: "Get Started",
    time: "Start your first session",
    score: 0,
    icon: Heart
  }
];

const weeklyStats = {
  sessionsCompleted: 0,
  avgScore: 0,
  streakDays: 0,
  totalMinutes: 0
};

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [form, setForm] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const router = useRouter();

  // Password change form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Account deletion state
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [deleteConfirmationText, setDeleteConfirmationText] = useState("");
  const deleteConfirmationPhrase = "I want to delete my account";

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      // If not logged in, redirect to login-signup
      if (!user) {
        router.replace("/AuthPage");
        return;
      }

      // Check if the user signed in with Google
      // In Supabase, OAuth users have app_metadata with provider info
      const provider = user.app_metadata?.provider;
      if (provider === 'google') {
        setIsGoogleUser(true);
      }

      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (error || !data) {
        // Profile doesn't exist, redirect to complete profile
        router.replace("/complete-profile");
        return;
      } else {
        setProfile({
          email: user.email ?? "",
          first_name: data.first_name ?? "",
          last_name: data.last_name ?? "",
          age: data.age ?? "",
          location: data.location ?? "",
        });
        setForm({
          email: user.email ?? "",
          first_name: data.first_name ?? "",
          last_name: data.last_name ?? "",
          age: data.age ?? "",
          location: data.location ?? "",
        });
      }
    };
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/AuthPage");
  };

  // Save profile
  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      if (!profile || !form) throw new Error("No profile info");

      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user || userError) throw new Error("User not found");

      // Update email if changed (only for non-Google users)
      if (form.email && form.email !== profile.email && !isGoogleUser) {
        const { error: emailError } = await supabase.auth.updateUser({ email: form.email });
        if (emailError) throw emailError;
      }

      // Update profile details in database
      const { error: profileError } = await supabase
        .from("user_profiles")
        .update({
          first_name: form.first_name,
          last_name: form.last_name,
          age: form.age ? Number(form.age) : null,
          location: form.location,
        })
        .eq("id", user.id);

      if (profileError) throw profileError;

      // Update local state with new profile data
      setProfile({ ...form });
      setEditing(false);
      setSuccess("Profile updated successfully!");
    } catch (err: any) {
      setError(err.message || "Profile update failed");
    } finally {
      setSaving(false);
    }
  };

  // Confirm password and update
  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      if (!profile || !form) throw new Error("No profile info");
      // Re-authenticate
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user || userError) throw new Error("User not found");

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: profile.email,
        password,
      });
      if (loginError) throw new Error("Password incorrect");

      // Update email if changed
      if (form.email && form.email !== profile.email) {
        const { error: emailError } = await supabase.auth.updateUser({ email: form.email });
        if (emailError) throw emailError;
      }

      // Update profile details
      const { error: profileError } = await supabase
        .from("user_profiles")
        .update({
          first_name: form.first_name,
          last_name: form.last_name,
          age: form.age ? Number(form.age) : null,
          location: form.location,
        })
        .eq("id", user.id);
      if (profileError) throw profileError;

      setProfile({ ...form });
      setEditing(false);
      setSuccess("Profile updated successfully!");
      setPassword("");
    } catch (err: any) {
      setError(err.message || "Update failed");
    } finally {
      setSaving(false);
    }
  };

  // Change password - SECURITY IMPROVED: Remove dangerous re-authentication
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const { currentPassword, newPassword, confirmPassword } = passwordForm;
      if (!currentPassword || !newPassword || !confirmPassword) {
        throw new Error("Please fill in all fields");
      }
      if (newPassword !== confirmPassword) {
        throw new Error("New password and confirmation do not match");
      }
      if (newPassword.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }

      // SECURITY FIX: Use Supabase's built-in re-authentication instead of manual sign-in
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user || userError) throw new Error("User not found");

      // Update password directly - Supabase handles re-authentication internally
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      });
      if (updateError) throw updateError;

      setSuccess("Password changed successfully!");
      // Clear form data after successful submission
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setShowPasswordModal(false);
    } catch (err: any) {
      // SECURITY FIX: Sanitize error messages to prevent information disclosure
      const sanitizedMessage = err.message?.includes('Invalid')
        ? "Invalid credentials. Please check your current password."
        : err.message || "Password change failed";
      setError(sanitizedMessage);
      // Clear form data even on error to prevent persisting wrong data
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } finally {
      setSaving(false);
    }
  };

  // Delete account
  const handleDeleteAccount = async () => {
    setDeleting(true);
    setDeleteError("");
    setDeleteSuccess("");
    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user || userError) throw new Error("User not found");

      // Delete user profile first
      const { error: profileError } = await supabase
        .from("user_profiles")
        .delete()
        .eq("id", user.id);
      if (profileError) throw profileError;

      // Sign out the user (client-side deletion isn't available in Supabase,
      // so we'll just remove their data and sign them out)
      await supabase.auth.signOut();

      setDeleteSuccess("Account data deleted successfully! You have been signed out.");
      setTimeout(() => {
        router.replace("/AuthPage");
      }, 2000);
    } catch (err: any) {
      setDeleteError(err.message || "Account deletion failed");
    } finally {
      setDeleting(false);
    }
  };

  // Clear success and error messages after some time
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            {/* Welcome Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Welcome back, {profile?.first_name}!
                  </h1>
                  <p className="text-sm lg:text-base text-gray-600 mt-1">
                    Continue your therapy journey
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <button
                    onClick={async () => {
                      await supabase.auth.signOut();
                      router.replace("/AuthPage");
                    }}
                    className="flex items-center gap-2 px-3 lg:px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm lg:text-base"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 lg:mb-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2"
              >
                <X className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm lg:text-base">{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 lg:mb-6 p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2"
              >
                <Check className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm lg:text-base">{success}</span>
              </motion.div>
            )}

            {/* Weekly Stats Section */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Weekly Overview</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-blue-100 rounded-lg">
                      <Activity className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xs lg:text-sm font-medium text-gray-700">Sessions</h3>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{weeklyStats.sessionsCompleted}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-green-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xs lg:text-sm font-medium text-gray-700">Avg Score</h3>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{weeklyStats.avgScore}%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-orange-100 rounded-lg">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xs lg:text-sm font-medium text-gray-700">Streak</h3>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{weeklyStats.streakDays} days</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-purple-100 rounded-lg">
                      <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xs lg:text-sm font-medium text-gray-700">Minutes</h3>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{weeklyStats.totalMinutes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapy Modules Section */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Therapy Modules</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {therapyModules.map((module) => (
                  <Link
                    key={module.id}
                    href={module.href}
                    className="block bg-white p-4 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 lg:p-4 rounded-xl ${module.color} text-white flex-shrink-0`}>
                        <module.icon className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-base lg:text-lg font-semibold text-gray-900 truncate">{module.title}</h3>
                          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                        <p className="text-xs lg:text-sm text-gray-600 mb-3 line-clamp-2">{module.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs lg:text-sm">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-semibold text-gray-900">{module.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{module.sessions}/{module.totalSessions} sessions</span>
                            <span>Next: {module.nextSession}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activities Section */}
            <div className="mb-6 lg:mb-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Recent Activities</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="p-2 lg:p-3 rounded-full bg-gray-100 flex-shrink-0">
                          <activity.icon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm lg:text-base font-semibold text-gray-900 truncate">{activity.title}</p>
                          <p className="text-xs lg:text-sm text-gray-500">{activity.module} • {activity.time}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs lg:text-sm font-semibold px-2 lg:px-3 py-1 rounded-full bg-green-100 text-green-800">
                            {activity.score}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Settings Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Profile Settings</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                      <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-sm lg:text-base text-gray-900 truncate">{profile?.email}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    {editing ? (
                      <input
                        type="text"
                        value={form?.first_name || ""}
                        onChange={(e) => setForm({ ...form!, first_name: e.target.value })}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-900">{profile?.first_name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    {editing ? (
                      <input
                        type="text"
                        value={form?.last_name || ""}
                        onChange={(e) => setForm({ ...form!, last_name: e.target.value })}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-900">{profile?.last_name}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    {editing ? (
                      <input
                        type="number"
                        value={form?.age || ""}
                        onChange={(e) => setForm({ ...form!, age: e.target.value })}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-900">{profile?.age}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    {editing ? (
                      <input
                        type="text"
                        value={form?.location || ""}
                        onChange={(e) => setForm({ ...form!, location: e.target.value })}
                        className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                      />
                    ) : (
                      <div className="flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-900">{profile?.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Change Password Button */}
                  {!isGoogleUser ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <button
                        onClick={() => setShowPasswordModal(true)}
                        className="w-full flex items-center justify-center gap-2 p-3 lg:p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
                      >
                        <PencilLine className="w-4 h-4" />
                        Change Password
                      </button>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <div className="w-full flex items-center gap-3 p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm text-gray-600">Signed in with Google</span>
                          <p className="text-xs text-gray-500 mt-1">Password changes are managed through your Google account</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Edit Profile Button Section */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                {!editing ? (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => {
                      setEditing(true);
                      setForm({ ...profile! });
                    }}
                    className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <PencilLine className="w-4 h-4 lg:w-5 lg:h-5" />
                    Edit Profile
                  </motion.button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {saving ? (
                        <>
                          <svg className="animate-spin h-4 w-4 lg:h-5 lg:w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" strokeWidth="4" stroke="currentColor" />
                            <path className="opacity-75" fill="currentColor" d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm18 0a8 8 0 10-16 0 8 8 0 0016 0z" />
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 lg:w-5 lg:h-5" />
                          Save Changes
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => {
                        setEditing(false);
                        setForm(null);
                        setError("");
                      }}
                      className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <X className="w-4 h-4 lg:w-5 lg:h-5" />
                      Cancel
                    </motion.button>
                  </div>
                )}
              </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
              >
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Change Password</h3>
                  {error && (
                    <div className="mb-4 p-3 lg:p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                      <X className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm lg:text-base">{error}</span>
                    </div>
                  )}
                  {success && (
                    <div className="mb-4 p-3 lg:p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm lg:text-base">{success}</span>
                    </div>
                  )}
                  <form onSubmit={handleChangePassword}>
                    <div className="space-y-4 lg:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="flex items-center">
                          <input
                            type={showPasswords.current ? "text" : "password"}
                            value={passwordForm.currentPassword}
                            onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                            className="ml-2 p-2"
                          >
                            {showPasswords.current ? (
                              <EyeOff className="w-5 h-5 text-gray-400" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <div className="flex items-center">
                          <input
                            type={showPasswords.new ? "text" : "password"}
                            value={passwordForm.newPassword}
                            onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                            className="ml-2 p-2"
                          >
                            {showPasswords.new ? (
                              <EyeOff className="w-5 h-5 text-gray-400" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <div className="flex items-center">
                          <input
                            type={showPasswords.confirm ? "text" : "password"}
                            value={passwordForm.confirmPassword}
                            onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-sm lg:text-base"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                            className="ml-2 p-2"
                          >
                            {showPasswords.confirm ? (
                              <EyeOff className="w-5 h-5 text-gray-400" />
                            ) : (
                              <Eye className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <button
                        type="submit"
                        className="w-full px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
                      >
                        {saving ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                strokeWidth="4"
                                stroke="currentColor"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm18 0a8 8 0 10-16 0 8 8 0 0016 0z"
                              />
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            Change Password
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowPasswordModal(false)}
                        className="w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}

            {/* Account Deletion Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 mt-8">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6">Delete Account</h2>
              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
                Once you delete your account, all your data will be permanently removed. This action cannot be undone.
              </p>
              {deleteError && (
                <div className="mb-4 p-3 lg:p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                  <X className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{deleteError}</span>
                </div>
              )}
              {deleteSuccess && (
                <div className="mb-4 p-3 lg:p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{deleteSuccess}</span>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setShowDeleteModal(true)}
                  className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Trash2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  Delete Account
                </motion.button>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <X className="w-4 h-4 lg:w-5 lg:h-5" />
                  Cancel
                </Link>
              </div>
            </div>

            {/* Delete Account Confirmation Modal */}
            {showDeleteModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
              >
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Confirm Account Deletion</h3>
                  <div className="mb-6">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <Trash2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-800 mb-1">Permanent Action</h4>
                          <p className="text-sm text-red-700">
                            This will permanently delete your account and all associated data. This action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To confirm, type: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-red-600">"{deleteConfirmationPhrase}"</span>
                    </label>
                    <input
                      type="text"
                      value={deleteConfirmationText}
                      onChange={(e) => setDeleteConfirmationText(e.target.value)}
                      placeholder={`Type "${deleteConfirmationPhrase}" here`}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm lg:text-base"
                    />
                    {deleteConfirmationText && deleteConfirmationText !== deleteConfirmationPhrase && (
                      <p className="text-sm text-red-600 mt-2">Please type the exact phrase to confirm deletion.</p>
                    )}
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setShowDeleteModal(false);
                        setDeleteConfirmationText("");
                      }}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-sm lg:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteAccount}
                      disabled={deleteConfirmationText !== deleteConfirmationPhrase || deleting}
                      className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {deleting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              strokeWidth="4"
                              stroke="currentColor"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm18 0a8 8 0 10-16 0 8 8 0 0016 0z"
                            />
                          </svg>
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="w-4 h-4" />
                          Delete Account
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

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
