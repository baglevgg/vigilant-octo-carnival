import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = new URL(siteUrlString);
const socialSameAs = [
  process.env.NEXT_PUBLIC_GITHUB_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
  process.env.NEXT_PUBLIC_TWITTER_URL,
  process.env.NEXT_PUBLIC_LEETCODE_URL,
  process.env.NEXT_PUBLIC_PORTFOLIO_URL,
].filter(Boolean) as string[];

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Gaurav Dhakal | AI/ML Engineer | Learn Byte | Machine Learning Expert",
    template: "%s | Gaurav Dhakal",
  },
  description:
    "Gaurav Dhakal - Expert AI/ML/DL Engineer specializing in Machine Learning, Deep Learning, Data Structures \u0026 Algorithms. Learn Byte founder. Building intelligent systems and teaching AI concepts.",
  keywords: [
    "Gaurav Dhakal",
    "Gaurav",
    "Dhakal",
    "Learn Byte",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Structures",
    "Algorithms",
    "Python Developer",
    "AI/ML Expert",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Data Science",
    "AI Developer",
    "Machine Learning Specialist",
    "Deep Learning Specialist",
    "AI Researcher",
    "Learn Byte Founder",
    "Tech Educator",
    "AI Instructor",
    "Programming Tutorial",
    "Coding Education",
    "Software Engineer",
    "Full Stack Developer",
    "Nepal AI Engineer",
    "AI ML Nepal",
  ],
  authors: [{ name: "Gaurav Dhakal", url: siteUrlString }],
  creator: "Gaurav Dhakal",
  publisher: "Learn Byte",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
    description:
      "Expert AI/ML Engineer specializing in Machine Learning, Deep Learning \u0026 Algorithms. Building intelligent systems and educating developers worldwide.",
    siteName: "Gaurav Dhakal - AI/ML Engineer",
    locale: "en_US",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Gaurav Dhakal - AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
    description:
      "Expert AI/ML Engineer specializing in Machine Learning, Deep Learning \u0026 Algorithms. Building intelligent systems.",
    images: ["/globe.svg"],
    creator: "@GauravDhakal",
    site: "@LearnByte",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: "technology",
  other: {
    "geo.region": "NP",
    "geo.placename": "Nepal",
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${siteUrlString}/`} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Dhakal",
              alternateName: ["Gaurav", "Dhakal Gaurav"],
              url: siteUrlString,
              jobTitle: "AI/ML Engineer",
              description: "Expert AI/ML Engineer specializing in Machine Learning, Deep Learning, and Artificial Intelligence. Founder of Learn Byte.",
              brand: { "@type": "Brand", name: "Learn Byte" },
              worksFor: {
                "@type": "Organization",
                name: "Learn Byte",
                url: siteUrlString,
              },
              founder: {
                "@type": "Organization",
                name: "Learn Byte",
              },
              image: `${siteUrlString}/globe.svg`,
              sameAs: socialSameAs,
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Data Structures and Algorithms",
                "Python Programming",
                "NumPy",
                "Pandas",
                "Neural Networks",
                "Computer Vision",
                "Natural Language Processing",
                "Data Science",
                "Software Engineering",
                "Full Stack Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "AI/ML Engineer",
                description: "Develops and implements machine learning and deep learning solutions",
                occupationLocation: {
                  "@type": "Country",
                  name: "Nepal",
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gaurav Dhakal - AI/ML Engineer",
              url: siteUrlString,
              description: "Personal portfolio and blog of Gaurav Dhakal, Expert AI/ML Engineer",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrlString}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
              author: {
                "@type": "Person",
                name: "Gaurav Dhakal",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Learn Byte",
              url: siteUrlString,
              logo: `${siteUrlString}/globe.svg`,
              founder: {
                "@type": "Person",
                name: "Gaurav Dhakal",
              },
              description: "Educational technology brand focused on AI/ML education and development",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrlString,
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
