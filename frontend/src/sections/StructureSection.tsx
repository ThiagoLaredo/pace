import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { DotGrid, RevealOnScroll } from '../components/Common/SectionComponents';
import { CheckCircleIcon } from '../components/Common/Icon';

const galleryImages = [
  '/images/clinica/pace_clinica-18.jpg',
  '/images/clinica/pace_clinica-27.jpg',
  '/images/clinica/pace_clinica-35.jpg',
  '/images/clinica/pace_clinica-44.jpg',
  '/images/clinica/pace_clinica-63.jpg',
  '/images/clinica/pace_clinica-80.jpg',
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
        <RevealOnScroll>
          <div className="structure-gallery relative">
            <DotGrid className="absolute -top-8 -left-8 w-32 h-32 text-secondary/30 z-0" />
            <div className="structure-image-frame relative z-10 rounded-2xl overflow-hidden border-2 border-primary/20">
              <div className="structure-gallery__viewport">
                {galleryImages.map((image, index) => (
                  <img
                    key={image}
                    alt={`Nossa Estrutura ${index + 1}`}
                    className={`structure-image ${index === activeImageIndex ? 'structure-image--active' : ''}`}
                    src={image}
                  />
                ))}
              </div>
              <div className="structure-gallery__bullets" aria-label="Galeria da estrutura">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
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
