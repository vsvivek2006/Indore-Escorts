import type { Metadata, Viewport } from "next";
import { Jost, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AgeVerificationModal from "@/components/AgeVerificationModal";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
  weight: ["400"]
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e31777"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mysecretgirl69.com"),
  title: {
    default: "MySecretGirl69 | Elite Indore Call Girls & Escorts Service Indore MP",
    template: "%s | MySecretGirl69 Indore"
  },
  description:
    "MySecretGirl69 is Indore's trusted directory of verified call girls and luxury escorts. Fast 30-45 minute 5-star hotel outcalls in Vijay Nagar, Palasia, Super Corridor, and Bypass with zero advance payment and 100% verified photos.",
  keywords: [
    "mysecretgirl69",
    "indore escorts",
    "indore escort service",
    "call girls in indore",
    "indore call girls",
    "independent call girls indore",
    "vijay nagar escorts",
    "vijay nagar call girls",
    "palasia call girls",
    "super corridor escorts",
    "luxury call girls indore",
    "5 star hotel call girls indore"
  ],
  authors: [{ name: "MySecretGirl69 Concierge" }],
  creator: "MySecretGirl69 Concierge",
  publisher: "MySecretGirl69 Concierge",
  formatDetection: {
    telephone: true,
    email: false,
    address: true
  },
  alternates: {
    canonical: "https://mysecretgirl69.com"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mysecretgirl69.com",
    siteName: "MySecretGirl69 Indore",
    title: "MySecretGirl69 | Elite Indore Call Girls & Escorts Service Indore MP",
    description:
      "Indore's premier verified call girls and escort directory. Verified models for dinner dates, business travel, and 5-star hotel stays across Vijay Nagar, Palasia, and Bypass.",
    images: [
      {
        url: "https://mysecretgirl69.com/images/hero_banner.jpg",
        width: 1200,
        height: 675,
        alt: "MySecretGirl69 Indore Call Girls & Luxury Escorts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MySecretGirl69 Indore | Elite Call Girls & Escorts Directory Indore MP",
    description:
      "Indore's trusted directory for verified call girls and escorts. Verified photo models in Vijay Nagar, Palasia, and luxury hotels with cash on arrival.",
    images: ["https://mysecretgirl69.com/images/hero_banner.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mysecretgirl69.com/#website",
    name: "MySecretGirl69 Indore",
    url: "https://mysecretgirl69.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://mysecretgirl69.com/locations/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mysecretgirl69.com/#organization",
    name: "MySecretGirl69 Indore",
    url: "https://mysecretgirl69.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mysecretgirl69.com/icon.png",
      width: 180,
      height: 180
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9006236133",
      contactType: "customer service",
      areaServed: "Indore",
      availableLanguage: ["English", "Hindi"]
    }
  };

  return (
    <html lang="en" className={`${jost.variable} ${pacifico.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${jost.className} min-h-screen flex flex-col bg-white text-[#1c1c1c] antialiased selection:bg-[#e31777] selection:text-white relative`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 pb-16 md:pb-0 focus:outline-none">
          {children}
        </main>
        <AgeVerificationModal />
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
