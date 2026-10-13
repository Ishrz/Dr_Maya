import { Figtree, Fraunces } from "next/font/google";
import { contact, meta, site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // Fraunces' optical and "soft" axes give the display face its warmth.
  axes: ["SOFT", "WONK"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name}, ${site.credentials}`,
    locale: meta.locale,
    title: meta.title,
    description: meta.description,
    images: [{ url: meta.ogImage, width: 1600, height: 1000, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
  robots: { index: true, follow: true },
};

// Structured data. Only facts present in the practice profile are included —
// no phone, email, opening hours, prices or ratings are asserted.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: `${site.name}, ${site.credentials}`,
  jobTitle: site.role,
  description: meta.description,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine1,
    addressLocality: "Santa Monica",
    addressRegion: "CA",
    postalCode: "90401",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  availableLanguage: "English",
  medicalSpecialty: ["Psychiatric", "Psychological"],
  knowsAbout: [
    "Anxiety therapy",
    "Panic",
    "Trauma therapy",
    "EMDR",
    "Burnout",
    "Perfectionism",
    "Cognitive behavioral therapy",
    "Mindfulness",
  ],
};

export const viewport = {
  themeColor: meta.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-bg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-pill focus:bg-primary focus:px-5 focus:py-3 focus:text-inverse"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Structured data is a static, hand-written object from lib/content.js.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
