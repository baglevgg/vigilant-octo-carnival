import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Gaurav Dhakal | Blog" };
  return {
    title: `Gaurav Dhakal | ${post.title}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{post.title}</h1>
      <time className="text-gray-400 text-sm">{new Date(post.date).toDateString()}</time>
      <article className="prose prose-purple mt-6">
        <p>{post.content}</p>
      </article>
    </main>
  );
}


