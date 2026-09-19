export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  locality: string;
  rating: number;
  reviewDate: string;
  quote: string;
  companionBooked: string;
  verifiedBooking: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    clientName: "Arjun M.",
    clientRole: "Corporate Executive, Mumbai",
    locality: "Vijay Nagar (Sayaji Hotel)",
    rating: 5,
    reviewDate: "August 2026",
    quote: "Visited Indore for an annual tech summit at the Brilliant Convention Centre, booked Aarohi for a private dinner at Mediterra, she came looking dazzling, spoke English and had real corporate etiquette – no hassle, 100% genuine photos.",
    companionBooked: "Aarohi Sharma",
    verifiedBooking: true
  },
  {
    id: "review-2",
    clientName: "Ravi K.",
    clientRole: "Local Entrepreneur, Indore",
    locality: "Palasia & New Palasia",
    rating: 5,
    reviewDate: "August 2026",
    quote: "As the resident of Indore, privacy is the greatest thing I look for, the concierge did everything well, no questions asked, no spam SMS, and utmost punctuality, Meera was bubbly and warm, and made the entire evening so easy.",
    companionBooked: "Meera Kapoor",
    verifiedBooking: true
  },
  {
    id: "review-3",
    clientName: "Vikram T.",
    clientRole: "Convention Attendee, Delhi",
    locality: "Super Corridor (Radisson Blu)",
    rating: 5,
    reviewDate: "July 2026",
    quote: "Stayed on MR-10 near Vijay Nagar. From start to end, the coordination was flawless. Tara was nothing but a delight; gracious, articulate and beautiful in person, truly the best escort service in Indore with honest rates!",
    companionBooked: "Tara Deshmukh",
    verifiedBooking: true
  },
  {
    id: "review-4",
    clientName: "Kunal S.",
    clientRole: "IT Consultant, Pune",
    locality: "Scheme 54, Vijay Nagar",
    rating: 5,
    reviewDate: "July 2026",
    quote: "The only thing that makes this directory different from the rest is that there is no fake profile policy. The girl who came to my hotel was exactly the one in the gallery, and she was very friendly, attentive and respectful. Highly recommended.",
    companionBooked: "Ananya Sen",
    verifiedBooking: true
  },
  {
    id: "review-5",
    clientName: "Sameer P.",
    clientRole: "Real Estate Investor, Ahmedabad",
    locality: "Indore Bypass (Sheraton Grand Palace)",
    rating: 5,
    reviewDate: "June 2026",
    quote: "Booked an overnight companion for a weekend getaway along the Indore Bypass and Kavya was a personification of royalty in every aspect – impeccable styling, captivating conversation and complete privacy throughout the stay – exceeded all expectations.",
    companionBooked: "Kavya Malhotra",
    verifiedBooking: true
  },
  {
    id: "review-6",
    clientName: "Aditya V.",
    clientRole: "Senior Manager, Bangalore",
    locality: "South Tukoganj (Indore Marriott)",
    rating: 5,
    reviewDate: "June 2026",
    quote: "Natasha was very professional and made the payment very easy from the meeting, no advance scam and a great stress reliever after the hectic meeting! Will definitely be coordinating on my next trip to Indore with Natasha.",
    companionBooked: "Natasha Singhania",
    verifiedBooking: true
  }
];
