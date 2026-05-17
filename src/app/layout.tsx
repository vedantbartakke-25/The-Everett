import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Everett — A Quiet Masterpiece in Lullanagar, Pune",
  description:
    "Ultra-premium 3, 4 & 5-bedroom residences in Lullanagar, Pune. Rising ~370 feet across 31 levels — the defining tower of this micro-market. Trophy living, redefined.",
  keywords:
    "the everett pune, luxury residences lullanagar, ultra premium apartments pune, 5 bedroom apartments pune, luxury real estate pune, tribeca developers",
  openGraph: {
    title: "The Everett — A Quiet Masterpiece in Lullanagar, Pune",
    description:
      "Ultra-premium residences in Lullanagar, Pune. Rising ~370 feet across 31 levels — trophy living, redefined.",
    type: "website",
    locale: "en_IN",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
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
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>
          <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.012] mix-blend-overlay"
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
