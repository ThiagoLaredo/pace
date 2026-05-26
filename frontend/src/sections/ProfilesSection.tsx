import React from 'react';
import {
  RevealOnScroll,
  SectionContainer,
  SectionTitle,
} from '../components/Common/SectionComponents';
import { ProfileCard } from '../components/Cards/ProfileCard';

const profiles = [
  {
    title: 'Dominante Psicossocial',
    description:
      'Entendemos o impacto do estresse, sono e fatores emocionais na percepção da dor e velocidade de recuperação.',
    percentage: '39%',
    label: 'Dos Casos',
    iconName: 'psychology',
    color: 'primary' as const,
  },
  {
    title: 'Dominante por Atividade',
    description:
      'Foco em atletas e entusiastas cujo diagnóstico está diretamente ligado ao volume ou técnica do gesto esportivo.',
    percentage: '46%',
    label: 'Dos Casos',
    iconName: 'fitness_center',
    color: 'primary' as const,
  },
  {
    title: 'Dominante Estrutural',
    description:
      'Casos com alterações anatômicas claras ou degenerações teciduais que exigem protocolos de carga específicos.',
    percentage: '15%',
    label: 'Dos Casos',
    iconName: 'architecture',
    color: 'primary' as const,
  },
];

export const ProfilesSection: React.FC = () => {
  return (
    <SectionContainer bgColor="surface-variant">
      <RevealOnScroll>
        <SectionTitle title="Os 3 Perfis da Clínica" centered />
      </RevealOnScroll>
      <div className="grid md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <RevealOnScroll key={index} delay={`${0.08 * index}s`}>
            <div className="h-full">
              <ProfileCard {...profile} highlighted={index === 1} />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
};
