import type { JSX } from "react";
import SectionHeading from "./SectionHeading";
import { useInView } from "./useInView";

/* icons */

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiFlutter,
  SiDart,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaPython } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { LuServer } from "react-icons/lu";

/* tech icons */

const icons: Record<string, { icon: JSX.Element; color: string }> = {
  React: { icon: <SiReact size={32} />, color: "#61DAFB" },
  JavaScript: { icon: <SiJavascript size={32} />, color: "#F7DF1E" },
  TypeScript: { icon: <SiTypescript size={32} />, color: "#3178C6" },
  HTML5: { icon: <SiHtml5 size={32} />, color: "#E34F26" },
  CSS3: { icon: <SiCss size={32} />, color: "#1572B6" },
  "Tailwind CSS": { icon: <SiTailwindcss size={32} />, color: "#06B6D4" },
  Redux: { icon: <SiRedux size={32} />, color: "#764ABC" },
  "shadcn/ui": { icon: <SiShadcnui size={32} />, color: "#000000" },

  "Node.js": { icon: <SiNodedotjs size={32} />, color: "#339933" },
  "Express.js": { icon: <SiExpress size={32} />, color: "#888888" },
  Java: { icon: <FaJava size={32} />, color: "#f89820" },
  "Spring Boot": { icon: <SiSpringboot size={32} />, color: "#6DB33F" },
  "REST API": { icon: <LuServer size={32} />, color: "#FF6B6B" },

  Flutter: { icon: <SiFlutter size={32} />, color: "#02569B" },
  Dart: { icon: <SiDart size={32} />, color: "#0175C2" },

  MySQL: { icon: <SiMysql size={32} />, color: "#4479A1" },
  MongoDB: { icon: <SiMongodb size={32} />, color: "#47A248" },

  Python: { icon: <FaPython size={32} />, color: "#3776AB" },

  Git: { icon: <SiGit size={32} />, color: "#F05032" },
  GitHub: { icon: <SiGithub size={32} />, color: "#a78bfa" },
  "VS Code": { icon: <VscVscode size={32} />, color: "#007ACC" },
  Postman: { icon: <SiPostman size={32} />, color: "#FF6C37" },
  npm: { icon: <SiNpm size={32} />, color: "#CB3837" },
  Figma: { icon: <SiFigma size={32} />, color: "#F24E1E" },
};

/* categories */

const categories = [
  {
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces.",
    accent: "from-orange-400 to-amber-500",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "shadcn/ui",
    ],
  },

  {
    title: "Backend Development",
    description: "Developing scalable server-side applications and APIs.",
    accent: "from-green-400 to-emerald-500",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST API"],
  },

  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications.",
    accent: "from-indigo-400 to-blue-500",
    skills: ["Flutter", "Dart"],
  },

  {
    title: "Database & Storage",
    description: "Managing structured and NoSQL data systems.",
    accent: "from-blue-400 to-cyan-500",
    skills: ["MySQL", "MongoDB"],
  },

  {
    title: "Programming Languages",
    description: "Languages used across different platforms.",
    accent: "from-yellow-400 to-orange-500",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Dart"],
  },

  {
    title: "Tools & Workflow",
    description: "Tools supporting development workflow.",
    accent: "from-purple-400 to-pink-500",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Figma"],
  },
];

/* skill tile */

function SkillTile({ name }: { name: string }) {
  const data = icons[name];
  if (!data) return null;

  return (
    <div
      className="group flex flex-col items-center justify-center w-24 h-24 rounded-2xl
      bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700
      hover:scale-105 hover:shadow-md transition"
    >
      <span style={{ color: data.color }} className="mb-2">
        {data.icon}
      </span>

      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
}

/* main component */

export default function Skills() {
  const { ref } = useInView();

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to build full-stack and mobile applications."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="card p-8">
              <h3
                className={`font-display text-xl font-bold bg-gradient-to-r ${cat.accent} bg-clip-text text-transparent mb-2`}
              >
                {cat.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <SkillTile key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}