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
    title: "Dinner & Social Escort Service",
    shortDescription: "Elegant call girls for romantic candlelit dinners, gourmet culinary tastings, and high-end evening soirees in Indore.",
    fullDescription:
      "Perfect company for an evening of elegant culinary delight. Our dinner and social partners are handsome, eloquent and cultured conversationalists; a single meal becomes a memorable dining experience. From intimate bistros in New Palasia to the warmth of a private table at Chopstick City, Sayaji or Mediterranean in Vijay Nagar, Sarafa offers seamless warmth and sophisticated presence with your elite escort.",
    metaTitle: "Dinner Date Escorts Indore | Fine Dining & Social Call Girls",
    metaDescription: "Reserve charming dinner date escorts in Indore. Elegant, articulate social call girls for five-star dining in Vijay Nagar, Palasia, and luxury hotels.",
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
    shortDescription: "Poised, sophisticated call girls for visiting executives, conference delegates, and corporate networking events.",
    fullDescription:
      "Traveling for business is sometimes tiring and tedious. Our corporate and business travel partners are well-versed and intelligent call girls for visiting executives, consultants and trade delegates attending expos at the Brilliant Convention Centre or corporate meetings throughout the Super Corridor IT SEZ. Our escorts have a natural sense of professional etiquette and can join you for a gala networking dinner, an awards night or a quiet evening, socializing conversation.",
    metaTitle: "Corporate Escorts Indore | Business Travel & Convention Call Girls",
    metaDescription: "Professional corporate escorts for visiting executives and delegates in Indore. Discreet company for Brilliant Convention Centre events & luxury hotel stays.",
    features: [
      "Educated, bilingual call girls fluent in English and Hindi",
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
    title: "Weekend & Staycation Escort Service",
    shortDescription: "Relaxing escort services for luxury palace staycations, farmhouse weekend retreats, and Mandu/Ujjain outstation excursions.",
    fullDescription:
      "Get out of the hectic rut of the week and relax over the weekend. From the moment you arrive in one of our luxury hotels (Sheraton Grand Palace on Indore Bypass, Private Farmhouse in Bicholi Mardana, and Scenic Heritage Road Trips to Mandu, Maheshwar or Spiritual Ujjain), our staycation escorts are attentive, heartwarming and joyful.",
    metaTitle: "Weekend Staycation Escorts Indore | Outstation Luxury Call Girls",
    metaDescription: "Book weekend getaway escorts in Indore. Luxury staycation call girls for Sheraton Grand Palace, private Bypass farmhouses, and outstation trips.",
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
    shortDescription: "Ultra-exclusive, personalized escort services for discerning dignitaries and high-net-worth visitors.",
    fullDescription:
      "If you're a discerning client with a life that requires absolute perfection and uncompromising privacy, then our VIP Elite Concierge service is the ultimate luxury escort service in Indore. Our premium escorts are exemplars of ancient beauty, grace, and taste, from arranging presidential hotel rooms to organising special private tours.",
    metaTitle: "VIP Elite Escort Service Indore | High Profile Concierge Call Girls",
    metaDescription: "Exclusive VIP concierge and luxury escort services in Indore. Total privacy, non-disclosure protocols, and top-tier models for high-net-worth clients.",
    features: [
      "Top-echelon celebrity and elite socialite models",
      "Guaranteed zero digital footprints and NDA-level privacy protocols",
      "Direct personal booking manager coordination via encrypted channels",
      "Direct, private coordination with independent call girls"
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
