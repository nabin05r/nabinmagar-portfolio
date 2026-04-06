import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/sections/menu/Menu";
import { LenisProvider } from "@/components/ui/LenisProvider";
import { Header } from "@/components/sections/Header";
import { PreLoader } from "@/components/ui/PreLoader";
import { Footer } from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nabin Gharti Magar | WordPress & Headless Developer",
  description: "Nabin Magar (Nabin Gharti Magar) - Senior Full Stack WordPress Developer based in Kathmandu, Nepal. One of Nepal's experienced WordPress developers specializing in custom themes, plugins, WooCommerce, and headless Next.js architectures.",
  keywords: [
    "WordPress Developer",
    "Headless WordPress",
    "Next.js",
    "WPGraphQL",
    "PHP",
    "Nepal",
    "Nabin Magar",
    "Nabin Gharti Magar",
    "WordPress Developer Nepal",
    "WordPress Developer Kathmandu",
    "Top WordPress Developer Nepal",
    "Best WordPress Developer Nepal",
    "Freelance WordPress Developer Nepal",
    "Headless WordPress Nepal",
  ],
  authors: [{ name: "Nabin Gharti Magar" }],
  creator: "Nabin Gharti Magar",
  openGraph: {
    title: "Nabin Gharti Magar | WordPress & Headless Developer",
    description: "Senior Full Stack WordPress Developer specializing in custom WordPress and headless Next.js architectures.",
    url: "https://nabinmagar.com",
    siteName: "Nabin Gharti Magar Portfolio",
     images: [
      {
        url: "https://nabinmagar.com/nabinmagar-sticker.png",
        width: 1200,
        height: 630,
        alt: "Nabin Gharti Magar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabin Gharti Magar | WordPress & Headless Developer",
    description: "Senior Full Stack WordPress Developer specializing in custom WordPress and headless Next.js architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} antialiased font-sans relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nabin Gharti Magar",
              "alternateName": "Nabin Magar",
              "image": "https://nabinmagar.com/nabinmagar-sticker.png",
              "url": "https://nabinmagar.com",
              "jobTitle": "WordPress & Headless Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Funz Technology"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kathmandu",
                "addressCountry": "Nepal"
              },
              "sameAs": [
                "https://www.linkedin.com/in/nabin-magar-354879261/",
                "https://github.com/nabin05r",
                "https://wordpress.org/support/users/nabinmagar/"
              ]
            })
          }}
        />
        <PreLoader />
        <LenisProvider />
        <Header />
        <Menu />
        {children}
        <Footer />
        <Analytics /> 
      </body>
    </html>
  );
}
