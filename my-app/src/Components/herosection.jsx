import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative flex justify-between bg-gray-950 min-h-screen items-start px-30 pt-20 text-white font-sans overflow-hidden">

      {/* Background Blurred Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-30 right-10 w-96 h-50 bg-purple-600 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-20 right-1/3 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

      {/* Left Content */}
      <div className="flex flex-col ml-20 mt-10 gap-6 max-w-lg relative z-10">
        <p className="text-sm text-gray-300">Hey there! I'm</p>
        <h1 className="text-5xl font-light bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Maheen Farhat
        </h1>
        <h2 className="text-2xl text-gray-300">Full Stack Web Developer</h2>

        {/* Social Icons */}
        <div className="flex gap-4 text-3xl">
          <a href="https://www.linkedin.com/in/maheen-farhat-2b4b9821b/" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:scale-110 hover:text-purple-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:scale-110 hover:text-purple-400 transition">
            <FaGithub />
          </a>
          <a href="mailto:maheenfarhat07@gmail.com"
             className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:scale-110 hover:text-purple-400 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition transform shadow-lg">
          View My Work
        </button>
      </div>

      {/* Right Content (Cool Image Styling) */}
      <div className="relative group w-[400px] h-[400px] mr-10 z-10">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-700 p-[3px] animate-spin">
          <div className="w-full h-full rounded-full bg-gray-950"></div>
        </div>

        {/* Image inside */}
        <img 
          src="coder.jpg" 
          alt="coder"
          className="relative z-10 rounded-full w-full h-full object-cover p-2 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default HeroSection;
