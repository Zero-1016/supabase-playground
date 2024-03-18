import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();
// import { createClient } from '@supabase/supabase-js';

// // 정책이 있을 경우 추가가 가능합니다.
// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// // 정책이 없더라도 추가가 가능합니다.
// export const supabaseAdmin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY
// );
