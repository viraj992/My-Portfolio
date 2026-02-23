import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useInView } from './useInView';

interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Quotation Management System',
    role: 'Full Stack Developer',
    period: '2024 – Present',
    points: [
      'Built an end-to-end quotation management system using React.js for the frontend and Express.js for the backend',
      'Successfully migrated the database from MongoDB to MySQL for better relational data management',
      'Integrated RESTful APIs for seamless communication between frontend and backend systems',
      'Implemented user authentication, role-based access control, and data validation',
    ],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and key contributions"
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`card p-8 relative ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />

              <div className="ml-4">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-500/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className={`flex items-start gap-3 ${
                        isInView ? 'animate-fade-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${(idx * 0.2) + (pIdx * 0.1) + 0.3}s` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
