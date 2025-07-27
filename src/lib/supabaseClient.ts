import { createClient } from "@supabase/supabase-js";

const SUPABASEURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASEKEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASEURL || !SUPABASEKEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(SUPABASEURL, SUPABASEKEY);
