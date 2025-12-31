import { Github } from "lucide-react";
import AmazonwithReact from "../assets/Amazon Clone Page with React.png";
import AmazonwithJs from "../assets/Amazon Clone Page with Js.png";
import TodoListwithJs from "../assets/To-do List.png";
import TodoListwithReact from "../assets/To-do List with React.png";
import Calculator from "../assets/Calculator.png";
import RecipeFinder from "../assets/Recipe Finder.png";

export default function SideProjects() {
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
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Side Projects
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
  );
}

