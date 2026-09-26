import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey ? createClient(url, anonKey) : null;

// TODO:
// - auth
// - projects CRUD
// - tasks CRUD
// - purchases CRUD
// - content project CRUD
// - realtime subscriptions if useful
