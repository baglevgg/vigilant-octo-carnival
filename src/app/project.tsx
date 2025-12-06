import React from 'react';

const projects = [
  {
    name: 'Ransomware',
    description: 'A demo project to show how ransomware works.',
    features: [
      'A simple ransomware',

    ],
    techStack: ['html', 'CSS', 'javascript'],
    link: 'https://ransomware.sdj.com.np', // Replace with actual project link
  },
]

const Project = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 lg:px-32 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
        <span className="border-b-4 border-purple-500 pb-2">My Projects</span>
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            {project.features && (
              <ul className="mt-3 text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="mt-3">
              <strong className="text-gray-800">Tech Stack:</strong>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-md">{tech}</li>
                ))}
              </ul>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-purple-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
