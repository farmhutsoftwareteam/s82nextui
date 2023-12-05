import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nftlneesfehnilvanndc.supabase.co/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdGxuZWVzZmVobmlsdmFubmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzOTg0MzMsImV4cCI6MjAxNTk3NDQzM30.ICJJnM-PUMDiepc_w27QCAYvLkw6H579PTyUOGY3icQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)