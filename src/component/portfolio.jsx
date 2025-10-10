import { Github, Linkedin, Mail, Code, ExternalLink } from "lucide-react";
import AmazonwithReact from "../assets/Amazon Clone Page with React.png";
import AmazonwithJs from "../assets/Amazon Clone Page with Js.png";
import TodoListwithJs from "../assets/To-do List.png";
import TodoListwithReact from "../assets/To-do List with React.png";
import Calculator from "../assets/Calculator.png";
import RecipeFinder from "../assets/Recipe Finder.png";

export default function Portfolio() {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "Responsive Design",
  ];

  const projects = [
    {
      id: 1,
      title: "Amazon Clone (React)",
      description:
        "Developed a React-based Amazon page clone with component-driven architecture, implementing API communication and a dynamic shopping cart feature.",
      technologies: ["React", "JavaSript", "CSS"],
      image: AmazonwithReact,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/Amazon%20Clone%20Page%20with%20React",
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "Developed a front-end clone of the Amazon homepage using HTML, CSS, and JavaScript, implementing component-based logic for scalability and maintainability.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: AmazonwithJs,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/Amazon%20Page%20Clone",
    },
    {
      id: 3,
      title: "To-Do List",
      description:
        "Developed a to-do list application with HTML, CSS, and JavaScript, implementing task editing, image management, and demo features to showcase functionality.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: TodoListwithJs,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/Todo%20List",
    },
    {
      id: 4,
      title: "To-Do List (React)",
      description:
        "A to-do list application built with React, JavaScript, and CSS, featuring task creation and management functionalities.",
      technologies: ["React", "JavaSript", "CSS"],
      image: TodoListwithReact,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/To-do%20List%20with%20React",
    },
    {
      id: 5,
      title: "Calculator",
      description:
        "A calculator application built with HTML, CSS, and JavaScript, featuring a clean interface and functional design.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: Calculator,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/Calculator",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description:
        "Interactive recipe search application with filters, favorites, and meal planning features.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: RecipeFinder,
      github:
        "https://github.com/osmantazeoglu/My-Project/tree/master/Recipe%20Finder",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Junior Full Stack Developer
              </p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl">
                I'm a Junior Full Stack Developer with a strong focus on
                building clean, efficient, and user-centered web applications.
                My main stack includes React, Node.js, and Tailwind CSS, which I
                use to create responsive and modern interfaces. I'm constantly
                improving my skills to write better code and deliver
                high-quality digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="mailto:osmanntazeoglu@gmail.com"
                  className="w-full sm:w-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://github.com/osmantazeoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/osmantazeoglu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
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
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 md:hover:transform md:hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-300"
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
