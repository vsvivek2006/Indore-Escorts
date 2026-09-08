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
    quote: "Visiting Indore for an annual tech summit at the Brilliant Convention Centre. Booked Aarohi for a private dinner at Mediterra. She arrived within 35 minutes looking stunning, spoke fluent English, and possessed genuine corporate etiquette. 100% genuine photos and zero hassle.",
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
    quote: "As an Indore resident, privacy is my utmost priority. The concierge handled everything discreetly over WhatsApp. No unnecessary questions, no spam SMS, and absolute punctuality. Meera was warm, bubbly, and made the entire evening effortless.",
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
    quote: "Stayed on MR-10 near Vijay Nagar. The coordination was seamless from start to finish. Tara was an absolute delight—gracious, articulate, and stunning in person. Truly the best escort service in Indore with honest rates.",
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
    quote: "What sets this directory apart from others is the zero fake profile policy. The girl who arrived at my hotel was the exact same girl shown in the gallery. Friendly, attentive, and very respectful. Highly recommended.",
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
    quote: "Booked an overnight companion for a weekend getaway along the Indore Bypass. Kavya was royalty personified. Impeccable styling, captivating conversation, and complete privacy throughout the stay. Exceeded all expectations.",
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
    quote: "After stressful meetings, spending an unhurried evening with Natasha was the perfect stress relief. Seamless direct payment on meeting, no advance scam, and total professionalism. Will definitely coordinate again on my next Indore trip.",
    companionBooked: "Natasha Singhania",
    verifiedBooking: true
  }
];
