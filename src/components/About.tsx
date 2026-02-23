import { User, Target, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading.tsx';
import { useInView } from './useInView.ts';

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="section-container">
        <SectionHeading title="About Me" subtitle="Get to know me and my journey in software development" />

        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Background */}
          <div
            className={`card p-8 group hover:border-primary-200 dark:hover:border-primary-800 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Background
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I am an IT graduate with a strong foundation in computer science principles. 
              With hands-on experience in full stack development, I specialize in building 
              end-to-end web applications using modern technologies like React.js, Node.js, 
              and MySQL.
            </p>
          </div>

          {/* Skills overview */}
          <div
            className={`card p-8 group hover:border-primary-200 dark:hover:border-primary-800 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.25s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Skills Overview
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Proficient in React.js, JavaScript, PHP, Node.js, Express.js, and REST API 
              development. Experienced with MySQL databases, version control with Git, and 
              modern development tools like VS Code and Postman.
            </p>
          </div>

          {/* Career objective */}
          <div
            className={`card p-8 group hover:border-primary-200 dark:hover:border-primary-800 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Career Objective
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Seeking a challenging role as a Full Stack Developer where I can leverage my 
              technical skills to build innovative, scalable web solutions while continuing 
              to grow and contribute to a dynamic development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
