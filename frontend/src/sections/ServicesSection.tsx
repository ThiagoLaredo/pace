
import React, { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from '../components/Common/SectionComponents';
const services = [
  {
    title: 'Fisioterapia',
    description:
      'Reabilitação física para recuperação e retorno ao esporte e preparação física com treino funcional individualizado.',
    image: '/images/optimized/services/fisioterapia-fallback.webp',
    imageSrcSet: '/images/optimized/services/fisioterapia-320.webp 320w, /images/optimized/services/fisioterapia-480.webp 480w, /images/optimized/services/fisioterapia-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
  {
    title: 'Pace Sports',
    description:
      'Um programa de avaliação e treinamento individualizado que tem como objetivo detectar e corrigir eventuais déficits de mobilidade e força.',
    image: '/images/optimized/services/pace-sports-fallback.webp',
    imageSrcSet: '/images/optimized/services/pace-sports-320.webp 320w, /images/optimized/services/pace-sports-480.webp 480w, /images/optimized/services/pace-sports-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
  {
    title: 'Prevenção',
    description:
      'Um programa de prevenção e cuidado indicado para todas as idades, focado na manutenção da saúde articular e muscular.',
    image: '/images/optimized/services/prevencao-fallback.webp',
    imageSrcSet: '/images/optimized/services/prevencao-320.webp 320w, /images/optimized/services/prevencao-480.webp 480w, /images/optimized/services/prevencao-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
  {
    title: 'Recovery',
    description:
      'A recuperação após o exercício é essencial para a reparação muscular e tecidual, além da construção de força de elite.',
    image: '/images/optimized/services/recovery-fallback.webp',
    imageSrcSet: '/images/optimized/services/recovery-320.webp 320w, /images/optimized/services/recovery-480.webp 480w, /images/optimized/services/recovery-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
  {
    title: 'Fisioterapia Domiciliar',
    description:
      'Transforme sua qualidade de vida com sessões de fisioterapia domiciliar com nossa equipe especializada no conforto do seu lar.',
    image: '/images/optimized/services/domiciliar-fallback.webp',
    imageSrcSet: '/images/optimized/services/domiciliar-320.webp 320w, /images/optimized/services/domiciliar-480.webp 480w, /images/optimized/services/domiciliar-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
  {
    title: 'Aluguel de Equipamentos',
    description:
      'Recupere-se no conforto da sua casa com o aluguel de equipamentos para fisioterapia CPM e Crioterapia portáteis.',
    image: '/images/optimized/services/equipamentos-fallback.webp',
    imageSrcSet: '/images/optimized/services/equipamentos-320.webp 320w, /images/optimized/services/equipamentos-480.webp 480w, /images/optimized/services/equipamentos-512.webp 512w',
    imageSizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveByScroll = () => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.2;
      const end = rect.height - viewportHeight * 0.6;
      const distance = end <= 0 ? 1 : end;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / distance));
      const maxIndex = services.length - 1;
      const projectedIndex = Math.round(progress * maxIndex);
      const nextIndex = Math.min(maxIndex, Math.max(0, projectedIndex));

      setActiveIndex((prev) => {
        if (nextIndex > prev + 1) {
          return prev + 1;
        }

        if (nextIndex < prev - 1) {
          return prev - 1;
        }

        return prev === nextIndex ? prev : nextIndex;
      });
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveByScroll);
    };

    updateActiveByScroll();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <section className="py-section-padding relative services-section services-showcase" id="servicos">
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 services-section__intro">
            <div className="space-y-4 services-section__heading">
              <span className="text-primary font-label-bold uppercase tracking-widest">
                Tratamentos especializados
              </span>
              <h2 className="font-headline-lg text-headline-lg uppercase services-showcase__heading-title">Nossos Serviços</h2>
            </div>
          </div>
        </RevealOnScroll>

        <div
          ref={trackRef}
          className="services-showcase__track"
          style={{ '--service-count': services.length } as React.CSSProperties}
        >
          <div className="services-showcase__sticky">
            <div className="services-showcase__grid">
              <div className="services-showcase__list" role="list">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <article
                      key={service.title}
                      role="listitem"
                      className={`services-showcase__item ${isActive ? 'is-active' : ''}`}
                    >
                      <button
                        type="button"
                        className="services-showcase__trigger"
                        onClick={() => setActiveIndex(index)}
                        aria-expanded={isActive}
                      >
                        <span className="services-showcase__index">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="services-showcase__title">{service.title}</h3>
                      </button>

                      <div className="services-showcase__description-wrap" aria-hidden={!isActive}>
                        <p className="services-showcase__description">{service.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="services-showcase__media">
                <div className="services-showcase__media-frame">
                  {services.map((service, index) => (
                    <img
                      key={service.title}
                      alt={service.title}
                      className={`services-showcase__image ${index === activeIndex ? 'is-active' : ''}`}
                      src={service.image}
                      srcSet={service.imageSrcSet}
                      sizes={service.imageSizes}
                      width={512}
                      height={341}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
