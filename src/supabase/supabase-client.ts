import { createClient } from "@supabase/supabase-js";

const SUPABASEURL = process.env.NEXT_PUBLIC_SUPABASEURL;
const SUPABASEKEY = process.env.NEXT_PUBLIC_SUPABASEKEY;

if (!SUPABASEURL || !SUPABASEKEY) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(SUPABASEURL, SUPABASEKEY);