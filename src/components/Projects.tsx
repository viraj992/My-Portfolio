import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useInView } from './useInView';
import cosmeticsImg from '../images/cosmetics.png';
import IconCoreImg from '../images/iconCore.png';
import portfolioImg from '../images/portfolio.png'
import workoutsImg from '../images/workouts.png'

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string; // New property for project image
}

const projects: Project[] = [
  {
    title: 'Beauty Cosmetics - Ecommerce website',
    description:
      'Beauty Cosmetics is a full-stack MERN e-commerce web application for cosmetic products with authentication, role-based authorization, cart management, order processing, and admin-controlled review moderation. The platform features responsive and animated UI built with Tailwind CSS, product search, pagination for large datasets, and secure order status management.',
    tech: ['React.js', 'Express.js', 'MongoDb', 'REST API', 'Node.js', 'TailwindCSS'],
    github: 'https://github.com/viraj992/Beauty-Cosmetics.git',
    demo: 'https://beauty-cosmetics-ecommerce.vercel.app/',
    image: cosmeticsImg,
  },
  {
    title: 'Icon-Core - Gym Website',
    description:
      'A fully responsive gym/fitness website built with React and TypeScript, featuring categorized programs, trainer profiles, pricing packages, a filterable schedule, a BMI calculator, reusable components, smooth animations, and a polished, modern UI.',
    tech: ['React.js','TypeScript' ,'Tailwind CSS', 'FramerMotion', 'Lucide React', 'Zustand', ],
    github: 'https://github.com/viraj992/Iron-core-GYM-WEB.git',
    demo: 'https://icon-core.netlify.app/',
    image: IconCoreImg,
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects, skills, and experience. Features dark/light mode, smooth animations, and a clean professional design.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/viraj992/My-Portfolio.git',
    demo: 'https://my-portfolio-k5vp.vercel.app/',
    image: portfolioImg,
  },
  {
    title: 'Workouts Tracking App',
    description:
      'A Flutter mobile application for tracking daily workouts, allowing users to add exercises, manage favorite workouts and equipment, and store data locally on the device.',
    tech: ['Flutter', 'dart'],
    github: 'https://github.com/viraj992/workouts-mobile-App.git',
    demo: 'none',
    image: workoutsImg,
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
              {/* Image header with hover overlay */}
              <div className="relative h-48 overflow-hidden rounded-t-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay buttons on hover */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}