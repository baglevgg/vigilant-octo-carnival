import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Dhakal | Gaurav",
  description:
    "Gaurav (Gaurav Dhakal) — AI/ML/DL engineer. Overview, links, and brand Learn Byte.",
  alternates: { canonical: "/gaurav-dhakal" },
};

export default function GauravAliasPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Gaurav", item: `${siteUrl}/gaurav` },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Gaurav Dhakal</h1>
      <p className="mt-4 text-gray-700">Alias: Gaurav. See the main profile page below.</p>
      <p className="mt-2"><a className="text-purple-600 underline" href="/gaurav-dhakal">Go to main profile</a></p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <link rel="canonical" href={`${siteUrl}/gaurav-dhakal`} />
    </main>
  );
}


