import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileSection() {
  return (
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
              Full Stack Developer
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              Full Stack / Frontend Developer with hands-on experience
              building and maintaining modern, user-focused web applications
              using React and TypeScript. I focus on clean component
              structures, performance, and maintainable code, working
              primarily on frontend-heavy features while being comfortable
              across the full stack.
              <br></br><br></br>
              I enjoy improving existing codebases,
              collaborating with designers and backend engineers, and
              delivering reliable solutions that balance technical quality
              with real business needs.
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
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

