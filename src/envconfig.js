const envconfig = {
    supabaseURL : String(import.meta.env.VITE_SUPABASE_URL),
    supabaseKey: String(import.meta.env.VITE_SUPABASE_ANON_KEY),
    clerkAuthKey: String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
}

export default envconfig;