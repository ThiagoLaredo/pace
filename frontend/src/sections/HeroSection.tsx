import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { MotionLine, DotGrid } from '../components/Common/SectionComponents';
import { ArrowIcon } from '../components/Common/Icon';

export const HeroSection: React.FC = () => {
  const heroKeywords = ['#Performance', '#Saúde', '#Bem-estar'];
  const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveKeywordIndex((prev) => (prev + 1) % heroKeywords.length);
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [heroKeywords.length]);

  return (
    <section className="hero-section relative min-h-[90vh] flex items-center overflow-hidden pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="High performance training center"
          className="hero-section__image w-full h-full object-cover"
          src="/images/optimized/hero/hero-new-fallback.webp"
          srcSet="/images/optimized/hero/hero-new-640.webp 640w, /images/optimized/hero/hero-new-960.webp 960w, /images/optimized/hero/hero-new-1280.webp 1280w, /images/optimized/hero/hero-new-1672.webp 1672w"
          sizes="100vw"
          width={1672}
          height={941}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="hero__overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="hero-entrance hero-entrance--left space-y-8">
          {/* Label */}
          <div className="hero-entrance hero-entrance--label inline-flex items-center gap-4">
            <MotionLine className="w-12" />
            <span className="text-secondary font-label-bold uppercase tracking-widest">
              {heroKeywords[activeKeywordIndex]}
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-entrance hero-entrance--heading font-display-lg text-display-lg uppercase leading-none">
            Mais do que<br />
            <span className="text-primary italic">fisioterapia.</span>
          </h1>

          {/* Description */}
          <p className="hero-entrance hero-entrance--description text-on-surface-variant font-body-lg max-w-md">
            Clínica de Fisioterapia Ortopédica e Esportiva e Centro de Preparação
            Física. Onde a ciência encontra a performance de elite.
          </p>

          {/* Buttons */}
          <div className="hero-entrance hero-entrance--buttons flex flex-wrap gap-4 pt-4">
            <PrimaryButton variant="primary" icon={<ArrowIcon />}>
              Faça seu agendamento
            </PrimaryButton>
            <button className="hero-methodology-btn border border-outline text-on-surface font-label-bold text-label-bold uppercase px-8 py-4 rounded-full hover:bg-surface-variant transition-all">
              Nossa Metodologia
            </button>
          </div>
        </div>

        {/* Right Decoration */}
        <div className="hero-entrance hero-entrance--right hidden md:flex justify-end items-end">
          <DotGrid className="w-48 h-48 text-secondary"/>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-entrance hero-entrance--scroll hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="hero-scroll-indicator__label">Scroll</span>
        <div className="hero-scroll-indicator__mouse" aria-hidden="true">
          <span className="hero-scroll-indicator__wheel"></span>
        </div>
      </div>
    </section>
  );
};
