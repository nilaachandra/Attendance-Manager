import envconfig from "../envconfig";

import { createClient } from "@supabase/supabase-js";

const supabaseURL = envconfig.supabaseURL
const supabaseKey = envconfig.supabaseKey
const supabase = createClient(supabaseURL, supabaseKey)

export default supabase ;