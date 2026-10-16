const https = require('https');

const token = process.env.SUPABASE_ACCESS_TOKEN || '';
const ref = process.env.SUPABASE_PROJECT_REF || 'zkdyaxgcsxmcsbhqtsbl';

const sql = `
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  category TEXT DEFAULT 'Luxury Travel',
  author TEXT DEFAULT 'MySecretGirl69 Editorial',
  tags TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'published',
  read_time TEXT DEFAULT '5 min read',
  source TEXT DEFAULT 'ai',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts (slug);
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON public.posts (status, published_at DESC);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Public can view published posts'
  ) THEN
    CREATE POLICY "Public can view published posts" ON public.posts
      FOR SELECT USING (status = 'published');
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Service role full access on posts'
  ) THEN
    CREATE POLICY "Service role full access on posts" ON public.posts
      FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;
`;

function executeSql(query) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query });
    const req = https.request({
      hostname: 'api.supabase.com',
      path: '/v1/projects/' + ref + '/database/query',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log('Creating posts table in Supabase project:', ref);
  const res = await executeSql(sql);
  console.log('Result Status:', res.statusCode);
  console.log('Result Body:', res.body);
}

run().catch(console.error);
