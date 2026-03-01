import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:developer@example.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-slate-950 text-white border-t border-gray-800 dark:border-slate-800">
      {/* Scroll to top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/25 hover:-translate-y-1 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="section-container pt-16 pb-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="font-display text-2xl font-bold gradient-text">
            &lt;Dev /&gt;
          </a>

          {/* Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 dark:bg-slate-900 hover:bg-primary-600 flex items-center justify-center transition-all hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 dark:bg-slate-800" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} Full Stack Developer. All rights reserved.</span>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}
