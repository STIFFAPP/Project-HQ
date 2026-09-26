import {createClient} from "@supabase/supabase-js";
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase=url&&key?createClient(url,key):null;
// Replace the localStorage repository with authenticated Supabase CRUD here.
// Keep Notion secrets server-side if OAuth/API sync is added.
