import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useInView } from './useInView';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'Quotation Generation System',
    description:
      'A full-featured quotation management system enabling users to create, manage, and track quotations. Built with a robust backend API and responsive React frontend for seamless user experience.',
    tech: ['React.js', 'Express.js', 'MySQL', 'REST API', 'Node.js'],
    github: '#',
    demo: '#',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Admin Dashboard System',
    description:
      'An intuitive admin dashboard with real-time data visualization, user management, role-based access control, and comprehensive analytics. Designed for efficient business operations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects, skills, and experience. Features dark/light mode, smooth animations, and a clean professional design.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
    gradient: 'from-purple-500 to-pink-600',
  },
];

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the projects I've built to solve real-world problems"
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`card group overflow-hidden hover:border-primary-200 dark:hover:border-primary-800 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Gradient header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
                <div className="relative text-white text-center px-6">
                  <div className="text-4xl mb-2 opacity-80">{'</>'}</div>
                  <p className="text-sm font-medium opacity-90">{project.tech[0]}</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
