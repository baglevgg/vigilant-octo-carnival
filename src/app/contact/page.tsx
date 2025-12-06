import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Gaurav Dhakal - AI/ML Engineer | Learn Byte',
    description: 'Get in touch with Gaurav Dhakal for AI/ML consulting, machine learning projects, or Learn Byte educational inquiries. Expert AI engineer available for collaborations.',
    keywords: ['Contact Gaurav Dhakal', 'AI ML Consulting', 'Hire AI Engineer', 'Learn Byte Contact'],
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-6 py-16">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contact Gaurav Dhakal
                    </h1>
                    <p className="text-xl text-gray-600">
                        Let&apos;s collaborate on your next AI/ML project
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Whether you&apos;re looking for AI/ML consulting, want to collaborate on a machine learning project,
                            or have questions about Learn Byte educational programs, <strong>Gaurav Dhakal</strong> is here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-semibold text-lg mb-2">AI/ML Consulting</h3>
                                <p className="text-gray-600">
                                    Expert guidance on machine learning projects, model development, and AI system architecture.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-semibold text-lg mb-2">Technical Education</h3>
                                <p className="text-gray-600">
                                    Learn Byte tutorials, courses, and mentorship programs for aspiring AI/ML engineers.
                                </p>
                            </div>

                            <div className="p-6 bg-white rounded-xl shadow-md">
                                <h3 className="font-semibold text-lg mb-2">Project Collaboration</h3>
                                <p className="text-gray-600">
                                    Full-stack AI/ML development, from concept to deployment.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Connect Online</h2>
                        <div className="space-y-4">
                            <a
                                href={process.env.NEXT_PUBLIC_GITHUB_URL || '#'}
                                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                                <p className="text-gray-600">View open-source projects and code samples</p>
                            </a>

                            <a
                                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
                                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                                <p className="text-gray-600">Professional network and career updates</p>
                            </a>

                            <a
                                href={process.env.NEXT_PUBLIC_YOUTUBE_URL || '#'}
                                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="font-semibold text-lg mb-2">YouTube - Learn Byte</h3>
                                <p className="text-gray-600">Video tutorials and educational content</p>
                            </a>

                            <a
                                href={process.env.NEXT_PUBLIC_TWITTER_URL || '#'}
                                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className="font-semibold text-lg mb-2">Twitter</h3>
                                <p className="text-gray-600">Latest updates and tech insights</p>
                            </a>
                        </div>
                    </section>
                </div>

                <aside className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-center">About Response Time</h2>
                    <p className="text-gray-700 text-center">
                        <strong>Gaurav Dhakal</strong> typically responds to inquiries within 24-48 hours.
                        For urgent AI/ML consulting needs, please mention &quot;Urgent&quot; in your message.
                    </p>
                </aside>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        name: 'Contact Gaurav Dhakal',
                        description: 'Contact page for Gaurav Dhakal, AI/ML Engineer and Learn Byte founder',
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'Professional Services',
                            areaServed: 'Worldwide',
                            availableLanguage: ['English'],
                        },
                    }),
                }}
            />
        </main>
    );
}
