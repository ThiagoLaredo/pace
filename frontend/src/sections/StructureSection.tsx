import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { DotGrid, RevealOnScroll } from '../components/Common/SectionComponents';
import { CheckCircleIcon } from '../components/Common/Icon';

const galleryImages = [
  {
    src: '/images/optimized/clinica/pace-clinica-18-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-18-480.webp 480w, /images/optimized/clinica/pace-clinica-18-640.webp 640w, /images/optimized/clinica/pace-clinica-18-960.webp 960w',
  },
  {
    src: '/images/optimized/clinica/pace-clinica-27-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-27-480.webp 480w, /images/optimized/clinica/pace-clinica-27-640.webp 640w, /images/optimized/clinica/pace-clinica-27-960.webp 960w',
  },
  {
    src: '/images/optimized/clinica/pace-clinica-35-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-35-480.webp 480w, /images/optimized/clinica/pace-clinica-35-640.webp 640w, /images/optimized/clinica/pace-clinica-35-960.webp 960w',
  },
  {
    src: '/images/optimized/clinica/pace-clinica-44-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-44-480.webp 480w, /images/optimized/clinica/pace-clinica-44-640.webp 640w, /images/optimized/clinica/pace-clinica-44-960.webp 960w',
  },
  {
    src: '/images/optimized/clinica/pace-clinica-63-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-63-480.webp 480w, /images/optimized/clinica/pace-clinica-63-640.webp 640w, /images/optimized/clinica/pace-clinica-63-960.webp 960w',
  },
  {
    src: '/images/optimized/clinica/pace-clinica-80-fallback.webp',
    srcSet:
      '/images/optimized/clinica/pace-clinica-80-480.webp 480w, /images/optimized/clinica/pace-clinica-80-640.webp 640w, /images/optimized/clinica/pace-clinica-80-960.webp 960w',
  },
];

function getRandomNextIndex(currentIndex: number) {
  if (galleryImages.length <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * galleryImages.length);
  }

  return nextIndex;
}

export const StructureSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(() =>
    Math.floor(Math.random() * galleryImages.length),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => getRandomNextIndex(currentIndex));
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="py-section-padding bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <div className="relative">
          <div className="absolute -top-5 -left-5 pointer-events-none" style={{ zIndex: 0, opacity: 0.65 }}>
            <DotGrid className="w-40 h-40 text-secondary" />
          </div>
          <RevealOnScroll>
          <div className="structure-gallery relative" style={{ zIndex: 1, position: 'relative' }}>
            <div className="structure-image-frame relative z-10 rounded-2xl overflow-hidden border-2 border-primary/20">
              <div className="structure-gallery__viewport">
                <img
                  key={galleryImages[activeImageIndex].src}
                  alt={`Nossa Estrutura ${activeImageIndex + 1}`}
                  className="structure-image structure-image--active"
                  src={galleryImages[activeImageIndex].src}
                  srcSet={galleryImages[activeImageIndex].srcSet}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={962}
                  height={642}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="structure-gallery__bullets" aria-label="Galeria da estrutura">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`structure-gallery__bullet ${index === activeImageIndex ? 'structure-gallery__bullet--active' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                    aria-pressed={index === activeImageIndex}
                  />
                ))}
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-lg border border-secondary/50 max-w-[200px] z-20">
              <p className="text-label-bold uppercase text-secondary mb-1">Tecnologia</p>
              <p className="text-body-md font-bold">Equipamentos de alta tecnologia</p>
            </div>
          </div>
          </RevealOnScroll>
        </div>

        {/* Right - Content */}
        <RevealOnScroll delay="0.12s">
          <div className="space-y-8">
            <h2 className="font-display-lg text-headline-lg uppercase leading-tight">
              Nossa Estrutura: Projetada para{' '}
              <span className="text-secondary">Resultados</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg">
              Ambiente técnico com tecnologia de ponta para avaliações e treinamentos. Unimos a
              biossegurança hospitalar com a energia dos centros de treinamento de alta performance.
            </p>
            <ul className="space-y-4 structure-features-list">
              <li className="structure-feature__item flex items-center gap-3">
                <CheckCircleIcon />
                <span className="font-bold">Salas de avaliação individualizadas</span>
              </li>
              <li className="structure-feature__item flex items-center gap-3">
                <CheckCircleIcon />
                <span className="font-bold">Área de musculação e funcional</span>
              </li>
              <li className="structure-feature__item flex items-center gap-3">
                <CheckCircleIcon />
                <span className="font-bold">Equipamentos de última geração para avaliação e treino</span>
              </li>
            </ul>
            <PrimaryButton variant="primary">Agende uma visita</PrimaryButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
