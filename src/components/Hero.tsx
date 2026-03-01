import { useState, useEffect, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { useInView } from './useInView';
import profileImg from '../images/profile.png';

const roles = ['Frontend Developer', 'Full Stack Developer', 'Flutter Developer'];

function useTypingAnimation(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isWaiting) return;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, wordIndex, isDeleting, isWaiting, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

export default function Hero() {
  const { ref, isInView } = useInView(0.2);
  const typedRole = useTypingAnimation(roles, 100, 60, 2000);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -left-32 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="section-container relative z-10 py-20 pt-28 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left side – Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-8 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Available for opportunities
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.15s' }}
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="gradient-text">Viraj Ekanayake</span>
            </h1>

            {/* Animated role title */}
            <div
              className={`font-display text-xl md:text-2xl font-medium mb-6 h-9 md:h-10 flex items-center justify-center lg:justify-start ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <span className="gradient-text">{typedRole}</span>
              <span className="inline-block w-[3px] h-6 md:h-7 ml-1 bg-primary-500 dark:bg-primary-400 animate-pulse rounded-full" />
            </div>

            {/* Description */}
            <p
              className={`text-gray-500 dark:text-gray-400 text-base text-justify md:text-lg max-w-xl mb-10 leading-relaxed ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.45s' }}
            >
              IT graduate and Full Stack Developer specializing in building scalable web applications with React.js, Node.js, and modern technologies, as well as mobile applications using Flutter.
              Passionate about solving real-world problems through clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
                <ExternalLink className="w-4 h-4" />
                My Projects
              </a>
              <a href="/cv/viraj-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <ExternalLink className="w-4 h-4" />
                View CV
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className={`mt-12 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '1s' }}
            >
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex flex-col items-center lg:items-start gap-2 text-gray-400 hover:text-primary-500 transition-colors"
              >
                
              </a>
            </div>
          </div>

          {/* Right side – Profile image */}
          <div
            className={`flex-shrink-0 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full blur-2xl animate-pulse-slow" />
              
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary-300/30 dark:border-primary-500/20 animate-[spin_20s_linear_infinite]" />
              

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-primary-500/10">
                <img
                  src={profileImg}
                  alt="Developer profile photo"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              {/* Full Stack Developer badge (existing) */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Full Stack</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </div>

              {/* Frontend Developer badge */}
              <div className="absolute -top-2 -left-3 sm:-top-2 sm:-left-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <FaReact className="text-blue-500 w-4 h-4" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Frontend</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </div>

              {/* Flutter Developer badge */}
              <div className="absolute top-1/3 -right-16 sm:top-1/3 sm:-right-14 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <SiFlutter className="text-blue-400 w-4 h-4" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">Flutter</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
