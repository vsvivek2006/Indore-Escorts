const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const dotenv = fs.readFileSync('.env.local', 'utf-8');
const env = {};
dotenv.split('\n').forEach(line => {
  const [k, ...v] = line.trim().split('=');
  if (k && v.length) env[k.trim()] = v.join('=').trim();
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const blogs = [
  {
    slug: "top-luxury-hotels-indore",
    title: "Top 5-Star Luxury Hotels in Indore for Safe Call Girl & Escort Outcalls",
    excerpt: "A curated guide to Indore's premier 5-star hotels for discreet call girl visits and escort outcalls, featuring private keycard suites, fine dining, and elite guest policies.",
    read_time: "6 min read",
    published_at: "2026-10-16T10:00:00Z",
    author: "Indore Concierge Editorial",
    category: "Luxury Travel",
    meta_title: "Top Luxury Hotels in Indore for Call Girls & Escorts | 5-Star Stay Guide",
    meta_description: "Discover the best 5-star luxury hotels in Indore for safe call girl and escort outcalls. In-depth review of Sayaji, Indore Marriott, Radisson Blu, and Sheraton Grand Palace.",
    content: `<p>Indore has grown rapidly from a regional commercial trading hub into Madhya Pradesh's most dynamic metropolis. When booking verified <a href='/locations/vijay-nagar'>Indore call girls</a> or executive escorts, choosing the right luxury hotel is paramount for absolute discretion, guest privacy, and zero lobby hassle.</p>
<h2>1. Indore Marriott (Meghdoot Garden)</h2>
<p>Elite business luxury hotel with private elevator access and secluded multi-room suites. It is the premier choice for corporate executives booking <a href='/services/corporate-events'>corporate & business travel escorts in Indore</a>.</p>
<h2>2. Sayaji Hotel (Vijay Nagar)</h2>
<p>Renowned for royal hospitality and romantic rooftop dining at Mediterra. Highly popular for in-room visits by high-profile call girls in <a href='/locations/vijay-nagar'>Vijay Nagar</a> with dedicated valet and private guest elevators.</p>
<h2>3. Radisson Blu (Ring Road / MR-10)</h2>
<p>Conveniently situated between Devi Ahilya Bai Holkar Airport and the <a href='/locations/super-corridor'>Super Corridor</a>, offering soundproof luxury club rooms tailored for quiet, uninterrupted escort appointments.</p>
<h2>4. Sheraton Grand Palace (Indore Bypass)</h2>
<p>Sprawling Greco-Roman resort architecture with lush private gardens, ideal for weekend staycations and private villa outcalls with independent call girls away from city traffic along the <a href='/locations/indore-bypass'>Indore Bypass</a>.</p>
<blockquote><p>Key Tip for Discretion: Always book executive club floor suites with direct keycard elevator access to ensure private visits without front-desk delays.</p></blockquote>
<p>Before arranging any hotel outcall, consult our comprehensive <a href='/blog/safety-discretion-guide'>Indore call girls safety guide</a> to ensure a smooth, verified, and scam-free booking experience.</p>`,
    tags: ["5-Star Hotels", "Indore Call Girls", "Vijay Nagar", "Luxury Stays"],
    status: "published",
    source: "ai"
  },
  {
    slug: "nightlife-cafes-indore",
    title: "The Ultimate Indore Nightlife & Rooftop Lounges Guide: Dinner Dates with Indore Call Girls",
    excerpt: "Explore Vijay Nagar's vibrant cocktail lounges, New Palasia's romantic bistros, and late-night Sarafa eats for memorable dinner dates with elite Indore call girls & escorts.",
    read_time: "5 min read",
    published_at: "2026-10-14T10:00:00Z",
    author: "Indore Lifestyle Desk",
    category: "Local Lifestyle",
    meta_title: "Indore Nightlife & Rooftops | Dinner Dates with Indore Call Girls & Escorts",
    meta_description: "Experience Indore's best nightlife spots, rooftop bars, and luxury dining across Vijay Nagar and Palasia for evening dates with verified Indore call girls and escorts.",
    content: `<p>Indore by night is an electric revelation – celebrated as the cleanest city in India with a thriving cosmopolitan culture. After sunset, the city transitions effortlessly from corporate boardrooms to vibrant rooftop cocktail bars and fine-dining venues ideal for romantic dates with charming <a href='/locations/vijay-nagar'>Vijay Nagar call girls</a>.</p>
<h2>Vijay Nagar Rooftop Lounges</h2>
<p>The entertainment epicenters around Scheme 54 and MR-9 boulevard boast premier rooftop lounges and craft breweries, perfect for sophisticated conversation and reserving glamorous <a href='/services/dinner-dates'>dinner date call girls in Indore</a>.</p>
<h2>New Palasia & 56 Dukan</h2>
<p>Famed for intimate European-style bistros, artisanal patisseries, and quiet conversation cafes across the serene <a href='/locations/palasia'>Palasia call girls & dining circuit</a>.</p>
<h2>Historic Sarafa Midnight Bazaar</h2>
<p>Located behind Rajwada Palace, this legendary street transforms into an extraordinary midnight culinary spectacle after 10:30 PM, serving piping hot jalebis and bhutte ka kees until 2:00 AM.</p>
<blockquote><p>Recommended Evening Itinerary: Begin with sunset cocktails at a Vijay Nagar rooftop, enjoy a romantic multi-course dinner at one of the premier luxury hotels in Indore for call girl stays, and browse our verified models for articulate companionship.</p></blockquote>
<p>Plan your evening with our <a href='/blog/top-luxury-hotels-indore'>luxury hotels in Indore for call girl stays</a> guide and browse our <a href='/models'>verified Indore call girls photo roster</a> for charming social accompaniment.</p>`,
    tags: ["Nightlife", "Dinner Dates", "Vijay Nagar", "Palasia", "Indore Call Girls"],
    status: "published",
    source: "ai"
  },
  {
    slug: "safety-discretion-guide",
    title: "Indore Call Girls Safety Guide: Avoid Fake Advance Scams & Book Genuine Escorts",
    excerpt: "Crucial client advisory on booking verified call girls in Indore, avoiding advance UPI deposit fraud, and ensuring total privacy during hotel outcalls.",
    read_time: "7 min read",
    published_at: "2026-10-11T10:00:00Z",
    author: "MySecretGirl69 Editorial Team",
    category: "Safety & Ethics",
    meta_title: "Indore Call Girls Safety Guide | Avoid Advance Scams & Book Genuine Escorts",
    meta_description: "Essential safety advisory for booking verified call girls and escort services in Indore. Learn how to verify photos, avoid advance UPI scams, and guarantee complete privacy.",
    content: `<p>Navigating online adult classifieds in central India requires caution, as unregulated classified sites are rampant with fake profiles and advance-fee extortion scams. When searching for verified <a href='/models'>Indore call girls</a> or genuine escort services, following proven consumer safety protocols protects your money, privacy, and peace of mind.</p>
<h2>1. Zero Upfront Digital Transfers</h2>
<p>Genuine independent call girls and authentic agencies never demand advance UPI deposits, registration tokens, or transportation surcharges prior to arrival. Always insist on direct cash-on-arrival in your hotel room and check our official <a href='/safety-guide'>Indore call girl safety guide and verification tips</a>.</p>
<h2>2. Live Photo & Video Verification</h2>
<p>Legitimate call girls in Indore readily share a quick real-time WhatsApp voice note or selfie confirmation before an appointment. Browse our roster of 100% face-to-face audited, <a href='/models'>verified Indore call girls</a> to guarantee the woman who arrives matches the profile you selected.</p>
<h2>3. Meet Exclusively in Recognized 5-Star Hotels</h2>
<p>In-call and outcall meetings should always occur in reputable commercial venues or private suites at recognized <a href='/blog/top-luxury-hotels-indore'>luxury hotels in Indore for call girl stays</a> rather than dubious unverified apartments or shady suburban lodges.</p>
<h2>4. Complete Digital Privacy & Encrypted Channels</h2>
<p>Coordinate only via encrypted messaging with disappearing messages enabled. For high-profile business leaders and celebrities, our <a href='/services/vip-concierge'>VIP elite Indore escorts and luxury call girls</a> desk provides strict NDA-level non-disclosure agreements with zero digital paper trails.</p>
<h2>5. Consensual & Legal Adult Standards</h2>
<p>All arrangements coordinated through MySecretGirl69 are strictly between consenting adults (18+) adhering to Indian legal frameworks under the ITPA. For instant verified bookings, contact our <a href='/contact'>24/7 Indore call girl concierge desk</a>.</p>`,
    tags: ["Safety Guide", "Scam Protection", "Indore Call Girls", "Discretion"],
    status: "published",
    source: "ai"
  }
];

async function seed() {
  console.log("Seeding existing articles into Supabase posts table...");
  for (const b of blogs) {
    const { data, error } = await supabase.from('posts').upsert(b, { onConflict: 'slug' }).select();
    if (error) {
      console.error(`Error inserting ${b.slug}:`, error.message);
    } else {
      console.log(`✓ Inserted/Updated: ${b.slug}`);
    }
  }
  console.log("Done!");
}

seed().catch(console.error);
