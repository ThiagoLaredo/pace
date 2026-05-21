import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../Common/Icon';

export interface ProfileCardProps {
  title: string;
  description: string;
  percentage: string;
  label: string;
  iconName: string;
  color: 'primary' | 'secondary';
  highlighted?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  description,
  percentage,
  label,
  iconName,
  color,
  highlighted = false,
}) => {
  const colorClass = color === 'primary' ? 'profile-card--primary' : 'profile-card--secondary';
  const highlightClass = highlighted ? 'profile-card--highlighted' : '';
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const targetValue = Number.parseInt(percentage.replace(/\D/g, ''), 10) || 0;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(0);
    hasAnimatedRef.current = false;
  }, [targetValue]);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
          setDisplayValue(targetValue);
          observer.disconnect();
          return;
        }

        const duration = 1200;
        let startTime = 0;

        const tick = (timestamp: number) => {
          if (!startTime) {
            startTime = timestamp;
          }

          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          const nextValue = Math.round(targetValue * eased);

          setDisplayValue(nextValue);

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };

        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targetValue]);

  return (
    <div ref={cardRef} className={`profile-card glass-dark ${colorClass} ${highlightClass}`}>
      {/* Background blur circle */}
      <div className="profile-card__blur"></div>

      {/* Icon */}
      <div className="profile-card__icon-wrap">
        <Icon name={iconName} className="text-4xl" />
      </div>

      {/* Title */}
      <h3 className="font-headline-md text-headline-md uppercase mb-4">{title}</h3>

      {/* Description */}
      <p className="text-on-surface-variant font-body-md mb-8">{description}</p>

      {/* Stats */}
      <div className="profile-card__stats flex items-baseline gap-2">
        <span className="profile-card__percentage text-5xl font-extrabold">{displayValue}%</span>
        <span className="profile-card__label text-label-bold uppercase">{label}</span>
      </div>
    </div>
  );
};
