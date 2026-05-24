import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tribeca-theeverett-lullanagar.com"),

  title:
    "The Everett Pune | Luxury 3, 4 & 5 BHK Homes & Retail Spaces in Lullanagar",

  description:
    "Discover The Everett in Lullanagar, Pune — a landmark destination featuring ultra-premium 3, 4 & 5 BHK luxury residences and curated retail spaces. Rising ~370 feet across 31 levels, The Everett blends expansive layouts, double-height living, lifestyle amenities, and panoramic city views.",

  keywords: [
    "The Everett Pune",
    "The Everett Lullanagar",
    "luxury residences Pune",
    "luxury apartments Lullanagar",
    "ultra premium homes Pune",
    "retail shops Lullanagar Pune",
    "luxury retail spaces Pune",
    "3 BHK luxury apartments Pune",
    "4 BHK residences Pune",
    "5 BHK luxury homes Pune",
    "premium real estate Pune",
    "luxury property Lullanagar",
    "retail spaces Pune",
    "commercial shops Pune",
    "Tribeca Developers Pune",
  ],

  verification: {
    google: "PUd7H1wq1W2Z4LWfDF6gbCEeVq9TuQ4LposgCwPC1oc",
  },

  openGraph: {
    title:
      "The Everett Pune | Luxury Residences & Retail Spaces in Lullanagar",

    description:
      "Ultra-premium 3, 4 & 5 BHK residences and curated retail spaces in Lullanagar, Pune. Experience landmark living with panoramic city views and world-class amenities.",

    url: "https://www.tribeca-theeverett-lullanagar.com",

    siteName: "The Everett Pune",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Everett Pune",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "The Everett Pune | Luxury 3, 4 & 5 BHK Homes & Retail Spaces",

    description:
      "Discover ultra-premium residences and curated retail spaces in Lullanagar, Pune.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.tribeca-theeverett-lullanagar.com",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0f1720",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta */}
        <meta name="author" content="The Everett Pune" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.4967;73.9010" />
        <meta name="ICBM" content="18.4967, 73.9010" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>
          {/* Luxury Grain Overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-50 opacity-[0.012] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {children}
        </SmoothScroll>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YVQW19GP1W"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YVQW19GP1W');
          `}
        </Script>
      </body>
    </html>
  );
}