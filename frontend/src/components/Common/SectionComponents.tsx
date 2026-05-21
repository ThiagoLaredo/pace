import React, { useEffect, useRef, useState } from 'react';

export const MotionLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`motion-line ${className}`}></div>
);

export const DotGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`dot-grid ${className}`}></div>
);

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = '0s',
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': delay } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

interface SectionTitleProps {
  label?: string;
  title: string;
  showDivider?: boolean;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  showDivider = true,
  centered = false,
}) => {
  return (
    <div className={centered ? 'text-center mb-16 space-y-4' : 'space-y-4 mb-16'}>
      {label && (
        <span className="text-primary font-label-bold uppercase tracking-widest">
          {label}
        </span>
      )}
      <h2 className="font-headline-lg text-headline-lg uppercase">{title}</h2>
      {showDivider && <div className="w-24 h-1 bg-primary mx-auto"></div>}
    </div>
  );
};

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'surface-container-lowest' | 'surface-container' | 'surface-variant' | 'transparent';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  bgColor = 'transparent',
}) => {
  const bgClass = bgColor === 'surface-container-lowest' 
    ? 'bg-surface-container-lowest'
    : bgColor === 'surface-container'
    ? 'bg-surface-container'
    : bgColor === 'surface-variant'
    ? 'bg-surface-variant'
    : '';

  return (
    <section className={`py-section-padding ${bgClass} ${className}`}>
      <div className="max-w-container-max mx-auto px-gutter">
        {children}
      </div>
    </section>
  );
};
