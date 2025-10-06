import { Github, Linkedin, Mail, Code, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with shopping cart, payment integration, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Beautiful weather application showing current conditions, forecasts, and interactive maps using external APIs.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 4,
      title: "Portfolio CMS",
      description:
        "Content management system for portfolios with customizable themes and real-time preview.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and export functionality.",
      technologies: ["React", "D3.js", "REST API"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description:
        "Interactive recipe search application with filters, favorites, and meal planning features.",
      technologies: ["React", "Spoonacular API", "LocalStorage"],
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
    {
      id: 7,
      title: "Fitness Tracker",
      description:
        "Personal fitness tracking app with workout logging, progress charts, and goal setting.",
      technologies: ["React", "Chart.js", "CSS Animations"],
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
      github: "https://github.com/osmantazeoglu",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold text-white">
                  OT
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Osman Tazeoglu
              </h1>
              <p className="text-2xl text-blue-300 mb-6">
                Junior Software Developer
              </p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                I'm a Junior Software Developer with a strong focus on building
                clean, efficient, and user-centered web applications. My main
                stack includes React, Node.js, and Tailwind CSS, which I use to
                create responsive and modern interfaces. I'm constantly
                improving my skills to write better code and deliver
                high-quality digital experiences.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:osmanntazeoglu@gmail.com"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://github.com/osmantazeoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/osmantazeoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Code className="text-blue-400" size={32} />
          <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-blue-200 font-medium hover:border-blue-400/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2025 Osman Tazeoglu. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:osmanntazeoglu@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                osmanntazeoglu@gmail.com
              </a>
              <a
                href="https://github.com/osmantazeoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/osmantazeoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
