import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - Gaurav Dhakal | AI/ML Engineer Questions Answered',
    description: 'Frequently asked questions about Gaurav Dhakal, AI/ML Engineer and Learn Byte founder. Get answers about machine learning, deep learning, and AI services.',
    keywords: ['Gaurav Dhakal FAQ', 'AI ML Questions', 'Machine Learning Expert', 'Learn Byte'],
};

const faqs = [
    {
        question: 'Who is Gaurav Dhakal?',
        answer: 'Gaurav Dhakal is an expert AI/ML Engineer specializing in Machine Learning, Deep Learning, and Artificial Intelligence. He is the founder of Learn Byte, an educational technology brand focused on making AI/ML education accessible to developers worldwide.',
    },
    {
        question: 'What services does Gaurav Dhakal offer?',
        answer: 'Gaurav Dhakal offers AI/ML consulting, machine learning model development, deep learning solutions, technical education through Learn Byte, and full-stack AI application development.',
    },
    {
        question: 'What is Learn Byte?',
        answer: 'Learn Byte is an educational technology brand founded by Gaurav Dhakal. It provides comprehensive AI/ML tutorials, programming courses, practical projects, and technical content to help developers master artificial intelligence and machine learning.',
    },
    {
        question: 'What technologies does Gaurav Dhakal specialize in?',
        answer: 'Gaurav specializes in Python, TensorFlow, PyTorch, Scikit-learn, Keras, Neural Networks, Computer Vision, Natural Language Processing, and modern web technologies like Next.js, React, and TypeScript.',
    },
    {
        question: 'How can I learn AI/ML from Gaurav Dhakal?',
        answer: 'You can learn from Gaurav through Learn Byte tutorials, blog posts, and educational content. Follow his social media channels and check the blog section for latest AI/ML articles and guides.',
    },
    {
        question: 'Does Gaurav Dhakal offer consulting services?',
        answer: 'Yes, Gaurav Dhakal provides AI/ML consulting services including machine learning model development, system architecture design, and technical guidance for AI projects.',
    },
    {
        question: 'What makes Gaurav Dhakal different from other AI/ML engineers?',
        answer: 'Gaurav combines deep technical expertise with excellent teaching abilities. Through Learn Byte, he makes complex AI concepts accessible while maintaining professional-grade implementation standards.',
    },
    {
        question: 'Where is Gaurav Dhakal based?',
        answer: 'Gaurav Dhakal is based in Nepal and works with clients globally on AI/ML projects and educational initiatives.',
    },
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about Gaurav Dhakal and Learn Byte
                    </p>
                </header>

                <section className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
                    {faqs.map((faq, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900" itemProp="name">
                                {faq.question}
                            </h2>
                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p className="text-gray-700 leading-relaxed" itemProp="text">
                                    {faq.answer}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>

                <aside className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
                    <p className="text-gray-700 mb-6">
                        Contact Gaurav Dhakal directly for inquiries about AI/ML projects, consulting, or Learn Byte educational programs.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                    >
                        Get in Touch
                    </a>
                </aside>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map(faq => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />
        </main>
    );
}
