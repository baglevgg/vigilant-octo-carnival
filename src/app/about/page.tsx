import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Gaurav Dhakal - AI/ML Engineer | Learn Byte Founder',
    description: 'Learn more about Gaurav Dhakal, expert AI/ML Engineer specializing in Machine Learning, Deep Learning, and Artificial Intelligence. Founder of Learn Byte educational platform.',
    keywords: ['About Gaurav Dhakal', 'Gaurav Dhakal Bio', 'AI ML Engineer Nepal', 'Learn Byte Founder'],
    openGraph: {
        title: 'About Gaurav Dhakal - AI/ML Engineer',
        description: 'Expert AI/ML Engineer, Machine Learning specialist, and Learn Byte founder.',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <article className="max-w-4xl mx-auto px-6 py-16">
                <header className="mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Gaurav Dhakal
                    </h1>
                    <p className="text-xl text-gray-600">
                        AI/ML Engineer | Machine Learning Expert | Learn Byte Founder
                    </p>
                </header>

                <section className="space-y-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-semibold mb-4">Who is Gaurav Dhakal?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Gaurav Dhakal</strong> is an expert <strong>AI/ML Engineer</strong> with extensive experience in
                            <strong> Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Artificial Intelligence</strong>.
                            As the founder of <strong>Learn Byte</strong>, Gaurav is dedicated to making AI and ML education accessible
                            to developers worldwide.
                        </p>

                        <h2 className="text-3xl font-semibold mt-12 mb-4">Professional Expertise</h2>
                        <p className="text-gray-700 leading-relaxed">
                            With a strong foundation in <strong>Computer Science</strong> and years of hands-on experience,
                            <strong> Gaurav Dhakal</strong> specializes in:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Machine Learning Engineering</strong> - Building scalable ML systems</li>
                            <li><strong>Deep Learning</strong> - Neural networks and advanced architectures</li>
                            <li><strong>Computer Vision</strong> - Image recognition and object detection</li>
                            <li><strong>Natural Language Processing</strong> - Text analysis and language models</li>
                            <li><strong>Data Science</strong> - Statistical analysis and data visualization</li>
                            <li><strong>Algorithm Design</strong> - Efficient data structures and algorithms</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mt-12 mb-4">Learn Byte - Educational Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            <strong>Learn Byte</strong> is Gaurav&apos;s educational technology brand focused on:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Comprehensive AI/ML tutorials and courses</li>
                            <li>Practical machine learning projects</li>
                            <li>Programming best practices and coding education</li>
                            <li>Community-driven learning and mentorship</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mt-12 mb-4">Technical Skills</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
                                <ul className="space-y-1 text-gray-700">
                                    <li>• Python (Expert)</li>
                                    <li>• JavaScript/TypeScript</li>
                                    <li>• SQL</li>
                                    <li>• C/C++</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3">ML/AI Frameworks</h3>
                                <ul className="space-y-1 text-gray-700">
                                    <li>• TensorFlow</li>
                                    <li>• PyTorch</li>
                                    <li>• Scikit-learn</li>
                                    <li>• Keras</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-semibold mt-12 mb-4">Why Choose Gaurav Dhakal?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            When you work with <strong>Gaurav Dhakal</strong>, you get:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Expert Knowledge</strong> - Deep understanding of AI/ML concepts</li>
                            <li><strong>Practical Experience</strong> - Real-world project implementation</li>
                            <li><strong>Clear Communication</strong> - Complex concepts explained simply</li>
                            <li><strong>Proven Results</strong> - Track record of successful projects</li>
                            <li><strong>Continuous Learning</strong> - Always staying updated with latest AI trends</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mt-12 mb-4">Connect with Gaurav Dhakal</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Interested in collaborating on AI/ML projects or learning more about machine learning?
                            Connect with <strong>Gaurav Dhakal</strong> on social media or reach out directly through the contact page.
                        </p>
                    </div>
                </section>

                <aside className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
                    <dl className="space-y-3">
                        <div>
                            <dt className="font-semibold text-gray-900">Name:</dt>
                            <dd className="text-gray-700">Gaurav Dhakal</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-900">Role:</dt>
                            <dd className="text-gray-700">AI/ML Engineer</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-900">Specialization:</dt>
                            <dd className="text-gray-700">Machine Learning, Deep Learning, AI</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-900">Brand:</dt>
                            <dd className="text-gray-700">Learn Byte</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-gray-900">Location:</dt>
                            <dd className="text-gray-700">Nepal</dd>
                        </div>
                    </dl>
                </aside>
            </article>
        </main>
    );
}
