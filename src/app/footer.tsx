import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Gaurav Dhakal</h2>
          <p className="text-sm text-gray-400">A Learner of AI/ML</p>

          <a
            href="mailto:gaurav@sdj.com.np"
            className="mt-2 flex items-center justify-center md:justify-start text-purple-400 hover:text-purple-300 transition gap-2"
          >
            <FaEnvelope className="text-lg" />
            <span className="text-sm">gaurav@sdj.com.np</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-4 md:mt-0 text-2xl">

          <a
            href="https://github.com/imgauravdhakal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-dhakal-851b7a373/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Gaurav Dhakal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
