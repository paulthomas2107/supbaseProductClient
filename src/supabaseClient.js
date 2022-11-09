import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://smpvmhystyizexvqjqep.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtcHZtaHlzdHlpemV4dnFqcWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5OTE0MjMsImV4cCI6MTk4MzU2NzQyM30.KONNlx7lhD7g2pR9S9bu0aoZsieXTz9zA9Lf8gi4p5s'

export const supabase  = createClient(supabaseURL, supabaseAnonKey)