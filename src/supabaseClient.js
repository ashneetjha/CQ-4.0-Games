// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://llzvfbwavcolsrfwjiuh.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsenZmYndhdmNvbHNyZndqaXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3MDA0NDUsImV4cCI6MjA3MTI3NjQ0NX0.WgcNSfMhDohQGAld4UVYsfw81Ka3Oi5B7Kns4GRCNb4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
