import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Gaurav Dhakal | Blog",
  description: "Blog by Gaurav Dhakal about AI/ML/DL and engineering.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Gaurav Dhakal — Blog</h1>
      <p className="mt-4 text-gray-700">
        Articles and notes by <strong>Gaurav Dhakal</strong> on AI/ML/DL and engineering.
      </p>
      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} className="text-purple-600 hover:underline text-xl font-semibold">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <time className="text-gray-400 text-sm">{new Date(post.date).toDateString()}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}


