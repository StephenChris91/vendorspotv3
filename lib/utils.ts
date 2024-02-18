import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from '@supabase/supabase-js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const supabaseUrl = "https://iimgppjcntligrebusdi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbWdwcGpjbnRsaWdyZWJ1c2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5OTk2NzUsImV4cCI6MjAyMjU3NTY3NX0.RG9v6WI035V-UfKUXyP2WYQnMgyNL64RWlGcxmnj64o";



// export const supabase = createClient(supabaseUrl, supabaseKey)
// export const supabase = createClient('https://<your-org-id>.supabase.co', 'your-anon-key')

export const supabase = createClient(supabaseUrl, supabaseKey)

