import { Briefcase } from "lucide-react";

export default function ProfessionalExperiences() {
  const experiences = [
    {
      id: 1,
      company: "osapiens Hub GmbH",
      position: "Full Stack Developer",
      employmentType: "Full-time",
      startDate: "Aug 2024",
      endDate: "Present",
      duration: "1 year 5 months",
      location: "Mannheim, Germany · Remote",
      description:
        "Worked on developing and maintaining scalable frontend modules using React and TypeScript within a large monorepo environment. Contributed to shared frontend standards, including reusable React Query patterns and component libraries. Collaborated with cross-functional teams to deliver high-quality features while maintaining code quality and performance standards.",
      skills: ["TypeScript", "React Query", "React", "Frontend Architecture", "Monorepo"],
      logoColor: "from-green-500 to-green-600",
    },
    {
      id: 2,
      company: "Argenova",
      position: "Full Stack Engineer",
      employmentType: "Full-time",
      startDate: "Aug 2023",
      endDate: "Sep 2024",
      duration: "1 year 2 months",
      location: "Kocaeli, Turkey · Remote",
      description:
        "Developed SEO-friendly and multilingual corporate websites with a strong focus on performance and usability. Built frontend and backend features for field management systems and internal dashboards using modern web technologies. Implemented responsive designs and optimized applications for better user experience.",
      skills: ["React", "React Query", "Node.js", "Express.js", "SEO"],
      logoColor: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      company: "Ersa Yazılım",
      position: "Full Stack Engineer",
      employmentType: "Full-time",
      startDate: "Feb 2022",
      endDate: "Aug 2023",
      duration: "1 year 7 months",
      location: "Istanbul, Turkey · Remote",
      description:
        "Built modern web applications including e-commerce platforms, admin panels, and real-time monitoring systems. Developed reusable frontend components and implemented clear state management patterns to ensure maintainable and scalable codebases. Worked on both frontend and backend development to deliver end-to-end solutions.",
      skills: ["Frontend Architecture & Component Design", "React", "State Management"],
      logoColor: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-12">
        <Briefcase className="text-blue-400" size={32} />
        <h2 className="text-4xl font-bold text-white">Professional Experiences</h2>
      </div>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex gap-6 pb-8 ${
              index !== experiences.length - 1 ? "border-b border-slate-700" : ""
            }`}
          >
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${experience.logoColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {experience.company
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .substring(0, 2)
                  .toUpperCase()}
              </div>
            </div>
            {/* Experience Details */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-blue-300 mb-2">{experience.company}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-3">
                <span>{experience.employmentType}</span>
                <span>•</span>
                <span>
                  {experience.startDate} - {experience.endDate}
                </span>
                <span>•</span>
                <span>{experience.duration}</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">{experience.location}</p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

