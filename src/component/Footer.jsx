import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
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
  );
}

