import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Jewels',
      description: "A 3D jewelry store for customizable jewelry, customers can customize the gem and metal colors and view them getting applied on 3D jewelry objects",
      image: 'jewels.png',
      tags: ["React", "Three.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveUrl: 'https://jewels-flame.vercel.app',
      githubUrl: '#'
    },
    // {
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
    //   image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   id: 3,
    //   title: 'Weather Forecast App',
    //   description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tags: ['React', 'Weather API', 'Maps API', 'CSS Animations'],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-950"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light md:text-5xl  mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Overlay with Actions */}
                <div className={`absolute inset-0 bg-black/70 flex items-center justify-center space-x-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Eye size={20} className="text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30 group-hover:bg-purple-800/40 group-hover:border-purple-400/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View More Projects
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
