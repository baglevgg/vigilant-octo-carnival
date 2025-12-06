export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  content: string;
};

export const posts: Post[] = [
  {
    slug: "introducing-gaurav-dhakal",
    title: "Gaurav Dhakal — Introduction and Mission",
    description:
      "Who is Gaurav Dhakal? Background, focus on AI/ML/DL, and the mission behind Learn Byte.",
    date: "2025-01-01",
    content:
      "Gaurav Dhakal is an AI/ML/DL engineer focused on building useful, explainable systems and sharing practical knowledge via Learn Byte.",
  },
  {
    slug: "learn-byte-vision",
    title: "Learn Byte by Gaurav Dhakal — Vision and Roadmap",
    description:
      "The Learn Byte vision — practical tutorials, open-source templates, and hands-on projects.",
    date: "2025-01-10",
    content:
      "Learn Byte is the platform where Gaurav Dhakal publishes tutorials, tools, and project templates for AI/ML/DL practitioners.",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}


