import { useInView } from './useInView';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="text-center mb-16">
      <h2
        className={`font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.15s' }}
      >
        {subtitle}
      </p>
      <div
        className={`w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-6 rounded-full ${
          isInView ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s' }}
      />
    </div>
  );
}
