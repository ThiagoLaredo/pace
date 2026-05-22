import React from 'react';
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { RevealOnScroll } from '../components/Common/SectionComponents';

export const CTASection: React.FC = () => {
  return (
    <section className="py-section-padding cta-section">
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <div className="cta-card-gradient border border-white/10 rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden group cta-section__card">
            <div className="absolute inset-0 cta-texture opacity-5"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-display-lg text-display-lg uppercase cta-section__title">
                Seu melhor pace começa aqui.
              </h2>
              <p className="text-on-surface-variant font-body-lg">
                Não espere a lesão para cuidar do seu corpo. Nossos especialistas estão prontos para
                elevar seu nível.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <PrimaryButton variant="primary" className="px-12 py-5 cta-section__cta">
                  Marcar Consulta Agora
                </PrimaryButton>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
