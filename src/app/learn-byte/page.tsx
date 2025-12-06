import React from "react";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Gaurav Dhakal | Learn Byte",
  description:
    "Learn Byte is a resource hub by Gaurav Dhakal for AI/ML/DL tutorials, tools, and projects.",
  keywords: ["Learn Byte", "Gaurav Dhakal", "AI", "Machine Learning", "Deep Learning"],
  alternates: { canonical: "/learn-byte" },
};

export default function LearnBytePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Learn Byte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI/ML learning brand by Gaurav Dhakal with practical tutorials and projects.",
        },
      },
      {
        "@type": "Question",
        name: "Who runs Learn Byte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Learn Byte is run by AI/ML engineer Gaurav Dhakal.",
        },
      },
    ],
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Learn Byte", item: `${siteUrl}/learn-byte` },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Learn Byte</h1>
      <p className="mt-4 text-gray-700">
        Tutorials, tools, and projects in AI/ML/DL, created by Gaurav Dhakal.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What you&apos;ll find</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Hands-on ML tutorials</li>
          <li>Deep learning experiments</li>
          <li>Open-source project templates</li>
          <li>Guides for data preparation and evaluation</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <link rel="canonical" href={`${siteUrl}/learn-byte`} />
    </main>
  );
}


