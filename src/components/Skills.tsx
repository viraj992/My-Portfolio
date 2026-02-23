import type { JSX } from 'react';
import SectionHeading from './SectionHeading';
import { useInView } from './useInView';


/* ── tiny SVG tech icons ── */
const icons: Record<string, { svg: JSX.Element; color: string }> = {
  React: {
    color: '#61DAFB',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
      </svg>
    ),
  },
  JavaScript: {
    color: '#F7DF1E',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="2" y="2" width="28" height="28" rx="4" fill="currentColor" />
        <text x="16" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  TypeScript: {
    color: '#3178C6',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="2" y="2" width="28" height="28" rx="4" fill="currentColor" />
        <text x="16" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  HTML5: {
    color: '#E34F26',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M5 3l2.3 24L16 30l8.7-3L27 3H5z" fill="currentColor" />
        <text x="16" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">5</text>
      </svg>
    ),
  },
  CSS3: {
    color: '#1572B6',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M5 3l2.3 24L16 30l8.7-3L27 3H5z" fill="currentColor" />
        <text x="16" y="22" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">3</text>
      </svg>
    ),
  },
  'Tailwind CSS': {
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 8c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.96 1.12 2.86 2.04C18.22 15.42 20.08 17.33 24 17.33c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.96-1.12-2.86-2.04C21.78 9.91 19.92 8 16 8zM8 17.33c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.96 1.12 2.86 2.04 1.61 1.63 3.47 3.55 7.39 3.55 4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.96-1.12-2.86-2.04C13.78 19.25 11.92 17.33 8 17.33z" fill="currentColor" />
      </svg>
    ),
  },
  'Node.js': {
    color: '#339933',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" fill="currentColor" />
        <text x="16" y="21" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff" fontFamily="monospace">N</text>
      </svg>
    ),
  },
  'Express.js': {
    color: '#888888',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="2" y="2" width="28" height="28" rx="6" fill="currentColor" />
        <text x="16" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff" fontFamily="monospace">Ex</text>
      </svg>
    ),
  },
  PHP: {
    color: '#777BB4',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <ellipse cx="16" cy="16" rx="14" ry="9" fill="currentColor" />
        <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">PHP</text>
      </svg>
    ),
  },
  'REST API': {
    color: '#FF6B6B',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="3" y="6" width="26" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M3 12h26" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="9" r="1" fill="currentColor" />
        <circle cx="11" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <path d="M8 18h5M8 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  MySQL: {
    color: '#4479A1',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M6 6h20c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" fill="currentColor" />
        <text x="16" y="21" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="monospace">SQL</text>
      </svg>
    ),
  },
  MongoDB: {
    color: '#47A248',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M16 2c0 0-2 4-2 10s2 18 2 18 2-12 2-18S16 2 16 2z" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="6" ry="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  Git: {
    color: '#F05032',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M29.4 15.1L16.9 2.6c-.8-.8-2-.8-2.8 0l-2.6 2.6 3.3 3.3c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.2 3.2c.8-.3 1.7-.1 2.3.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.7-.7-.8-1.7-.4-2.5l-3-3v7.8c.2.1.4.3.6.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.2-.2.5-.4.8-.5v-7.9c-.3-.1-.5-.3-.8-.5-.7-.7-.8-1.7-.4-2.5l-3.2-3.3L2.6 14.1c-.8.8-.8 2 0 2.8L15.1 29.4c.8.8 2 .8 2.8 0L29.4 17.9c.8-.8.8-2 0-2.8z" fill="currentColor" />
      </svg>
    ),
  },
  'VS Code': {
    color: '#007ACC',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <path d="M24 2l6 3v22l-6 3-14-11.5L4 24l-2-2 8-6-8-6 2-2 6 5.5L24 2z" fill="currentColor" />
      </svg>
    ),
  },
  Postman: {
    color: '#FF6C37',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  npm: {
    color: '#CB3837',
    svg: (
      <svg viewBox="0 0 32 32" className="w-8 h-8">
        <rect x="2" y="8" width="28" height="16" rx="2" fill="currentColor" />
        <text x="16" y="21" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="sans-serif">npm</text>
      </svg>
    ),
  },
  GitHub: {
    color: '#a78bfa',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 2C8.27 2 2 8.27 2 16c0 6.18 4.01 11.42 9.57 13.27.7.13.96-.3.96-.67v-2.35C8.36 27.12 7.53 24.5 7.53 24.5c-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.28 1.52 4.08 1.16.13-.91.49-1.52.89-1.87-3.12-.36-6.4-1.56-6.4-6.94 0-1.53.55-2.79 1.44-3.77-.14-.36-.63-1.79.14-3.72 0 0 1.18-.38 3.85 1.44a13.4 13.4 0 017 0c2.67-1.82 3.85-1.44 3.85-1.44.76 1.93.28 3.36.14 3.72.9.98 1.44 2.24 1.44 3.77 0 5.4-3.28 6.57-6.41 6.92.5.44.96 1.3.96 2.62v3.89c0 .37.25.81.97.67C25.99 27.42 30 22.18 30 16c0-7.73-6.27-14-14-14z" fill="currentColor" />
      </svg>
    ),
  },
  Figma: {
    color: '#F24E1E',
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M12 30c2.2 0 4-1.8 4-4v-4h-4c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="currentColor" opacity="0.6" />
        <path d="M8 16c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z" fill="currentColor" opacity="0.75" />
        <path d="M8 6c0-2.2 1.8-4 4-4h4v8h-4c-2.2 0-4-1.8-4-4z" fill="currentColor" opacity="0.9" />
        <path d="M16 2h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V2z" fill="currentColor" />
        <circle cx="20" cy="16" r="4" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
};

/* ── category definitions ── */
interface SkillCategory {
  title: string;
  description: string;
  accent: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend Architecture & UI',
    description:
      'Technologies for building type-safe, responsive, and high-performance user interfaces.',
    accent: 'from-orange-400 to-amber-500',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend & API Development',
    description:
      'Server-side technologies for building robust, scalable APIs and business logic.',
    accent: 'from-green-400 to-emerald-500',
    skills: ['Node.js', 'Express.js', 'PHP', 'REST API'],
  },
  {
    title: 'Database & Storage',
    description:
      'Database systems for efficient data modeling, querying, and management.',
    accent: 'from-blue-400 to-cyan-500',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'DevTools & Workflow',
    description:
      'Tools and platforms that power my daily development workflow.',
    accent: 'from-purple-400 to-pink-500',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Figma'],
  },
];

/* ── single icon tile ── */
function SkillTile({ name, delay }: { name: string; delay: number }) {
  const data = icons[name];
  if (!data) return null;

  return (
    <div
      className="group relative flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-gray-100 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700/60 hover:border-primary-400 dark:hover:border-primary-500 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span style={{ color: data.color }} className="transition-transform duration-300 group-hover:scale-110">
        {data.svg}
      </span>

      {/* Tooltip name on hover */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-2.5 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-10">
        {name}
      </span>
    </div>
  );
}

/* ── main section ── */
export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to build amazing applications"
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`card p-8 hover:border-primary-200 dark:hover:border-primary-800 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${catIdx * 0.12}s` }}
            >
              {/* Category header */}
              <h3
                className={`font-display text-xl font-bold bg-gradient-to-r ${cat.accent} bg-clip-text text-transparent mb-2`}
              >
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Icon grid */}
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, idx) => (
                  <SkillTile
                    key={skill}
                    name={skill}
                    delay={catIdx * 120 + idx * 60}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
