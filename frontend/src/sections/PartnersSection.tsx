import React from 'react';
import { RevealOnScroll } from '../components/Common/SectionComponents';

const partners = [
  {
    name: 'Balance',
    image: '/images/optimized/partners/balance-fallback.webp',
    imageSrcSet:
      '/images/optimized/partners/balance-160.webp 160w, /images/optimized/partners/balance-240.webp 240w, /images/optimized/partners/balance-320.webp 320w',
  },
  {
    name: 'Boali',
    image: '/images/optimized/partners/boali-fallback.webp',
    imageSrcSet:
      '/images/optimized/partners/boali-160.webp 160w, /images/optimized/partners/boali-240.webp 240w, /images/optimized/partners/boali-320.webp 320w',
  },
  {
    name: 'Bauerfeind',
    image: '/images/optimized/partners/bauerfeind-fallback.webp',
    imageSrcSet:
      '/images/optimized/partners/bauerfeind-160.webp 160w, /images/optimized/partners/bauerfeind-240.webp 240w, /images/optimized/partners/bauerfeind-320.webp 320w',
  },
  {
    name: 'DJO',
    image: '/images/optimized/partners/djo-fallback.webp',
    imageSrcSet:
      '/images/optimized/partners/djo-160.webp 160w, /images/optimized/partners/djo-240.webp 240w, /images/optimized/partners/djo-320.webp 320w',
  },
];

interface PartnersSectionProps {
  compact?: boolean;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ compact = false }) => {
  return (
    <section
      className={`partners-section py-16 bg-surface-container-lowest overflow-hidden border-t border-outline-variant/10 ${compact ? 'partners-section--compact' : ''}`}
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <h3 className={`text-center font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant mb-12 ${compact ? 'partners-section__title--compact' : ''}`}>
            Nossos Parceiros
          </h3>
        </RevealOnScroll>
        <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 ${compact ? 'partners-section__logos--compact' : ''}`}>
          {partners.map((partner, index) => (
            <RevealOnScroll key={index} delay={`${0.08 * index}s`}>
              <img
                alt={partner.name}
                className={`h-10 md:h-12 w-auto object-contain ${compact ? 'partners-section__logo--compact' : ''}`}
                src={partner.image}
                srcSet={partner.imageSrcSet}
                sizes="(max-width: 768px) 120px, 160px"
                loading="lazy"
                decoding="async"
                width={320}
                height={120}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
