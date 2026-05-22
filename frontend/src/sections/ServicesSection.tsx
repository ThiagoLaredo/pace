
import React from 'react';
import { ServiceCard } from '../components/Cards/ServiceCard';
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
  return (
    <section className="py-section-padding relative services-section" id="servicos">
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 services-section__intro">
            <div className="space-y-4 services-section__heading">
            <span className="text-primary font-label-bold uppercase tracking-widest">
                Tratamentos especializados
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase">Nossos Serviços</h2>
            </div>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={`${0.08 * index}s`}>
              <ServiceCard {...service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
