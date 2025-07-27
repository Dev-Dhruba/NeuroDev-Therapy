"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current session
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Auth callback error:", error);
          router.replace("/AuthPage?error=auth_callback_failed");
          return;
        }

        if (!session?.user) {
          router.replace("/AuthPage");
          return;
        }

        // Check if user has a profile
        const { data: profile, error: profileError } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          // PGRST116 is "not found" error, which is expected for new users
          console.error("Profile check error:", profileError);
        }

        // If no profile exists or profile is incomplete, redirect to complete-profile
        if (!profile || !profile.first_name || !profile.last_name) {
          router.replace("/complete-profile");
          return;
        }

        // Profile exists and is complete, redirect to dashboard
        router.replace("/dashboard");

      } catch (error) {
        console.error("Unexpected error in auth callback:", error);
        router.replace("/AuthPage?error=unexpected_error");
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}
