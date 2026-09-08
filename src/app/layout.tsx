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
    "MySecretGirl69 is Indore's trusted directory of verified social companions and executive escorts. Serving Vijay Nagar, Palasia, Super Corridor, and luxury hotels with total discretion and verified locality guides.",
  keywords: [
    "mysecretgirl69",
    "indore escorts",
    "indore escort service",
    "call girls in indore",
    "independent companions indore",
    "vijay nagar escorts",
    "palasia companions",
    "super corridor escorts",
    "luxury escort directory indore"
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
      "Indore's premier companion directory. Verified social escorts for dinner dates, business travel, and luxury stays across Vijay Nagar, Palasia, and Bypass resorts.",
    images: [
      {
        url: "/images/hero_banner.jpg",
        width: 1200,
        height: 675,
        alt: "MySecretGirl69 Indore Luxury Directory"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MySecretGirl69 Indore | Elite Escorts & Concierge Directory Indore MP",
    description:
      "Indore's trusted companion directory. Verified social companions in Vijay Nagar, Palasia, and luxury hotels with discreet local arrangements.",
    images: ["/images/hero_banner.jpg"]
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
    name: "MySecretGirl69 Indore",
    url: "https://mysecretgirl69.com",
    logo: "https://mysecretgirl69.com/images/hero_banner.jpg",
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
      <body className="min-h-screen flex flex-col bg-white text-[#1c1c1c] antialiased selection:bg-[#e31777] selection:text-white relative">
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
