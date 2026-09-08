export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  idealVenuesInIndore: string[];
  etiquetteAndExpectations: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "dinner-dates",
    title: "Dinner & Social Companionship",
    shortDescription: "Elegant companionship for romantic candlelit dinners, gourmet culinary tastings, and high-end evening soirees in Indore.",
    fullDescription: "An evening of refined culinary indulgence deserves graceful company. Our dinner and social companions are charming, well-spoken, and culturally adept conversationalists who turn a solo meal into an unforgettable dining experience. Whether reserving a private table at Sayaji's Chopstick City or Mediterra in Vijay Nagar, enjoying intimate bistros in New Palasia, or embarking on a late-night street food adventure at Sarafa, your companion ensures seamless warmth and sophisticated presence.",
    metaTitle: "Dinner Date Companions Indore | Fine Dining & Social Escorts",
    metaDescription: "Reserve charming dinner date companions in Indore. Elegant, articulate social escorts for five-star dining in Vijay Nagar, Palasia, and luxury hotels.",
    features: [
      "Well-mannered, articulate conversationalists",
      "Impeccable dining etiquette and dress code adaptation",
      "Deep familiarity with Indore's gourmet restaurant landscape",
      "Strict confidentiality and complete social discretion"
    ],
    idealVenuesInIndore: [
      "Mediterra Rooftop at Sayaji Hotel, Vijay Nagar",
      "Indore Kitchen at Indore Marriott Hotel",
      "The Square at Novotel Indore",
      "Fine dining bistros near Greater Kailash Road, New Palasia"
    ],
    etiquetteAndExpectations: [
      "Respectful and polite demeanor is expected at all times.",
      "Dress code can be specified in advance (formal, smart casual, cocktail attire).",
      "Meeting locations should be recognized dining venues or star-rated hotel suites."
    ]
  },
  {
    slug: "corporate-events",
    title: "Corporate & Business Travel Escorts",
    shortDescription: "Poised, sophisticated companions for visiting executives, conference delegates, and corporate networking events.",
    fullDescription: "Corporate travel can often feel exhausting and monotonous. Our corporate and business travel companions provide articulate, intelligent company for visiting executives, consultants, and trade delegates attending expos at the Brilliant Convention Centre or corporate meetings across the Super Corridor IT SEZ. With an innate understanding of professional decorum, our companions seamlessly accompany you to gala networking dinners, award nights, or quiet evening cocktail discussions.",
    metaTitle: "Corporate Escorts Indore | Business Travel & Convention Companions",
    metaDescription: "Professional corporate companions for visiting executives and delegates in Indore. Discreet company for Brilliant Convention Centre events & luxury hotel stays.",
    features: [
      "Educated, bilingual companions fluent in English and Hindi",
      "Executive business etiquette and understated elegance",
      "Familiarity with Brilliant Convention Centre, TCS, and Infosys hubs",
      "Prompt airport coordination and business hotel dispatch"
    ],
    idealVenuesInIndore: [
      "Amber Convention & Brilliant Convention Centre, Vijay Nagar",
      "Business Lounges at Radisson Blu & Sayaji Hotel",
      "Executive Suites along the Super Corridor",
      "Private meeting rooms at Lemon Tree Hotel, RNT Marg"
    ],
    etiquetteAndExpectations: [
      "Confidentiality agreements respected; zero discussion of client business matters.",
      "Advance coordination recommended for multi-day conventions or exhibition tours.",
      "Clear scheduling to match your itinerary and flight connections."
    ]
  },
  {
    slug: "weekend-getaways",
    title: "Weekend & Staycation Companionship",
    shortDescription: "Relaxing companionship for luxury palace staycations, farmhouse weekend retreats, and Mandu/Ujjain outstation excursions.",
    fullDescription: "Escape the weekly stress with an unhurried weekend retreat. Whether you are checking into the palatial Sheraton Grand Palace on the Indore Bypass, renting a private farmhouse in Bicholi Mardana, or planning a scenic heritage road trip to historic Mandu, Maheshwar, or spiritual Ujjain, our staycation companions provide attentive, heartwarming, and joyful partnership throughout your getaway.",
    metaTitle: "Weekend Staycation Companions Indore | Outstation Luxury Escorts",
    metaDescription: "Book weekend getaway companions in Indore. Luxury staycation escorts for Sheraton Grand Palace, private Bypass farmhouses, and outstation trips.",
    features: [
      "Flexible multi-day and full-weekend booking arrangements",
      "Enthusiastic travel partners familiar with MP tourism circuits",
      "Complete focus on client relaxation, spa days, and wellness",
      "Safe, verified travel logistics and discrete coordination"
    ],
    idealVenuesInIndore: [
      "Sheraton Grand Palace Resort, Indore Bypass",
      "Private luxury farmhouses around Bicholi Mardana & Kanadia",
      "Crescent Spa & Resorts, Sehore Road / Jamuniya",
      "Outstation heritage heritage stays in Mandu & Ahilya Fort Maheshwar"
    ],
    etiquetteAndExpectations: [
      "Outstation travel requires minimum 24-hour advance coordination.",
      "Private chauffeur-driven or executive vehicle transport arranged securely.",
      "Client covers five-star accommodation and dining throughout the journey."
    ]
  },
  {
    slug: "vip-concierge",
    title: "VIP Elite Concierge & Discretion",
    shortDescription: "Ultra-exclusive, personalized companionship services for discerning dignitaries and high-net-worth visitors.",
    fullDescription: "For discerning clients whose lifestyles demand absolute perfection and unyielding privacy, our VIP Elite Concierge service represents the pinnacle of luxury companionship in Indore. From coordinating presidential hotel suites to curating bespoke private itineraries, our top-tier companions embody timeless beauty, poise, and discretion.",
    metaTitle: "VIP Elite Companionship Indore | High Profile Concierge Escorts",
    metaDescription: "Exclusive VIP concierge and luxury escort services in Indore. Total privacy, non-disclosure protocols, and top-tier models for high-net-worth clients.",
    features: [
      "Top-echelon celebrity and elite socialite models",
      "Guaranteed zero digital footprints and NDA-level privacy protocols",
      "Direct personal booking manager coordination via encrypted channels",
      "Direct, private coordination with independent companions"
    ],
    idealVenuesInIndore: [
      "Presidential & Luxury Suites at Sayaji & Marriott",
      "Private Member Clubs including Yeshwant Club",
      "Secluded luxury villas in Bicholi Mardana",
      "Private chartered flight arrivals at Indore Airport"
    ],
    etiquetteAndExpectations: [
      "Strict screening and verification required for first-time VIP bookings.",
      "Zero tolerance for illicit solicitation, non-consensual behavior, or photography.",
      "Seamless encrypted communication via private WhatsApp desk."
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
