"use client"; // Ensures client-side rendering
 
import React from "react";
import Image from "next/image";

// Import Images
import js from "../assets/js.png"; // Ensure correct path
import figmaskill from "../assets/figmaskill.png"; // Ensure correct path

const Education = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 flex flex-col py-20 px-10 lg:px-20 min-h-screen">
      
      {/* Floating Decorative Images */}
      <Image 
        src={js} 
        alt="JavaScript Logo" 
        width={140} 
        height={140} 
        className="absolute top-0 right-0 opacity-30 w-40"
      />
    
      <Image 
        src={figmaskill} 
        alt="Figma Skill" 
        width={200} 
        height={200} 
        className="absolute bottom-0 right-0 opacity-20 w-48"
      />

      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-gray-900 mb-16 border-b-4 border-purple-500 inline-block">
        EDUCATION
      </h1>

      {/* Education Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        
        {/* University */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-gray-800">New Horizon E.B.S|2025</h2>
          <p className="text-lg text-gray-700 mt-2">
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Class:7</strong>
          </p>
        </div>

        {/* School */}
        

      </div>

      {/* Strengths Section */}
      <h1 className="text-5xl font-extrabold text-gray-900 mt-24 mb-12 border-b-4 border-purple-500 inline-block">
        MY STRENGTHS
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        
        {/* Adaptability */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-800">Adaptability & Fast Learning</h2>
          <p className="text-gray-700 mt-2">
            I am highly adaptable and can learn new technologies quickly. My ability to grasp new concepts and implement them efficiently allows me to excel in dynamic environments.
          </p>
        </div>

        {/* Problem-Solving */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-gray-800">Problem-Solving Mindset</h2>
          <p className="text-gray-700 mt-2">
            I enjoy tackling complex problems with logical and creative solutions. My strong foundation in data structures and algorithms helps me optimize solutions effectively.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Education;
