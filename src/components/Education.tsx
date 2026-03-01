import { Book, GraduationCap, Code } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useInView } from "./useInView";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "SLIIT",
    period: "2021 – 2025",
    description:
      "Completed a comprehensive IT program with hands-on experience in programming, web development, mobile applications, software development, and software testing. Actively participated in collaborative projects and practical lab work to strengthen technical skills and teamwork.",
    highlights: [
      "Programming: Java, C++, Python, and JavaScript fundamentals.",
      "Web & Mobile Development: Built responsive web apps with React.js and mobile apps with Kotlin.",
      "Software Testing: Conducted automated testing using Selenium on real-world projects.",
      "Team Collaboration: Worked in groups for multiple projects, improving communication and project management skills.",
    ],
  },
];

export default function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Education"
          subtitle="My academic background and learning journey"
        />

        <div ref={ref} className="relative mt-16">
          {/* Decorative timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full hidden md:block" />

          {education.map((edu, idx) => (
            <div
              key={edu.institution}
              className={`relative md:pl-20 mb-16 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-primary-50 dark:bg-primary-500/10 px-4 py-2 rounded-lg">
                    <Book className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}