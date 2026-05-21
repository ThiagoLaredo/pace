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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="High performance training center"
          className="w-full h-full object-cover"
          src="/images/hero-2.jpg"
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
          <DotGrid className="w-48 h-48 text-secondary/30" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-entrance hero-entrance--scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};
