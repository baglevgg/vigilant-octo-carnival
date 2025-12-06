import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
  description:
    "Discover who Gaurav Dhakal is: AI/ML/DL engineer. Projects, skills, and contact. Learn Byte brand.",
  keywords: ["Gaurav", "Gaurav Dhakal", "Learn Byte", "AI", "Machine Learning", "Deep Learning"],
  alternates: { canonical: "/gaurav-dhakal" },
};

export default function GauravPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Gaurav Dhakal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI/ML/DL engineer focused on building intelligent systems and sharing knowledge via Learn Byte.",
        },
      },
      {
        "@type": "Question",
        name: "What is Learn Byte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A brand and platform by Gaurav Dhakal focused on AI/ML learning resources, projects, and tutorials.",
        },
      },
    ],
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Gaurav Dhakal", item: `${siteUrl}/gaurav-dhakal` },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Gaurav Dhakal</h1>
      <p className="mt-4 text-gray-700">
        AI/ML/DL engineer. Passionate about machine learning, deep learning, and data structures & algorithms.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Focus Areas</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Supervised and unsupervised learning</li>
          <li>Deep learning with modern frameworks</li>
          <li>Data engineering with NumPy, Pandas</li>
          <li>E2E ML projects and evaluation</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Brand: Learn Byte</h2>
        <p className="text-gray-700 mt-2">
          Learn Byte is Gaurav&apos;s initiative to simplify AI/ML through practical tutorials, tools, and projects.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <link rel="canonical" href={`${siteUrl}/gaurav-dhakal`} />
    </main>
  );
}


