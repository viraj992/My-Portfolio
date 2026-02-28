import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useInView } from "./useInView";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Kelani Cables PLC",
    role: "Information Technology Trainee – Software Development",
    location: "Kelaniya, Sri Lanka",
    period: "July 2024 – Jan 2025",
    points: [
      "Developed a web-based Quotation Generation System to streamline quotation creation and management, improving operational efficiency.",
      "Designed and implemented both frontend and backend components using React.js and Express.js, ensuring smooth end-to-end functionality.",
      "Integrated the system with a MySQL database, effectively managing relational data storage and retrieval.",
      "Initially built using the MERN stack and later migrated from MongoDB to MySQL to align with company requirements.",
      "Implemented RESTful APIs to support quotation creation, updates, and retrieval for reliable system performance.",
      "Collaborated with stakeholders to gather requirements and delivered features within defined project timelines.",
    ],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and contributions"
        />

        <div ref={ref} className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full hidden md:block" />

          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className={`relative md:pl-20 mb-16 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-primary-50 dark:bg-primary-500/10 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {point}
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