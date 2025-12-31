import { Code } from "lucide-react";

export default function TechnicalSkills() {
  const skills = [
    "React",
    "TypeScript",
    "Frontend Architecture & Component Design",
    "React Query (Data Fetching & Caching)",
    "HTML5 & CSS3 (Responsive UI)",
    "Material UI (MUI) & Styled Components",
    "REST API Integration",
    "Node.js & Express.js",
    "State Management (Hooks, Context API)",
    "Performance Optimization & Accessibility",
  ];

  return (
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
  );
}

